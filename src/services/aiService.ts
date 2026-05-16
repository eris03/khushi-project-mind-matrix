import { GoogleGenAI, Type } from "@google/genai";
import { MeaningDetail } from "../types";

let aiInstance: GoogleGenAI | null = null;

// Cache meanings so the same word is never fetched twice (saves quota)
const meaningCache = new Map<string, MeaningDetail>();
// Cache English translations of poems
const translationCache = new Map<string, string>();

function getApiKey(): string | null {
  // 1. User-provided key saved in Settings (highest priority)
  const userKey = localStorage.getItem('kk_gemini_key')?.trim();
  if (userKey && userKey.length > 10) return userKey;

  // 2. VITE_ prefixed env var (standard Vite approach — most reliable)
  const viteKey = (import.meta as any).env?.VITE_GEMINI_API_KEY as string | undefined;
  if (viteKey && viteKey !== 'paste_your_api_key_here' && viteKey.length > 10) return viteKey;

  // 3. Vite define-injected process.env (fallback)
  const defineKey = process.env.GEMINI_API_KEY;
  if (defineKey && defineKey !== 'paste_your_api_key_here' && defineKey.length > 10) return defineKey;

  return null;
}

function getAI(): GoogleGenAI | null {
  const apiKey = getApiKey();
  if (!apiKey) return null;
  // Always create fresh instance so key changes (localStorage) are picked up immediately
  if (!aiInstance) aiInstance = new GoogleGenAI({ apiKey });
  return aiInstance;
}

// Call this after saving a new key to force re-init
export function resetAIInstance() {
  aiInstance = null;
}

/* Groq fallback: free LLM (14,400 req/day, 30 req/min) */
async function groqFallback(word: string, contextPoem: string): Promise<MeaningDetail | null> {
  const groqKey = localStorage.getItem('kk_groq_key')?.trim()
    || (import.meta as any).env?.VITE_GROQ_API_KEY as string | undefined;
  if (!groqKey || groqKey.length < 10) return null;
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{
          role: 'user',
          content: `You are a Kannada literary expert. Give the precise meaning of the word "${word}" as used in this Kannada poem:\n\n"${contextPoem}"\n\nRespond with ONLY a JSON object (no markdown, no explanation) in this exact format:\n{"kn":"meaning in Kannada","en":"meaning in English","hi":"meaning in Hindi","pronunciation":"phonetic pronunciation","example":"short English example sentence"}`,
        }],
        max_tokens: 250,
        temperature: 0.3,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) return null;
    const result = JSON.parse(match[0]);
    return result.en ? (result as MeaningDetail) : null;
  } catch {
    return null;
  }
}

/* Fallback: Free Dictionary API for romanised / English words */
async function freeDictFallback(word: string): Promise<MeaningDetail | null> {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const def = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
    const phonetic = data?.[0]?.phonetic ?? '';
    if (!def) return null;
    return { kn: def, en: def, hi: def, pronunciation: phonetic, example: data?.[0]?.meanings?.[0]?.definitions?.[0]?.example };
  } catch {
    return null;
  }
}

/* Build meaning from known Kannada literary terms when no API is available */
function buildOfflineMeaning(word: string): MeaningDetail {
  const terms: Record<string, MeaningDetail> = {
    'ಚೇತನ':     { kn: 'ಜೀವ, ಪ್ರಜ್ಞೆ, ಶಕ್ತಿ', en: 'Consciousness / Spirit / Life-force', hi: 'चेतना / आत्मा', pronunciation: 'Chē-ta-na' },
    'ಅನಿಕೇತನ':  { kn: 'ಮನೆ ಇಲ್ಲದವನು, ಸ್ವತಂತ್ರ', en: 'Houseless / Unbound / Universal', hi: 'अनिकेतन — बिना घर का', pronunciation: 'A-ni-kē-ta-na' },
    'ಕಾಯಕ':     { kn: 'ಕೆಲಸ, ಸೇವೆ', en: 'Work / Labour / Service', hi: 'कायक — कार्य/सेवा', pronunciation: 'Kā-ya-ka' },
    'ವಚನ':      { kn: 'ಮಾತು, ಪ್ರತಿಜ್ಞೆ, ಭಕ್ತಿ ಕವಿತೆ', en: 'Vachana — devotional verse / a word / vow', hi: 'वचन — भक्ति कविता', pronunciation: 'Va-cha-na' },
    'ಕೀರ್ತನ':   { kn: 'ದೇವರ ಸ್ತುತಿ, ಭಕ್ತಿ ಗೀತೆ', en: 'Kirtana — devotional hymn / song of praise', hi: 'कीर्तन — भक्ति गीत', pronunciation: 'Kīr-ta-na' },
    'ಭಾವ':      { kn: 'ಭಾವನೆ, ಅನುಭವ', en: 'Emotion / Feeling / Sentiment', hi: 'भाव — भावना', pronunciation: 'Bhā-va' },
    'ಕಾವ್ಯ':    { kn: 'ಕವಿತೆ, ಸಾಹಿತ್ಯ', en: 'Poetry / Literary composition', hi: 'काव्य — कविता', pronunciation: 'Kā-vya' },
    'ರಾಗ':      { kn: 'ಸಂಗೀತದ ಸ್ವರ ಪದ್ಧತಿ, ಪ್ರೇಮ', en: 'Raga — musical scale / love / attachment', hi: 'राग — संगीत / प्रेम', pronunciation: 'Rā-ga' },
    'ಜ್ಞಾನ':    { kn: 'ತಿಳಿವಳಿಕೆ, ಬ್ರಹ್ಮಜ್ಞಾನ', en: 'Wisdom / Knowledge / Enlightenment', hi: 'ज्ञान — बुद्धि / विद्या', pronunciation: 'Jñā-na' },
    'ಮೋಕ್ಷ':    { kn: 'ಮುಕ್ತಿ, ಸ್ವಾತಂತ್ರ್ಯ', en: 'Liberation / Moksha / Spiritual freedom', hi: 'मोक्ष — मुक्ति', pronunciation: 'Mōk-sha' },
  };
  if (terms[word]) return terms[word];
  return {
    kn: `"${word}" — ಈ ಪದದ ಅರ್ಥ ತಿಳಿಯಲು Gemini API key ಅಗತ್ಯ. aistudio.google.com ನಿಂದ ಉಚಿತ key ಪಡೆಯಿರಿ.`,
    en: `"${word}" — Add your free Gemini API key in the .env file to get AI-powered meanings. Get one free at aistudio.google.com`,
    hi: `"${word}" — Gemini API key .env फ़ाइल में जोड़ें। aistudio.google.com पर मुफ़्त key पाएं।`,
  };
}

function getGroqKey(): string | null {
  const key = localStorage.getItem('kk_groq_key')?.trim()
    || (import.meta as any).env?.VITE_GROQ_API_KEY as string | undefined;
  return key && key.length > 10 && key !== 'paste_your_groq_key_here' ? key : null;
}

async function groqChat(prompt: string, maxTokens = 800): Promise<string | null> {
  const key = getGroqKey();
  if (!key) return null;
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens,
        temperature: 0.2,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch { return null; }
}

export const aiService = {
  /* Translate a Kannada poem into beautiful English — for display & reading aloud */
  async translateToEnglish(poemId: string, kannadaText: string): Promise<string> {
    if (translationCache.has(poemId)) return translationCache.get(poemId)!;

    // Detect if it's already mostly English (no Kannada characters)
    const hasKannada = /[ಀ-೿]/.test(kannadaText);
    if (!hasKannada) {
      translationCache.set(poemId, kannadaText);
      return kannadaText;
    }

    const prompt = `You are a skilled literary translator specialising in Kannada poetry. Translate the following Kannada poem into beautiful, poetic English. Preserve the line breaks, the emotional tone, and the poetic rhythm. Return ONLY the translated English poem — no title, no explanation, no extra text.\n\n${kannadaText}`;

    // Try Groq first (faster quota)
    const groqResult = await groqChat(prompt, 600);
    if (groqResult && groqResult.length > 10) {
      translationCache.set(poemId, groqResult);
      return groqResult;
    }

    // Try Gemini
    const ai = getAI();
    if (ai) {
      try {
        const response = await ai.models.generateContent({ model: 'gemini-1.5-flash', contents: prompt });
        const result = response.text?.trim();
        if (result && result.length > 10) {
          translationCache.set(poemId, result);
          return result;
        }
      } catch { /* fall through */ }
    }

    // Fallback: return original
    return kannadaText;
  },

  /* Transliterate Kannada poem to phonetic English for better TTS pronunciation */
  async prepareForSpeech(text: string, language: string): Promise<string> {
    if (language !== 'kn') return text;

    const prompt = `You are a Kannada pronunciation expert. Transliterate the following Kannada poem into English phonetics (write exactly how it sounds when spoken aloud). Preserve line breaks. Return ONLY the transliterated text, nothing else:\n\n${text}`;

    // Try Gemini first
    const ai = getAI();
    if (ai) {
      try {
        const response = await ai.models.generateContent({ model: "gemini-1.5-flash", contents: prompt });
        const result = response.text?.trim();
        if (result && result.length > 10) return result;
      } catch { /* fall through to Groq */ }
    }

    // Try Groq as fallback
    const groqKey = localStorage.getItem('kk_groq_key')?.trim()
      || (import.meta as any).env?.VITE_GROQ_API_KEY as string | undefined;
    if (groqKey && groqKey.length > 10) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 500,
            temperature: 0.1,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const result = data.choices?.[0]?.message?.content?.trim();
          if (result && result.length > 10) return result;
        }
      } catch { /* fall through */ }
    }

    return text;
  },

  async getWordMeaning(word: string, contextPoem: string): Promise<MeaningDetail> {
    // Return cached result instantly — saves quota
    if (meaningCache.has(word)) return meaningCache.get(word)!;

    const ai = getAI();

    /* ── Path 1: Gemini AI (best, needs API key) ── */
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-1.5-flash",
          contents: `You are a Kannada literary expert. Give the precise meaning of the word "${word}" as used in this Kannada poem context:\n\n"${contextPoem}"\n\nProvide meanings in Kannada, English, and Hindi. Also provide a phonetic pronunciation and a short example usage in English.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                kn:            { type: Type.STRING, description: "Meaning in Kannada" },
                en:            { type: Type.STRING, description: "Meaning in English" },
                hi:            { type: Type.STRING, description: "Meaning in Hindi" },
                pronunciation: { type: Type.STRING, description: "Phonetic pronunciation" },
                example:       { type: Type.STRING, description: "Example sentence in English" },
              },
              required: ["kn", "en", "hi"],
            },
          },
        });
        const result = JSON.parse(response.text || "{}");
        if (result.en) {
          meaningCache.set(word, result as MeaningDetail);
          return result as MeaningDetail;
        }
      } catch (err) {
        console.warn("Gemini failed, trying fallback:", err);
      }
    }

    /* ── Path 2: Groq AI (free, 14,400 req/day) ── */
    const groqResult = await groqFallback(word, contextPoem);
    if (groqResult) {
      meaningCache.set(word, groqResult);
      return groqResult;
    }

    /* ── Path 4: Free Dictionary API (English words) ── */
    const latinWord = word.replace(/[^\x00-\x7F]/g, '').trim();
    if (latinWord.length > 1) {
      const dictResult = await freeDictFallback(latinWord);
      if (dictResult) return dictResult;
    }

    /* ── Path 5: Offline known terms / helpful error ── */
    const offline = buildOfflineMeaning(word);
    meaningCache.set(word, offline);
    return offline;
  },
};
