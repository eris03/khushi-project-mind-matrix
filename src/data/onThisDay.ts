// Karnataka & Kannada Literary History — keyed by "MM-DD"
export interface LitEvent {
  title: { kn: string; en: string };
  description: { kn: string; en: string };
  year?: string;
}

export const LITERARY_EVENTS: Record<string, LitEvent> = {
  '01-31': {
    title: { kn: 'ದ.ರಾ. ಬೇಂದ್ರೆ ಜನ್ಮದಿನ', en: 'D.R. Bendre\'s Birthday' },
    description: { kn: '"ಅಂಬಿಕಾತನಯದತ್ತ" ಎಂಬ ಕಾವ್ಯನಾಮದ ಬೇಂದ್ರೆ ಕನ್ನಡ ಕವಿತೆಗೆ ಹೊಸ ಜೀವ ನೀಡಿದರು.', en: 'Bendre, who wrote under the pen name "Ambikatanayadatta", breathed new life into Kannada poetry.' },
    year: '1896'
  },
  '02-07': {
    title: { kn: 'ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ ಜನ್ಮದಿನ', en: 'G.S. Shivarudrappa\'s Birthday' },
    description: { kn: 'ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ ಅಧ್ಯಕ್ಷರಾಗಿ ಮತ್ತು ಮಹಾನ್ ಕವಿಯಾಗಿ ಶ್ರೀ ಶಿವರುದ್ರಪ್ಪ ಜನ್ಮ ತಾಳಿದರು.', en: 'The great poet and Kannada Sahitya Parishat president G.S. Shivarudrappa was born today.' },
    year: '1926'
  },
  '02-18': {
    title: { kn: 'ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ ಜನ್ಮದಿನ', en: 'Gopalakrishna Adiga\'s Birthday' },
    description: { kn: 'ಕನ್ನಡ ನವ್ಯ ಕಾವ್ಯ ಚಳವಳಿಯ ಪ್ರವರ್ತಕ ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ ಇಂದು ಜನಿಸಿದರು.', en: 'Gopalakrishna Adiga, pioneer of the Navya (Modernist) movement in Kannada poetry, was born today.' },
    year: '1918'
  },
  '03-29': {
    title: { kn: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ ಜನ್ಮದಿನ', en: 'D.V. Gundappa\'s Birthday' },
    description: { kn: '"ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ"ದ ರಚನಕಾರ ಡಿ.ವಿ.ಜಿ ಕನ್ನಡದ ಭಗವದ್ಗೀತೆ ಬರೆದ ತತ್ತ್ವಜ್ಞಾನಿ ಕವಿ.', en: 'DVG, author of "Mankutimmana Kagga" — called the Bhagavad Gita of Kannada — was born today.' },
    year: '1887'
  },
  '04-11': {
    title: { kn: 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಚಳವಳಿ', en: 'Gokak Movement Anniversary' },
    description: { kn: 'ಕನ್ನಡ ಭಾಷೆಗೆ ಪ್ರಥಮ ದರ್ಜೆ ನೀಡಲು ನಡೆದ ಗೋಕಾಕ್ ಚಳವಳಿ ಕನ್ನಡ ಉಳಿವಿನ ಇತಿಹಾಸದಲ್ಲಿ ಸುವರ್ಣ ಅಧ್ಯಾಯ.', en: 'The Gokak Movement fought for official recognition of Kannada — a golden chapter in the language\'s history.' },
    year: '1982'
  },
  '05-10': {
    title: { kn: 'ಬಿ.ಎಂ. ಶ್ರೀಕಂಠಯ್ಯ ಜನ್ಮದಿನ', en: 'B.M. Srikantaiah\'s Birthday' },
    description: { kn: '"ಇಂಗ್ಲಿಷ್ ಗೀತೆಗಳು" ಅನುವಾದಿಸಿ ಕನ್ನಡ ಆಧುನಿಕ ಕಾವ್ಯಕ್ಕೆ ಬೀಜ ಬಿತ್ತಿದ "ಬಿ.ಎಂ.ಶ್ರೀ".', en: '"B.M. Sri" who sowed the seeds of modern Kannada poetry by translating English songs was born today.' },
    year: '1884'
  },
  '06-06': {
    title: { kn: 'ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್ ಜನ್ಮದಿನ', en: 'Masti Venkatesha Iyengar\'s Birthday' },
    description: { kn: '"ಕನ್ನಡದ ಆಸ್ತಿ" ಎನಿಸಿಕೊಂಡ ಮಾಸ್ತಿ ಕನ್ನಡ ಕಥಾ ಸಾಹಿತ್ಯಕ್ಕೆ ನೀಡಿದ ಕೊಡುಗೆ ಅಮೂಲ್ಯ.', en: '"Masti" — known as the "asset of Kannada" — made an invaluable contribution to Kannada short story literature.' },
    year: '1891'
  },
  '06-16': {
    title: { kn: 'ಚಂದ್ರಶೇಖರ ಕಂಬಾರ ಜನ್ಮದಿನ', en: 'Chandrashekhar Kambar\'s Birthday' },
    description: { kn: '೨೦೧೧ರ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತ ಕಂಬಾರ ಉತ್ತರ ಕರ್ನಾಟಕ ಜಾನಪದ ಸಂಸ್ಕೃತಿಯ ಧ್ವನಿ.', en: 'Jnanpith 2011 laureate Kambar is the voice of North Karnataka\'s folk culture.' },
    year: '1937'
  },
  '07-09': {
    title: { kn: 'ವಿ.ಕೆ. ಗೋಕಾಕ್ ಜನ್ಮದಿನ', en: 'V.K. Gokak\'s Birthday' },
    description: { kn: '"ಭಾರತ ಸಿಂಧು ರಶ್ಮಿ" ಮಹಾಕಾವ್ಯ ರಚಿಸಿ ೧೯೯೦ರ ಜ್ಞಾನಪೀಠ ಗೆದ್ದ ಗೋಕಾಕ್ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಲೋಕದ ದಿಗ್ಗಜ.', en: 'Gokak, who won Jnanpith 1990 for the epic "Bharata Sindhu Rashmi", was a colossus of Kannada literature.' },
    year: '1909'
  },
  '07-16': {
    title: { kn: 'ಎಸ್.ಎಲ್. ಭೈರಪ್ಪ ಜನ್ಮದಿನ', en: 'S.L. Bhyrappa\'s Birthday' },
    description: { kn: '"ಪರ್ವ", "ವಂಶವೃಕ್ಷ" ಮುಂತಾದ ಮಹಾನ್ ಕನ್ನಡ ಕಾದಂಬರಿಗಳ ಲೇಖಕ ಭೈರಪ್ಪ ಇಂದು ಜನಿಸಿದರು.', en: 'Author of great Kannada novels like "Parva" and "Vamshavruksha", S.L. Bhyrappa was born today.' },
    year: '1931'
  },
  '09-01': {
    title: { kn: 'ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ ಸ್ಥಾಪನೆ', en: 'Kannada Sahitya Parishat Founded' },
    description: { kn: 'ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಸಂರಕ್ಷಣೆಗಾಗಿ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ ಸ್ಥಾಪನೆಯಾಯಿತು.', en: 'The Kannada Sahitya Parishat, dedicated to preserving Kannada language and literature, was established.' },
    year: '1915'
  },
  '10-28': {
    title: { kn: 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಸಂಭ್ರಮ', en: 'Karnataka Rajyotsava Countdown' },
    description: { kn: 'ಕರ್ನಾಟಕ ಏಕೀಕರಣದ ಸಂಭ್ರಮ ನಾಲ್ಕೇ ದಿನಗಳಲ್ಲಿ! ಕನ್ನಡ ನಾಡಿನ ಹಿರಿಮೆ ಸ್ಮರಿಸಿ.', en: 'Karnataka Rajyotsava is just 4 days away! Celebrate the glory of the Kannada land.' },
    year: '1956'
  },
  '11-01': {
    title: { kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯೋತ್ಸವ', en: 'Karnataka Rajyotsava' },
    description: { kn: 'ಕರ್ನಾಟಕ ಏಕೀಕರಣ ದಿನ! ಕನ್ನಡ ನಾಡು, ನುಡಿ, ಜನ ಎಲ್ಲರಿಗೂ ರಾಜ್ಯೋತ್ಸವ ಶುಭಾಶಯಗಳು.', en: 'Karnataka Formation Day! Happy Rajyotsava to every Kannadiga — celebrate our language, land & people.' },
    year: '1956'
  },
  '12-29': {
    title: { kn: 'ಕುವೆಂಪು ಜನ್ಮದಿನ', en: 'Kuvempu\'s Birthday' },
    description: { kn: 'ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು ಅವರ ಜನ್ಮದಿನ. "ಓ ನನ್ನ ಚೇತನ ಆಗು ನೀ ಅನಿಕೇತನ" ಎಂದು ಹಾಡಿದ ಮಹಾಕವಿ.', en: 'Birthday of Rashtrakavi Kuvempu — the great poet who sang "O my spirit, become universal."' },
    year: '1904'
  },
};

// Fallback facts for days with no specific event
export const KANNADA_FACTS = [
  {
    title: { kn: 'ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಇತಿಹಾಸ', en: 'History of Kannada Literature' },
    description: { kn: 'ಕನ್ನಡ ಸಾಹಿತ್ಯವು ೧,೫೦೦ ವರ್ಷಗಳಿಗೂ ಹಳೆಯದು. ಪ್ರಾಚೀನ ಕಾಲದಿಂದ ಆಧುನಿಕ ಕಾಲದವರೆಗೆ ಅನೇಕ ಮಹಾನ್ ಕವಿಗಳು ಕನ್ನಡ ಭಾಷೆಯನ್ನು ಸಮೃದ್ಧಗೊಳಿಸಿದ್ದಾರೆ.', en: 'Kannada literature is over 1,500 years old. Countless great poets from ancient to modern times have enriched the Kannada language.' }
  },
  {
    title: { kn: 'ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರು', en: 'Jnanpith Award Winners' },
    description: { kn: 'ಕರ್ನಾಟಕ ಭಾರತದಲ್ಲಿ ಅತ್ಯಧಿಕ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಗೆದ್ದ ರಾಜ್ಯ — ಕುವೆಂಪು, ಬೇಂದ್ರೆ, ಮಾಸ್ತಿ, ಅಡಿಗ, ಭೈರಪ್ಪ, ಕಂಬಾರ ಮುಂತಾದ ೮ ಬಾರಿ.', en: 'Karnataka has won the Jnanpith Award 8 times — the most of any Indian state — including Kuvempu, Bendre, Masti, and Kambar.' }
  },
  {
    title: { kn: 'ವಚನ ಸಾಹಿತ್ಯ', en: 'Vachana Literature' },
    description: { kn: '೧೨ನೇ ಶತಮಾನದ ಬಸವಣ್ಣ, ಅಕ್ಕಮಹಾದೇವಿ ಮತ್ತು ಇತರ ಶರಣರ ವಚನಗಳು ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಅಮೂಲ್ಯ ಕೊಡುಗೆ.', en: 'The 12th-century Vachanas of Basavanna, Akka Mahadevi, and other saints are an invaluable gift to Kannada literature.' }
  },
  {
    title: { kn: 'ಕನ್ನಡ ಲಿಪಿ', en: 'Kannada Script' },
    description: { kn: 'ಕನ್ನಡ ಲಿಪಿ ಸುಮಾರು ೧,೯೦೦ ವರ್ಷ ಹಳೆಯದು. ಇದು ಭ್ರಾಹ್ಮಿ ಲಿಪಿಯಿಂದ ವಿಕಸನಗೊಂಡ ಲಿಪಿ.', en: 'The Kannada script is nearly 1,900 years old, having evolved from the ancient Brahmi script.' }
  },
  {
    title: { kn: 'ಕಿರಾತಾರ್ಜುನೀಯ', en: 'Kiratarjuniya — Oldest Kannada Work' },
    description: { kn: '"ಕಿರಾತಾರ್ಜುನೀಯ" ಕನ್ನಡದ ಪ್ರಾಚೀನ ಕಾವ್ಯಗಳಲ್ಲಿ ಒಂದು. ಹಳೆಗನ್ನಡ ಸಾಹಿತ್ಯ ೯ನೇ ಶತಮಾನದಷ್ಟು ಹಿಂದಿನದು.', en: '"Kiratarjuniya" is among the earliest Kannada works. Old Kannada literature dates back to the 9th century.' }
  },
  {
    title: { kn: 'ದಾಸ ಸಾಹಿತ್ಯ', en: 'Dasa Sahitya' },
    description: { kn: 'ಪುರಂದರದಾಸರು ಮತ್ತು ಕನಕದಾಸರು ರಚಿಸಿದ ಕೀರ್ತನೆಗಳು ಇಂದಿಗೂ ಕರ್ನಾಟಕ ಸಂಗೀತದ ಆಧಾರ ಸ್ತಂಭ.', en: 'The kirtanas of Purandaradasa and Kanakadasa remain the foundation of Karnataka classical music to this day.' }
  },
];

export function getOnThisDay(language: 'kn' | 'en' | 'hi'): { title: string; description: string; year?: string } {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const key = `${mm}-${dd}`;

  const event = LITERARY_EVENTS[key];
  if (event) {
    return {
      title: language === 'kn' ? event.title.kn : event.title.en,
      description: language === 'kn' ? event.description.kn : event.description.en,
      year: event.year,
    };
  }

  // Fallback: pick a fact based on day-of-year so it cycles
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const fact = KANNADA_FACTS[dayOfYear % KANNADA_FACTS.length];
  return {
    title: language === 'kn' ? fact.title.kn : fact.title.en,
    description: language === 'kn' ? fact.description.kn : fact.description.en,
  };
}
