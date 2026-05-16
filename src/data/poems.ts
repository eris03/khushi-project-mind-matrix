import { Poem } from '../types';

export const POEMS: Poem[] = [
  {
    id: 'aniketana',
    title: {
      kn: 'ಓ ನನ್ನ ಚೇತನ ಆಗು ನೀ ಅನಿಕೇತನ',
      en: 'O my Spirit, become Unhoused',
      hi: 'ओ मेरी आत्मा, तुम अनिकेतन बनो'
    },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ವಿಶ್ವಮಾನವ ಸಂದೇಶವನ್ನು ಸಾರುವ ಕುವೆಂಪು ಅವರ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಕವಿತೆ.',
      en: 'Kuvempu\'s most famous poem conveying the message of universal citizenship.',
      hi: 'विश्व नागरिकता का संदेश देने वाली कुवेम्पू की सबसे प्रसिद्ध कविता।'
    },
    content: `ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ!
ರೂಪರೂಪಗಳನು ದಾಟಿ, ನಾಮಕೋಟಿಗಳನು ಮೀಟಿ,
ಎದೆಯ ಬಿರಿಯೆ ಭಾವದೀಟಿ, ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ!

ನೂರು ಮತದ ಹೊಟ್ಟೆಯೊಳು, ನೂರು ತತ್ವದ ಗುಟ್ಟೆಯೊಳು,
ನೂರು ವಾದದ ಹಟ್ಟೆಯೊಳು, ಮುಕ್ತವಾಗಿ ಹಾರು ನೀನು!
ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ!`,
    meaning: {
      'ಚೇತನ': { 
        kn: 'ಜೀವ, ಶಕ್ತಿ', 
        en: 'Spirit/Consciousness', 
        hi: 'चेतना/आत्मा',
        pronunciation: 'Chē-ta-na',
        example: 'ಆತ್ಮನ ಚೇತನವು ಮನುಷ್ಯನಿಗೆ ಮುನ್ನಡೆಯಲು ಶಕ್ತಿಯನ್ನು ನೀಡುತ್ತದೆ.'
      },
      'ಅನಿಕೇತನ': { kn: 'ಮನೆಯಿಲ್ಲದವನು, ಸೀಮಿತಗೊಳ್ಳದವನು', en: 'Unhoused/Universal', hi: 'अनिकेतन/सार्वभौमिक' },
      'ಬಿರಿ': { kn: 'ಒಡೆಯುವುದು', en: 'To split/open', hi: 'फटना' }
    },
    bhavartha: {
      kn: 'ಈ ಕವಿತೆಯಲ್ಲಿ ಕವಿ ತನ್ನ ಆತ್ಮಕ್ಕೆ ಸಾರ್ವತ್ರಿಕವಾಗಿ ಬೆಳೆಯಲು ಕರೆ ನೀಡುತ್ತಾರೆ. ಯಾವುದೇ ಧರ್ಮ, ಮತ ಅಥವಾ ದೇಶದ ಗಡಿಗಳಿಗೆ ಸೀಮಿತವಾಗದೆ ವಿಶ್ವಮಾನವನಾಗಲು ಪ್ರೇರೇಪಿಸುತ್ತಾರೆ.',
      en: 'In this poem, the poet calls upon his soul to break free from the boundaries of religion, creed, and nationality to become a universal being.',
      hi: 'इस कविता में, कवि अपनी आत्मा से धर्म, पंथ और राष्ट्रीयता की सीमाओं से मुक्त होकर एक सार्वभौमिक प्राणी बनने का आह्वान करते हैं।'
    },
    summary: {
      kn: 'ಮನುಷ್ಯನು ತನ್ನ ಸಂಕುಚಿತ ಭಾವನೆಗಳನ್ನು ಬಿಟ್ಟು ವಿಶ್ವಪ್ರಜ್ಞೆಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಬೇಕೆಂಬುದು ಈ ಕವಿತೆಯ ಸಾರ.',
      en: 'The essence of the poem is that humans should leave behind narrow thinking and develop universal consciousness.',
      hi: 'कविता का सार यह है कि मनुष्यों को संकीर्ण सोच पीछे छोड़ देनी चाहिए और सार्वभौमिक चेतना विकसित करनी चाहिए।'
    },
    favoriteQuote: 'ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ',
    category: 'Philosophy',
    mood: 'Inspirational',
    duration: '3:45',
    isFeatured: true
  },
  {
    id: 'naku-tanti',
    title: {
      kn: 'ನಾಕು ತಂತಿ',
      en: 'Four Strings',
      hi: 'चार तार'
    },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ (D.R. Bendre)',
    introduction: {
      kn: 'ಬೇಂದ್ರೆಯವರಿಗೆ ಜ್ಞಾನಪೀಠ ತಂದುಕೊಟ್ಟ ಕೃತಿಯ ಪ್ರಮುಖ ಕವಿತೆ.',
      en: 'A key poem from the collection that won Bendre the Jnanpith Award.',
      hi: 'उस संग्रह की एक प्रमुख कविता जिसने बेंद्रे को ज्ञानपीठ पुरस्कार दिलाया था।'
    },
    content: `ನಾಕು ತಂತಿ ಒಡೆದವು ಇನ್ನು ಸಾಕು ತಂತಿ ಎಂದವು!
ನಾನಿಲ್ಲದ ಎದೆಯಲ್ಲಿ ತಾನೆ ಬಂದವು ಬಂದವು!

ಇದು ಯಾರ ವೀಣೆ? ಯಾರು ಮೀಟುವವರು?
ಸಪ್ತ ಸ್ವರದ ಸೋಪಾನವ ಹತ್ತುವವರು ಯಾರು?`,
    meaning: {
      'ತಂತಿ': { kn: 'ವೀಣೆಯ ಎಳೆ', en: 'Strings', hi: 'तार' },
      'ಮೀಟು': { kn: 'ನುಡಿಸುವುದು', en: 'To pluck/play', hi: 'बजाना' }
    },
    bhavartha: {
      kn: 'ಬದುಕು ಎಂಬುದು ನಾಲ್ಕು ತಂತಿಗಳ ವೀಣೆಯಂತೆ. ಅಹಂಕಾರ ಇಲ್ಲದ ಎದೆಯಲ್ಲಿ ಮಾತ್ರ ದೈವಿಕ ಸಂಗೀತ ಮೊಳಗಲು ಸಾಧ್ಯ ಎಂದು ಕವಿ ಇಲ್ಲಿ ಹೇಳುತ್ತಾರೆ.',
      en: 'Life is like a lute with four strings. The poet says that divine music can only resonate in a heart free from ego.',
      hi: 'जीवन चार तारों वाली वीणा के समान है। कवि कहता है कि दिव्य संगीत केवल अहंकार से मुक्त हृदय में ही गूँज सकता है।'
    },
    summary: {
      kn: 'ಅಧ್ಯಾತ್ಮ ಮತ್ತು ಜೀವನದ ನಾದದ ವಿಶ್ಲೇಷಣೆ ಈ ಕವಿತೆಯ ಮೂಲ ಆಶಯ.',
      en: 'The core theme is the analysis of spirituality and the rhythm of life.',
      hi: 'मूल विषय आध्यात्मिकता और जीवन की लय का विश्लेषण है।'
    },
    favoriteQuote: 'ನಾನಿಲ್ಲದ ಎದೆಯಲ್ಲಿ ತಾನೆ ಬಂದವು ಬಂದವು',
    category: 'Spiritual',
    mood: 'Reflective',
    duration: '4:20'
  },
  {
    id: 'nityotsava',
    title: {
      kn: 'ನಿತ್ಯೋತ್ಸವ',
      en: 'Everlasting Festival',
      hi: 'नित्योत्सव'
    },
    poetId: 'nisar-ahammed',
    poetName: 'ಕೆ.ಎಸ್. ನಿಸ್ಸಾರ್ ಅಹಮದ್ (Nisar Ahmed)',
    introduction: {
      kn: 'ಕರ್ನಾಟಕದ ಪ್ರಕೃತಿ ಸೌಂದರ್ಯವನ್ನು ವರ್ಣಿಸುವ ಅದ್ಭುತ ಗೀತೆ.',
      en: 'A magnificent song describing the natural beauty of Karnataka.',
      hi: 'कर्नाटक की प्राकृतिक सुंदरता का वर्णन करने वाला एक शानदार गीत।'
    },
    content: `ಜೋಗದ ಸಿರಿ ಬೆಳಕಿನಲ್ಲಿ ತುಂಗೆಯ ತೆನೆ ಬಳುಕಿನಲ್ಲಿ
ಸಹ್ಯಾದ್ರಿಯ ಹಸಿರು ಸಿರಿಯಲಿ ಶ್ರವಣಬೆಳಗೊಳದ ಕೆತ್ತನೆಯಲ್ಲಿ
ನಿತ್ಯೋತ್ಸವ ನಿತ್ಯೋತ್ಸವ ತಾಯಿ ನಿನಗೆ ನಿತ್ಯೋತ್ಸವ!

ಹಸಿರು ಹೊದಿಕೆಯ ಮಲೆನಾಡಿನಲ್ಲಿ ಕಾಫಿ ತೋಟದ ಗಂಧದಲಿ
ಕದಂಬರ ಕಲಾ ವೈಭವದಲಿ ಬಾದಾಮಿಯ ಶಿಲಾ ಶಿಲ್ಪದಲಿ
ನಿತ್ಯೋತ್ಸವ ನಿತ್ಯೋತ್ಸವ ತಾಯಿ ನಿನಗೆ ನಿತ್ಯೋತ್ಸವ!`,
    meaning: {
      'ಸಿರಿ': { kn: 'ಸಂಪತ್ತು', en: 'Wealth/Beauty', hi: 'धन/सुंदरता' },
      'ತೆನೆ': { kn: 'ಧಾನ್ಯದ ಕದಿರು', en: 'Ear of grain', hi: 'अनाज की बाली' }
    },
    bhavartha: {
      kn: 'ಕರ್ನಾಟಕದ ಭೂಪ್ರದೇಶ, ನದಿಗಳು, ಅರಣ್ಯಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಕೊಂಡಾಡುವ ಗೀತೆ ಇದು. ಪ್ರತಿಕ್ಷಣವೂ ಈ ನಾಡಿನಲ್ಲಿ ಹಬ್ಬದಂತಿದೆ ಎಂಬುದು ಕವಿಯ ಭಾವ.',
      en: 'This song celebrates the geography, rivers, forests, and cultural heritage of Karnataka. The poet feels every moment in this land is like a festival.',
      hi: 'यह गीत कर्नाटक के भूगोल, नदियों, जंगलों और सांस्कृतिक विरासत का जश्न मनाता है। कवि को लगता है कि इस धरती पर हर पल एक त्योहार की तरह है।'
    },
    summary: {
      kn: 'ಕನ್ನಡ ನಾಡಿನ ಹಿರಿಮೆ ಮತ್ತು ಪ್ರಕೃತಿಯ ಆರಾಧನೆ.',
      en: 'Adoration of the greatness and nature of the Kannada land.',
      hi: 'कन्नड़ भूमि की महानता और प्रकृति की आराधना।'
    },
    favoriteQuote: 'ನಿತ್ಯೋತ್ಸವ ನಿತ್ಯೋತ್ಸವ ತಾಯಿ ನಿನಗೆ ನಿತ್ಯೋತ್ಸವ',
    category: 'Patriotism',
    mood: 'Energetic',
    duration: '5:10'
  },
  {
    id: 'mookajji',
    title: {
      kn: 'ಮೂಕಜ್ಜಿಯ ಕನಸುಗಳು',
      en: 'Mookajji\'s Dreams',
      hi: 'मूकज्जी के सपने'
    },
    poetId: 'shivarama-karanth',
    poetName: 'ಶಿವರಾಮ ಕಾರಂತ (Shivarama Karanth)',
    introduction: {
      kn: 'ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತ ಕೃತಿಯ ಒಂದು ಭಾಗ.',
      en: 'A segment from the Jnanpith Award-winning novel, capturing philosophical essence.',
      hi: 'ज्ञानपीठ पुरस्कार विजेता उपन्यास का एक हिस्सा, दार्शनिक सार को दर्शाता हुआ।'
    },
    content: `ಕಣ್ಣು ಮುಚ್ಚಿದರೂ ಕಾಣುವ ಕನಸುಗಳು,
ಮೂಕ ಮನದೊಳಗಿನ ಮಾತುಗಳು!
ಜಗದ ಕತೆ ನೂರಾರು, ಅಜ್ಜಿ ಹೇಳುವ ಮುತ್ತುಗಳು!

ಹಳೆಯ ನೆನಪಿನ ಅಂಗಳದಲ್ಲಿ ಹೊಸ ಚಿಗುರಿನ ಆಸೆಗಳು,
ಕಾಲದ ಸುಳಿಯಲ್ಲಿ ಸಿಗದ ಉತ್ತರಗಳು!`,
    meaning: {
      'ಮೂಕ': { kn: 'ಮಾತನಾಡದ', en: 'Silent/Dumb', hi: 'गूँगा/मौन' },
      'ಸುಳಿ': { kn: 'ಸುಳಿವು/ತಿರುಗು', en: 'Whirlpool/Clue', hi: 'भंवर/सुराग' }
    },
    bhavartha: {
      kn: 'ಜೀವನದ ಅನುಭವ, ಇತಿಹಾಸ ಮತ್ತು ಮನುಷ್ಯನ ವಿಕಾಸದ ಬಗ್ಗೆ ಮೂಕಜ್ಜಿ ಎಂಬ ಪಾತ್ರದ ಮೂಲಕ ಕಾರಂತರು ಗಂಭೀರ ಚಿಂತನೆ ನಡೆಸುತ್ತಾರೆ.',
      en: 'Through the character of Mookajji, Karanth reflects deeply on life experience, history, and human evolution.',
      hi: 'मूकज्जी के चरित्र के माध्यम से, कारंत जीवन के अनुभव, इतिहास और मानव विकास पर गहराई से विचार करते हैं।'
    },
    summary: {
      kn: 'ಅನುಭವ ಮತ್ತು ಜ್ಞಾನದ ಸಂಘರ್ಷದ ಚಿತ್ರಣ.',
      en: 'Depiction of the conflict between experience and knowledge.',
      hi: 'अनुभव और ज्ञान के बीच संघर्ष का चित्रण।'
    },
    favoriteQuote: 'ಕಣ್ಣು ಮುಚ್ಚಿದರೂ ಕಾಣುವ ಕನಸುಗಳು',
    category: 'Philosophy',
    mood: 'Calm',
    duration: '3:50'
  },
  {
    id: 'mysore-mallige',
    title: {
      kn: 'ಮೈಸೂರು ಮಲ್ಲಿಗೆ',
      en: 'Mysore Jasmine',
      hi: 'मैसूर मलिगे'
    },
    poetId: 'ks-narasimhaswamy',
    poetName: 'ಕೆ.ಎಸ್. ನರಸಿಂಹಸ್ವಾಮಿ',
    introduction: {
      kn: 'ಕನ್ನಡದ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಪ್ರೇಮ ಗೀತೆಗಳಲ್ಲೊಂದು.',
      en: 'One of the most famous romantic songs in Kannada literature.',
      hi: 'कन्नड़ साहित्य के सबसे प्रसिद्ध रोमांटिक गीतों में से एक।'
    },
    content: `ನಿನ್ನ ಪ್ರೇಮದ ಪರಿಯ ತಿಳಿಯದೇ ಹೋದೆ ನಾನು,
ಮೈಸೂರು ಮಲ್ಲಿಗೆಯ ಘಮವು ನೀನು!
ಹೃದಯದ ಅರಮನೆಯ ಒಡತಿ ನೀನು,
ನನ್ನ ಬಾಳ ಬೆಳಗುವ ಜ್ಯೋತಿ ನೀನು!`,
    meaning: {
      'ಘಮ': { kn: 'ಸುವಾಸನೆ', en: 'Fragrance', hi: 'खुशबू' },
      'ಪರಿ': { kn: 'ರೀತಿ', en: 'Way/Manner', hi: 'तरीका' }
    },
    bhavartha: {
      kn: 'ಈ ಕವಿತೆಯಲ್ಲಿ ಕವಿ ತನ್ನ ಪ್ರೇಯಸಿಯನ್ನು ಮೈಸೂರು ಮಲ್ಲಿಗೆಗೆ ಹೋಲಿಸುತ್ತಾರೆ. ಅವಳ ಪ್ರೇಮ ಜೀವನಕ್ಕೆ ಹೇಗೆ ಬೆಳಕು ನೀಡುತ್ತದೆ ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತಾರೆ.',
      en: 'In this poem, the poet compares his lover to the Mysore jasmine and describes how her love brings light to his life.',
      hi: 'इस कविता में, कवि अपनी प्रेमिका की तुलना मैसूर की चमेली से करता है और बताता है कि उसका प्यार उसके जीवन में कैसे रोशनी लाता है।'
    },
    summary: {
      kn: 'ಮುಗ್ಧ ಪ್ರೇಮ ಮತ್ತು ಸೌಂದರ್ಯದ ವರ್ಣನೆ.',
      en: 'Description of innocent love and beauty.',
      hi: 'मासूम प्यार और खूबसूरती का वर्णन।'
    },
    favoriteQuote: 'ಮೈಸೂರು ಮಲ್ಲಿಗೆಯ ಘಮವು ನೀನು',
    category: 'Love',
    mood: 'Calm',
    duration: '4:00'
  },
  {
    id: 'shivalayava',
    title: {
      kn: 'ಉಳ್ಳವರು ಶಿವಾಲಯ ಮಾಡುವರು',
      en: 'The rich will make temples for Shiva',
      hi: 'अमीर शिव के लिए मंदिर बनाएंगे'
    },
    poetId: 'basavanna',
    poetName: 'ಬಸವಣ್ಣ (Basavanna)',
    introduction: {
      kn: 'ಬಡವನ ಭಕ್ತಿಯೇ ಭಗವಂತನಿಗೆ ಶ್ರೇಷ್ಠವೆಂಬ ಸಂದೇಶ ಸಾರುವ ವಚನ.',
      en: 'A Vachana conveying that a poor man\'s devotion is supreme to the Lord.',
      hi: 'एक वचन जो बताता है कि एक गरीब आदमी की भक्ति भगवान के लिए सर्वोच्च है।'
    },
    content: `ಉಳ್ಳವರು ಶಿವಾಲಯ ಮಾಡುವರು,
ನಾನೇನ ಮಾಡಲಿ ಬಡವನಯ್ಯಾ?
ಎನ್ನ ಕಾಲೇ ಕಂಬವಯ್ಯಾ,
ಎನ್ನ ದೇಹವೇ ದೇಗುಲವಯ್ಯಾ,
ಶಿರವೇ ಹೊನ್ನ ಕಳಸವಯ್ಯಾ!
ಸ್ಥಾವರಕ್ಕಳಿವುಂಟು, ಜಂಗಮಕ್ಕಳಿವಿಲ್ಲ!`,
    meaning: {
      'ಸ್ಥಾವರ': { kn: 'ಜಡವಸ್ತು, ಕಟ್ಟಡ', en: 'Statue/Fixed structure', hi: 'स्थिर/इमारत' },
      'ಜಂಗಮ': { kn: 'ಚಲಿಸುವಂತಹುದು, ಜೀವಂತಿಕೆ', en: 'Moving/Living being', hi: 'जंगम/जीवित' },
      'ಕಳಸ': { kn: 'ಗೋಪುರದ ಮೇಲಿರುವ ಬಟ್ಟಲು', en: 'The pinnacle/cupola', hi: 'कलश' }
    },
    bhavartha: {
      kn: 'ಶ್ರೀಮಂತರು ಗುಡಿ ಗೋಪುರಗಳನ್ನು ಕಟ್ಟಬಹುದು, ಆದರೆ ಬಡವನು ತನ್ನ ದೇಹವನ್ನೇ ದೇವಾಲಯವನ್ನಾಗಿ ಮಾಡಿಕೊಂಡು ದೇವನನ್ನು ಕಾಣಬಲ್ಲನೆಂಬುದು ಇದರ ತಾತ್ಪರ್ಯ.',
      en: 'The rich may build temples, but the poor man makes his own body a temple. Physical structures fall, but the spiritual self endures.',
      hi: 'अमीर मंदिर बना सकते हैं, लेकिन गरीब आदमी अपने शरीर को ही मंदिर बना लेता है। भौतिक संरचनाएं गिर जाती हैं, लेकिन आध्यात्मिक स्वयं बना रहता है।'
    },
    summary: {
      kn: 'ದೇಹವೇ ದೇಗುಲ ಎಂಬ ಅಧ್ಯಾತ್ಮಿಕ ಸತ್ಯ.',
      en: 'The spiritual truth that the body itself is a temple.',
      hi: 'यह आध्यात्मिक सत्य कि शरीर स्वयं एक मंदिर है।'
    },
    favoriteQuote: 'ಎನ್ನ ದೇಹವೇ ದೇಗುಲವಯ್ಯಾ',
    category: 'Spiritual',
    mood: 'Peaceful',
    duration: '2:30'
  },
  {
    id: 'hullaagu',
    title: {
      kn: 'ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ',
      en: 'Be Like the Grass',
      hi: 'घास की तरह बनो'
    },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಪದ್ಯಗಳಲ್ಲಿ ಒಂದು.',
      en: 'One of the most popular verses from Mankuthimmana Kagga.',
      hi: 'मंकुतिम्मन कग्गा के सबसे लोकप्रिय छंदों में से एक।'
    },
    content: `ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ; ಮನೆಗೆ ಮಲ್ಲಿಗೆಯಾಗು |
ಕಲ್ಲಾಗು ಕಷ್ಟಗಳ ಮಳೆಯ ವಿಧಿ ಸುರಿಯೆ ||
ಬೆಲ್ಲ ಸಕ್ಕರೆಯಾಗು ದೀನದುರ್ಬಲರಿಗೆ |
ಎಲ್ಲರೊಳಗೊಂದಾಗು – ಮಂಕುತಿಮ್ಮ ||`,
    meaning: {
      'ಹುಲ್ಲಾಗು': { kn: 'ಹುಲ್ಲಿನಂತೆ ಮೃದುವಾಗಿರು', en: 'Be like grass (humble)', hi: 'घास बनो' },
      'ಮಲ್ಲಿಗೆ': { kn: 'ಸುವಾಸನೆ ಸೂಸು', en: 'Fragrant like jasmine', hi: 'चमेली' }
    },
    bhavartha: {
      kn: 'ಜೀವನದಲ್ಲಿ ವಿನಯವಂತರಾಗಿರಬೇಕು, ಕಷ್ಟ ಬಂದಾಗ ಸ್ಥಿತಪ್ರಜ್ಞರಾಗಿರಬೇಕು ಮತ್ತು ಇತರರಿಗೆ ಸಿಹಿಯಾದ ಒಳಿತನ್ನು ಮಾಡಬೇಕು ಎಂಬುದು ಇದರ ಸಾರ.',
      en: 'Be humble like grass, fragrant like jasmine, strong like a rock during hardships, and sweet like sugar to the weak. Melt into the oneness of all.',
      hi: 'जीवन में विनम्र रहें, कठिनाइयों में अडिग रहें और दूसरों के प्रति दयालु रहें। सभी की एकता में विलीन हो जाएं।'
    },
    summary: {
      kn: 'ವಿನಯ ಮತ್ತು ಸಹನೆ ಜೀವನದ ಗುರಿ.',
      en: 'Humility and endurance as the goals of life.',
      hi: 'विनम्रता और सहनशक्ति जीवन के लक्ष्य के रूप में।'
    },
    favoriteQuote: 'ಎಲ್ಲರೊಳಗೊಂದಾಗು - ಮಂಕುತಿಮ್ಮ',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '3:00'
  },
  {
    id: 'kalabeda',
    title: {
      kn: 'ಕಳಬೇಡ ಕೊಲಬೇಡ',
      en: 'Do Not Steal, Do Not Kill',
      hi: 'चोरी न करें, हत्या न करें'
    },
    poetId: 'basavanna',
    poetName: 'ಬಸವಣ್ಣ (Basavanna)',
    introduction: {
      kn: 'ಸಪ್ತ ಸೂತ್ರಗಳ ಮೂಲಕ ಮಾನವ ಧರ್ಮವನ್ನು ವಿವರಿಸುವ ವಚನ.',
      en: 'A Vachana explaining human dharma through seven principles.',
      hi: 'सात सिद्धांतों के माध्यम से मानव धर्म की व्याख्या करने वाला एक वचन।'
    },
    content: `ಕಳಬೇಡ, ಕೊಲಬೇಡ, ಹುಸಿಯ ನುಡಿಯಲು ಬೇಡ,
ಮುನಿಯ ಬೇಡ, ಅನ್ಯರಿಗೆ ಅಸಹ್ಯ ಪಡಬೇಡ.
ತನ್ನ ಬಣ್ಣಿಸಬೇಡ, ಇದಿರ ಹಳಿಯಲು ಬೇಡ.
ಇದೇ ಅಂತರಂಗಶುದ್ಧಿ! ಇದೇ ಬಹಿರಂಗಶುದ್ಧಿ!`,
    meaning: {
      'ಹುಸಿ': { kn: 'ಸುಳ್ಳು', en: 'Lie/Falsehood', hi: 'झूठ' },
      'ಇದಿರ': { kn: 'ಎದುರಿಗಿರುವವನು', en: 'The person in front/Others', hi: 'सामने वाला' }
    },
    bhavartha: {
      kn: 'ನೈತಿಕ ಜೀವನ ನಡೆಸಲು ಏಳು ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು. ಇದುವೇ ದೇವರನ್ನು ಮೆಚ್ಚಿಸುವ ಮಾರ್ಗ ಎಂದು ಬಸವಣ್ಣನವರು ಹೇಳುತ್ತಾರೆ.',
      en: 'Follow seven rules for a moral life: don’t steal, kill, lie, get angry, or hate. This leads to inner and outer purity.',
      hi: 'नैतिक जीवन के लिए सात नियमों का पालन करें: चोरी, हत्या, झूठ, क्रोध या घृणा न करें। इससे आंतरिक और बाहरी शुद्धता आती है।'
    },
    summary: {
      kn: 'ಶುದ್ಧ ನಡತೆಯೇ ಭಗವಂತನ ಮೆಚ್ಚುಗೆ.',
      en: 'Pure conduct is what pleases the God.',
      hi: 'शुद्ध आचरण ही ईश्वर को प्रसन्न करता है।'
    },
    favoriteQuote: 'ಇದೇ ಅಂತರಂಗಶುದ್ಧಿ! ಇದೇ ಬಹಿರಂಗಶುದ್ಧಿ!',
    category: 'Philosophy',
    mood: 'Inspirational',
    duration: '2:15'
  },
  {
    id: 'nudidare',
    title: {
      kn: 'ನುಡಿದರೆ ಮುತ್ತಿನ ಹಾರದಂತಿರಬೇಕು',
      en: 'Words Like a String of Pearls',
      hi: 'मोतियों की माला जैसे शब्द'
    },
    poetId: 'basavanna',
    poetName: 'ಬಸವಣ್ಣ (Basavanna)',
    introduction: {
      kn: 'ಮಾತು ಹೇಗಿರಬೇಕು ಎಂದು ತಿಳಿಸುವ ಅದ್ಭುತ ವಚನ.',
      en: 'A profound Vachana on how one\'s speech should be.',
      hi: 'एक गंभीर वचन कि किसी की वाणी कैसी होनी चाहिए।'
    },
    content: `ನುಡಿದರೆ ಮುತ್ತಿನ ಹಾರದಂತಿರಬೇಕು,
ನುಡಿದರೆ ಮಾಣಿಕ್ಯದ ದೀಪ್ತಿಯಂತಿರಬೇಕು.
ನುಡಿದರೆ ಸ್ಫಟಿಕದ ಸಲಾಕೆಯಂತಿರಬೇಕು,
ನುಡಿದರೆ ಲಿಂಗ ಮೆಚ್ಚಿ ಅಹುದಹುದೆನ್ನಬೇಕು.`,
    meaning: {
      'ಮಾಣಿಕ್ಯ': { kn: 'ಕೆಂಪು ರತ್ನ', en: 'Ruby', hi: 'माणिक' },
      'ದೀಪ್ತಿ': { kn: 'ಬೆಳಕು', en: 'Light/Luster', hi: 'दीप्ति' }
    },
    bhavartha: {
      kn: 'ನಮ್ಮ ಮಾತು ಮೌಲ್ಯಯುತವಾಗಿರಬೇಕು, ಸ್ಪಷ್ಟವಾಗಿರಬೇಕು ಮತ್ತು ದೇವರಿಗೆ ಮೆಚ್ಚುಗೆಯಾಗುವಂತಿರಬೇಕು.',
      en: 'One\'s words should be precious like pearls, shining like rubies, clear like crystal, and pleasing to the Lord.',
      hi: 'किसी के शब्द मोतियों की तरह कीमती, माणिक की तरह चमकते हुए, स्फटिक की तरह स्पष्ट और ईश्वर को प्रसन्न करने वाले होने चाहिए।'
    },
    summary: {
      kn: 'ಮಾತಿನ ಮಹತ್ವ ಮತ್ತು ಸೌಂದರ್ಯ.',
      en: 'The importance and beauty of speech.',
      hi: 'वाणी का महत्व और सौंदर्य।'
    },
    favoriteQuote: 'ನುಡಿದರೆ ಲಿಂಗ ಮೆಚ್ಚಿ ಅಹುದಹುದೆನ್ನಬೇಕು',
    category: 'Philosophy',
    mood: 'Peaceful',
    duration: '2:45'
  },
  {
    id: 'jatakaabandi',
    title: {
      kn: 'ಬದುಕು ಜಟಕಾಬಂಡಿ',
      en: 'Life is a Horse-Carriage',
      hi: 'जीवन एक घोड़ा-गाड़ी है'
    },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಬದುಕಿನ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಜಟಕಾಬಂಡಿಗೆ ಹೋಲಿಸುವ ಪದ್ಯ.',
      en: 'A verse comparing the uncertainty of life to a horse-carriage.',
      hi: 'जीवन की अनिश्चितता की तुलना घोड़ा-गाड़ी से करने वाला छंद।'
    },
    content: `ಬದುಕು ಜಟಕಾಬಂಡಿ, ವಿಧಿ ಅದರ ಸಾಹೇಬ |
ಕುದುರೆ ನೀನೇನು, ಹವಣುಗಟ್ಟಿದವರು ಪ್ರಯಾಣಿಕರು ||
ಮದುವೆಗೋ ಮಸಣಕ್ಕೋ ಮದನಕ್ಕೋ ಓಡಿಸೆ |
ಪದಕುಸಿಯೆ ನೆಲವಿಹುದು – ಮಂಕುತಿಮ್ಮ ||`,
    meaning: {
      'ಜಟಕಾಬಂಡಿ': { kn: 'ಕುದುರೆ ಗಾಡಿ', en: 'Horse-carriage', hi: 'घोड़ा-गाड़ी' },
      'ವಸಣ': { kn: 'ಮಸಣ/ಶ್ಮಶಾನ', en: 'Graveyard', hi: 'शमशान' }
    },
    bhavartha: {
      kn: 'ಜೀವನವು ಒಂದು ಪ್ರಯಾಣ, ಇಲ್ಲಿ ವಿಧಿ ಅಥವಾ ದೈವವೇ ಚಾಲಕ. ನಾವು ಕೇವಲ ಅದರ ಹಾದಿಯಲ್ಲಿ ಸಾಗುವವರು ಅಷ್ಟೇ ಎಂಬುದು ತಾತ್ಪರ್ಯ.',
      en: 'Life is a carriage driven by fate. You are the horse, carrying passengers assigned by destiny. Whether to a wedding or a grave, run as ordered.',
      hi: 'जीवन भाग्य द्वारा संचालित एक सवारी है। आप घोड़े हैं, नियति द्वारा सौंपे गए यात्रियों को ले जा रहे हैं। चाहे शादी हो या कब्र, आदेशानुसार दौड़ें।'
    },
    summary: {
      kn: 'ವಿಧಿ ಮತ್ತು ಬದುಕು.',
      en: 'Fate and life.',
      hi: 'भाग्य और जीवन।'
    },
    favoriteQuote: 'ಬದುಕು ಜಟಕಾಬಂಡಿ, ವಿಧಿ ಅದರ ಸಾಹೇಬ',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '3:15'
  },
  {
    id: 'hosa-chiguru',
    title: {
      kn: 'ಹೊಸ ಚಿಗುರು ಹಳೆ ಬೇರು',
      en: 'New Shoots and Old Roots',
      hi: 'नई कोपलें और पुरानी जड़ें'
    },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಹಳೆಯ ಮತ್ತು ಹೊಸದರ ಸುಂದರ ಸಂಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸುವ ಪದ್ಯ.',
      en: 'A verse about the beautiful blend of the old and the new.',
      hi: 'पुराने और नए के सुंदर मिश्रण के बारे में एक छंद।'
    },
    content: `ಹೊಸ ಚಿಗುರು ಹಳೆ ಬೇರು ಕೂಡಿರಲು ಮರ ಸೊಬಗು |
ಹೊಸ ಯುಕ್ತಿ ಹಳೆ ತತ್ತ್ವ ಕೂಡಲಿಹ ಧರ್ಮ ||
ಋಷಿವಾಕ್ಯದೊಡನೆ ವಿಜ್ಞಾನ ಕಲೆ ಮೇಳವಿಸೆ |
ಕುಶಲವದು ಲೋಕಕ್ಕೆ – ಮಂಕುತಿಮ್ಮ ||`,
    meaning: {
      'ಯುಕ್ತಿ': { kn: 'ತಂತ್ರ', en: 'Logic/Strategy', hi: 'युक्ति' },
      'ಮೇಳವಿಸು': { kn: 'ಒಂದಾಗು', en: 'To blend/merge', hi: 'मिलना' }
    },
    bhavartha: {
      kn: 'ಮರಕ್ಕೆ ಹೊಸ ಚಿಗುರು ಮತ್ತು ಹಳೆಯ ಬೇರು ಎರಡೂ ಅಗತ್ಯ. ಹಾಗೆಯೇ ಬದುಕಿನಲ್ಲಿ ಹಳೆಯ ತತ್ವಗಳು ಮತ್ತು ಹೊಸ ಆಲೋಚನೆಗಳು ಸಂಯೋಜನೆಗೊಂಡರೆ ಅದು ಜಗತ್ತಿಗೆ ಶುಭ ತರುತ್ತದೆ.',
      en: 'A tree is beautiful when new shoots and old roots coexist. Similarly, when ancient wisdom blends with modern science and art, it brings prosperity to the world.',
      hi: 'एक पेड़ तब सुंदर होता है जब नई कोपलें और पुरानी जड़ें एक साथ मौजूद होती हैं। इसी तरह, जब प्राचीन ज्ञान आधुनिक विज्ञान और कला के साथ मिल जाता है, तो यह दुनिया में समृद्धि लाता है।'
    },
    summary: {
      kn: 'ಪರಂಪರೆ ಮತ್ತು ಪ್ರಗತಿಯ ಸಮತೋಲನ.',
      en: 'Balance between tradition and progress.',
      hi: 'परंपरा और प्रगति के बीच संतुलन।'
    },
    favoriteQuote: 'ಹೊಸ ಚಿಗುರು ಹಳೆ ಬೇರು ಕೂಡಿರಲು ಮರ ಸೊಬಗು',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '2:50'
  },
  {
    id: 'kula-kulavendu',
    title: {
      kn: 'ಕುಲ ಕುಲವೆಂದು ಹೊಡೆದಾಡದಿರಿ',
      en: 'Do Not Fight in the Name of Caste',
      hi: 'जाति के नाम पर मत लड़ो'
    },
    poetId: 'kanaka-dasa',
    poetName: 'ಕನಕದಾಸರು (Kanaka Dasa)',
    introduction: {
      kn: 'ಜಾತಿ ವ್ಯವಸ್ಥೆಯ ಸಂಕುಚಿತತೆಯನ್ನು ಪ್ರಶ್ನಿಸುವ ಕೀರ್ತನೆ.',
      en: 'A kirtana questioning the narrowness of the caste system.',
      hi: 'जाति व्यवस्था की संकीर्णता पर सवाल उठाने वाला कीर्तन।'
    },
    content: `ಕುಲ ಕುಲ ಕುಲವೆಂದು ಹೊಡೆದಾಡದಿರಿ |
ನಿಮ್ಮ ಕುಲದ ನೆಲೆಯನ್ನಾದರು ಬಲ್ಲಿರಾ? ||
ಆತ್ಮ ಯಾವ ಕುಲ? ಜೀವ ಯಾವ ಕುಲ? |
ಪಂಚೇಂದ್ರಿಯಗಳ ಕುಲವ ಪೇಳಿರಣ್ಣಾ... ||`,
    meaning: {
      'ನೆಲೆ': { kn: 'ಮೂಲ', en: 'Origin/Foundation', hi: 'आधार' },
      'ಪೇಳ್': { kn: 'ಹೇಳು', en: 'To tell', hi: 'कहना' }
    },
    bhavartha: {
      kn: 'ಮಾನವನ ಆತ್ಮಕ್ಕೆ ಯಾವುದೇ ಜಾತಿಯಿಲ್ಲ. ನಾವು ಜಾತಿಯ ಹೆಸರಿನಲ್ಲಿ ಕಿತ್ತಾಡುವುದು ವ್ಯರ್ಥ ಎಂಬುದನ್ನು ಕನಕದಾಸರು ಇಲ್ಲಿ ಮಾರ್ಮಿಕವಾಗಿ ಕೇಳುತ್ತಾರೆ.',
      en: 'Do not fight in the name of caste and creed. Do you even know the true origin of your caste? What caste is the soul? What caste is life?',
      hi: 'जाति और पंथ के नाम पर मत लड़ो। क्या आप अपनी जाति का असली मूल भी जानते हैं? आत्मा की कौन सी जाति है? जीवन की कौन सी जाति है?'
    },
    summary: {
      kn: 'ಮಾನವ ಸಮಾನತೆಯ ಸಂದೇಶ.',
      en: 'Message of human equality.',
      hi: 'मानवीय समानता का संदेश।'
    },
    favoriteQuote: 'ಆತ್ಮ ಯಾವ ಕುಲ? ಜೀವ ಯಾವ ಕುಲ?',
    category: 'Philosophy',
    mood: 'Inspirational',
    duration: '3:30'
  },
  {
    id: 'kerege-chelli',
    title: {
      kn: 'ಕೆರೆಯ ನೀರನು ಕೆರೆಗೆ ಚೆಲ್ಲಿ',
      en: 'Water Back to the Lake',
      hi: 'झील का पानी झील को'
    },
    poetId: 'purandara-dasa',
    poetName: 'ಪುರಂದರದಾಸರು (Purandara Dasa)',
    introduction: {
      kn: 'ತ್ಯಾಗ ಮತ್ತು ಸಮರ್ಪಣಾ ಭಾವದ ಮಹತ್ವ ಸಾರುವ ಕೀರ್ತನೆ.',
      en: 'A kirtana showing the importance of sacrifice and dedication.',
      hi: 'त्याग और समर्पण के महत्व को दर्शाने वाला कीर्तन।'
    },
    content: `ಕೆರೆಯ ನೀರನು ಕೆರೆಗೆ ಚೆಲ್ಲಿ |
ವರವ ಪಡೆದವರೆಂದು ತಿಳಿಯಿರಿ ||
ಹರಿಯ ಕರುಣವ ಪಡೆದ ಭಾಗ್ಯವ |
ಹರಿಯ ಸದ್ಭಕ್ತರೆಂದು ತಿಳಿಯಿರಿ ||`,
    meaning: {
      'ವರ': { kn: 'ಆಶೀರ್ವಾದ', en: 'Blessing/Boon', hi: 'वरदान' },
      'ಭಾಗ್ಯ': { kn: 'ಅದೃಷ್ಟ', en: 'Luck/Fortune', hi: 'भाग्य' }
    },
    bhavartha: {
      kn: 'ದೇವರಿಂದ ನಮಗೆ ಸಿಕ್ಕಿದ್ದನ್ನು ದೇವನಿಗೇ ಅರ್ಪಿಸುವುದರಲ್ಲಿ ಆನಂದವಿದೆ. ಇದುವೇ ಭಕ್ತಿಯ ಶ್ರೇಷ್ಠ ಮಾರ್ಗ ಎಂಬುದನ್ನು ಇದು ತಿಳಿಸುತ್ತದೆ.',
      en: 'Offer the lake\'s water back to the lake and receive blessings. True fortune is gaining the Lord\'s grace through such devotion.',
      hi: 'झील का पानी वापस झील को ही अर्पित करें और आशीर्वाद प्राप्त करें। सच्चा सौभाग्य ऐसी भक्ति के माध्यम से ईश्वर की कृपा प्राप्त करना है।'
    },
    summary: {
      kn: 'ಸಮರ್ಪಣಾ ಭಾವದ ಮಹತ್ವ.',
      en: 'Significance of the spirit of dedication.',
      hi: 'समर्पण की भावना का महत्व।'
    },
    favoriteQuote: 'ಕೆರೆಯ ನೀರನು ಕೆರೆಗೆ ಚೆಲ್ಲಿ',
    category: 'Spiritual',
    mood: 'Peaceful',
    duration: '4:10'
  },
  {
    id: 'maneya-maadi',
    title: {
      kn: 'ಬೆಟ್ಟದ ಮೇಲೊಂದು ಮನೆಯ ಮಾಡಿ',
      en: 'Build a House on a Mountain',
      hi: 'पहाड़ पर घर बनाना'
    },
    poetId: 'akka-mahadevi',
    poetName: 'ಅಕ್ಕಮಹಾದೇವಿ (Akka Mahadevi)',
    introduction: {
      kn: 'ಸಂಸಾರ ಮತ್ತು ಲೌಕಿಕ ಕಷ್ಟಗಳ ನಡುವೆ ಸ್ಥಿರವಾಗಿರುವ ಬಗ್ಗೆ ತಿಳಿಸುವ ವಚನ.',
      en: 'A Vachana about remaining steady amidst worldly troubles.',
      hi: 'सांसारिक कष्टों के बीच स्थिर रहने के बारे में एक वचन।'
    },
    content: `ಬೆಟ್ಟದ ಮೇಲೊಂದು ಮನೆಯ ಮಾಡಿ |
ಮೃಗಗಳಿಗಂಜೆಡೆ ಎಂತಯ್ಯಾ? ||
ಸಮುದ್ರದ ತಡಿಯಲೊಂದು ಮನೆಯ ಮಾಡಿ |
ಹೊರೆ ತೆರೆಗಳಿಗಂಜೆಡೆ ಎಂತಯ್ಯಾ? ||`,
    meaning: {
      'ಮೃಗ': { kn: 'ಕಾಡು ಪ್ರಾಣಿ', en: 'Wild beast', hi: 'जंगली जानवर' },
      'ತಡಿಯಲಿ': { kn: 'ದಡದಲ್ಲಿ', en: 'At the shore', hi: 'किनारे पर' }
    },
    bhavartha: {
      kn: 'ಬದುಕಿನಲ್ಲಿ ಎಲ್ಲಿದ್ದೇವೆಯೋ ಅಲ್ಲಿಯ ಕಷ್ಟಗಳನ್ನು ಎದುರಿಸಿಯೇ ಸಾಗಬೇಕು. ಸಂಸಾರದಲ್ಲಿದ್ದುಕೊಂಡು ಲೋಕಕ್ಕೆ ಹೆದರುವುದು ಸಲ್ಲದು ಎಂಬುದು ಅಕ್ಕಮನ ಭಾವ.',
      en: 'If you build a house on a mountain, you cannot fear the beasts. If you stay in the world, you must face its challenges with courage.',
      hi: 'यदि आप पहाड़ पर घर बनाते हैं, तो आप जानवरों से नहीं डर सकते। यदि आप दुनिया में रहते हैं, तो आपको इसकी चुनौतियों का साहस के साथ सामना करना होगा।'
    },
    summary: {
      kn: 'ಧೈರ್ಯ ಮತ್ತು ಲೋಕಾನುಭವ.',
      en: 'Courage and worldly experience.',
      hi: 'साहस और सांसारिक अनुभव।'
    },
    favoriteQuote: 'ಮೃಗಗಳಿಗಂಜೆಡೆ ಎಂತಯ್ಯಾ?',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '2:40'
  },
  {
    id: 'dindimava',
    title: {
      kn: 'ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ',
      en: 'Sound the Drum of Kannada',
      hi: 'कन्नड़ का ढोल बजाओ'
    },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ಕನ್ನಡ ನಾಡು ನುಡಿಯ ಅಭಿಮಾನವನ್ನು ಬಡಿದೆಬ್ಬಿಸುವ ಗೀತೆ.',
      en: 'A song that awakens the pride of the Kannada land and language.',
      hi: 'कन्नड़ भूमि और भाषा के गौरव को जगाने वाला गीत।'
    },
    content: `ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ |
ಓ ಕರ್ನಾಟಕ ಹೃದಯ ಶಿವ ||

ಸತ್ತಂತಿಹರನು ಬಡಿದೆಬ್ಬಿಸು |
ಕಚ್ಚಾಡುವವರನು ಕೂಡಿಸು ||
ಮತ್ತೆ ಪ್ರೇಮದ ಮಂತ್ರವ ಜಪಿಸು |
ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ ||`,
    meaning: {
      'ಡಿಂಡಿಮ': { kn: 'ಒಂದು ಬಗೆಯ ವಾದ್ಯ', en: 'A type of drum', hi: 'एक प्रकार का ढोल' },
      'ಬಡಿದೆಬ್ಬಿಸು': { kn: 'ಎಚ್ಚರಿಸು', en: 'To wake up/awaken', hi: 'जगाना' }
    },
    bhavartha: {
      kn: 'ಕನ್ನಡಿಗರು ತಮ್ಮ ಆಲಸ್ಯವನ್ನು ಬಿಟ್ಟು ನಾಡಿನ ಉನ್ನತಿಗಾಗಿ ಒಂದಾಗಬೇಕು. ಪ್ರೇಮದ ಮಂತ್ರವನ್ನು ಸಾರುತ್ತಾ ಜಗತ್ತಿಗೆ ಮಾದರಿಯಾಗಬೇಕು ಎಂಬುದು ಕವಿಯ ಆಶಯ.',
      en: 'Kuvempu calls upon Kannadigas to wake up from their slumber and unite for the progress of the land. It encourages spreading the message of love and unity.',
      hi: 'कुवेम्पू कन्नडिगाओं से अपने आलस्य को छोड़ने और भूमि की प्रगति के लिए एकजुट होने का आह्वान करते हैं। यह प्रेम और एकता के संदेश को फैलाने के लिए प्रोत्साहित करता है।'
    },
    summary: {
      kn: 'ಕನ್ನಡ ಜಾಗೃತಿಯ ಗೀತೆ.',
      en: 'Song of Kannada awakening.',
      hi: 'कन्नड़ जागृति का गीत।'
    },
    favoriteQuote: 'ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ',
    category: 'Patriotism',
    mood: 'Energetic',
    duration: '3:20'
  },
  {
    id: 'hakki-haruthide',
    title: {
      kn: 'ಹಕ್ಕಿ ಹಾರುತಿದೆ ನೋಡಿದಿರಾ?',
      en: 'Have You Seen the Bird Flying?',
      hi: 'क्या आपने पक्षी को उड़ते देखा है?'
    },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ (D.R. Bendre)',
    introduction: {
      kn: 'ಕಾಲದ ವೇಗವನ್ನು ಹಕ್ಕಿಯ ಹಾರಾಟಕ್ಕೆ ಹೋಲಿಸುವ ಅದ್ಭುತ ಕಲ್ಪನೆ.',
      en: 'A wonderful comparison of the speed of time to the flight of a bird.',
      hi: 'समय की गति की तुलना पक्षी की उड़ान से करने वाली एक अद्भुत कल्पना।'
    },
    content: `ಹಕ್ಕಿ ಹಾರುತಿದೆ ನೋಡಿದಿರಾ?
ಇರುಳು ಹಗಲುಗಳ ಎರಡೂ ರೆಕ್ಕೆ ಬಡಿದು
ಬೆಟ್ಟ ಗುಡ್ಡಗಳ ಮೇಲೆ ಮೇಲೆ ಹಾರಿ
ಕಾಲದ ಗತಿಯನ್ನು ಹಕ್ಕಿ ತೋರುತಿದೆ!`,
    meaning: {
      'ರೆಕ್ಕೆ': { kn: 'ಪಕ್ಷಿಯ ಪಕ್ಕೆಬುಲು', en: 'Wings', hi: 'पंख' },
      'ಗತಿ': { kn: 'ವೇಗ/ಚಲನೆ', en: 'Speed/Movement', hi: 'गति' }
    },
    bhavartha: {
      kn: 'ಕಾಲವು ಹಕ್ಕಿಯಂತೆ ವೇಗವಾಗಿ ಹಾರುತ್ತಿದೆ. ಅದು ಹಗಲು ಮತ್ತು ಇರುಳು ಎಂಬ ಎರಡು ರೆಕ್ಕೆಗಳನ್ನು ಬಡಿಯುತ್ತಾ ಇತಿಹಾಸದ ಮೇಲೆ ಹಾರುತ್ತಿದೆ ಎಂಬುದು ಬೇಂದ್ರೆಯವರ ಭಾವ.',
      en: 'Time is flying like a bird, flapping the wings of day and night. It moves swiftly over mountains and valleys, indicating the relentless flow of time.',
      hi: 'समय एक पक्षी की तरह उड़ रहा है, दिन और रात के पंख फड़फड़ा रहा है। यह पहाड़ों और घाटियों के ऊपर तेजी से चलता है, जो समय के निरंतर प्रवाह का संकेत देता है।'
    },
    summary: {
      kn: 'ಕಾಲದ ಮಹಿಮೆಯ ವರ್ಣನೆ.',
      en: 'Description of the glory of time.',
      hi: 'समय की महिमा का वर्णन।'
    },
    favoriteQuote: 'ಹಕ್ಕಿ ಹಾರುತಿದೆ ನೋಡಿದಿರಾ?',
    category: 'Nature',
    mood: 'Inspirational',
    duration: '4:30'
  },
  {
    id: 'kaanada-kadalige',
    title: {
      kn: 'ಕಾಣದ ಕಡಲಿಗೆ',
      en: 'To the Unseen Ocean',
      hi: 'अनदेखे सागर के लिए'
    },
    poetId: 'gs-shivarudrappa',
    poetName: 'ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ (G.S. Shivarudrappa)',
    introduction: {
      kn: 'ಜೀವನವೆಂಬ ನದಿಯು ಪರಮಾತ್ಮನೆಂಬ ಕಡಲನ್ನು ಸೇರುವ ಹಂಬಲದ ಗೀತೆ.',
      en: 'A song about the soul\'s longing to merge with the divine ocean.',
      hi: 'परमात्मा रूपी सागर में विलीन होने की आत्मा की तड़प का एक गीत।'
    },
    content: `ಕಾಣದ ಕಡಲಿಗೆ ಹಂಬಲಿಸಿದೆ ಮನ |
ಕಾಣಬಲ್ಲೆನೇ ಒಂದು ದಿನ? ||
ಎತ್ತ ನೋಡಿದರತ್ತ ಜಲರಾಶಿ ನಿಂತಿದೆ |
ದಡವ ಕಾಣದೆ ಮನವು ಬೆಚ್ಚಿದೆ ||`,
    meaning: {
      'ಹಂಬಲ': { kn: 'ಬಯಕೆ', en: 'Longing/Desire', hi: 'लालसा' },
      'ಜಲರಾಶಿ': { kn: 'ನೀರಿನ ಸಮೂಹ', en: 'Mass of water', hi: 'जलराशि' }
    },
    bhavartha: {
      kn: 'ನಮ್ಮ ಜೀವನವು ಕಾಣದ ಗುರಿಯತ್ತ ಸಾಗುತ್ತಿದೆ. ಆ ಅಂತಿಮ ಸತ್ಯವನ್ನು ಅಥವಾ ಕಡಲನ್ನು ನಾವು ಶೀಘ್ರದಲ್ಲೇ ತಲುಪುತ್ತೇವೆ ಎಂಬ ಆಶಯ ಇಲ್ಲಿದೆ.',
      en: 'Our life is a journey towards an unseen destination. There is a hope that we will soon reach that ultimate truth or ocean.',
      hi: 'हमारा जीवन एक अनदेखी मंजिल की ओर एक यात्रा है। ऐसी आशा है कि हम जल्द ही उस परम सत्य या सागर तक पहुँच जाएँगे।'
    },
    summary: {
      kn: 'ಜೀವನದ ಅನ್ವೇಷಣೆ ಮತ್ತು ಹಂಬಲ.',
      en: 'The quest and longing of life.',
      hi: 'जीवन की खोज और लालसा।'
    },
    favoriteQuote: 'ಕಾಣದ ಕಡಲಿಗೆ ಹಂಬಲಿಸಿದೆ ಮನ',
    category: 'Nature',
    mood: 'Reflective',
    duration: '3:50'
  },
  {
    id: 'negila-yogi',
    title: {
      kn: 'ನೇಗಿಲ ಯೋಗಿ',
      en: 'The Yogi of the Plough',
      hi: 'हल का योगी'
    },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ರೈತನನ್ನು ಲೋಕಕ್ಕೆ ಅನ್ನ ನೀಡುವ ಯೋಗಿಗೆ ಹೋಲಿಸುವ ಗೀತೆ.',
      en: 'A song comparing the farmer to a yogi who feeds the world.',
      hi: 'किसान की तुलना एक योगी से करने वाला गीत जो दुनिया को खिलाता है।'
    },
    content: `ನೇಗಿಲ ಹಿಡಿದ ಯೋಗಿ ಹೂಡಿದನು ಜೀವನವ |
ಲೋಕದ ಹಸಿವನು ನೀಗುವ ದೇವ ಬರುವನು ||
ಮಣ್ಣಲಿ ಬೆವವ ಸುರಿಸಿ ಹೊನ್ನನು ಬೆಳೆಯುವ |
ಅನ್ನದಾತನಿಗೆ ನಾಮದೇವನು ಸಿಗುವನು ||`,
    meaning: {
      'ನೇಗಿಲ': { kn: 'ಉಳುಮೆ ಮಾಡುವ ಸಾಧನ', en: 'Plough', hi: 'हल' },
      'ಅನ್ನದಾತ': { kn: 'ಆಹಾರ ನೀಡುವವನು', en: 'Provider of food', hi: 'अन्नदाता' }
    },
    bhavartha: {
      kn: 'ರೈತರು ಕಷ್ಟಪಟ್ಟು ದುಡಿಯುವುದರಿಂದಲೇ ಜಗತ್ತು ಹಸಿವಿನಿಂದ ಮುಕ್ತವಾಗಿದೆ. ರೈತನೇ ನಿಜವಾದ ಯೋಗಿ ಎಂಬುದು ಕವಿಯ ಸಂದೇಶ.',
      en: 'The world is free from hunger because of the farmer\'s hard work. The poet suggests that the farmer is the true yogi.',
      hi: 'किसान की कड़ी मेहनत के कारण दुनिया भूख से मुक्त है। कवि का सुझाव है कि किसान ही असली योगी है।'
    },
    summary: {
      kn: 'ರೈತನ ಮಹತ್ವ ಮತ್ತು ಶ್ರಮದ ಗೌರವ.',
      en: 'The importance of the farmer and respect for labor.',
      hi: 'किसान का महत्व और श्रम का सम्मान।'
    },
    favoriteQuote: 'ನೇಗಿಲ ಹಿಡಿದ ಯೋಗಿ ಹೂಡಿದನು ಜೀವನವ',
    category: 'Patriotism',
    mood: 'Inspirational',
    duration: '4:10'
  },
  {
    id: 'deepavu-ninnade',
    title: {
      kn: 'ದೀಪವು ನಿನ್ನದೆ ಗಾಳಿಯೂ ನಿನ್ನದೆ',
      en: 'The Lamp is Yours, The Wind is Yours',
      hi: 'दीपक तुम्हारा है, हवा भी तुम्हारी है'
    },
    poetId: 'ks-narasimhaswamy',
    poetName: 'ಕೆ.ಎಸ್. ನರಸಿಂಹಸ್ವಾಮಿ',
    introduction: {
      kn: 'ಜೀವನದ ಎಲ್ಲವೂ ದೈವದ ಇಚ್ಛೆ ಎಂದು ಸಾರುವ ಭಾವಗೀತೆ.',
      en: 'A lyrical poem stating that everything in life is divine will.',
      hi: 'एक गीतात्मक कविता जिसमें कहा गया है कि जीवन में सब कुछ दैवीय इच्छा है।'
    },
    content: `ದೀಪವು ನಿನ್ನದೆ ಗಾಳಿಯೂ ನಿನ್ನದೆ 
ಆರಿಸಬೇಡವೋ ದೇವ |
ಹೃದಯದ ಹಾದಿಯೊಳು ನೀನೇ ಇರುವೆ
ಮರೆಯಬೇಡವೋ ದೇವ ||`,
    meaning: {
      'ಆರಿಸು': { kn: 'ನಂದಿಸು', en: 'To extinguish', hi: 'बुझाना' },
      'ಹಾದಿ': { kn: 'ದಾರಿ', en: 'Path', hi: 'रास्ता' }
    },
    bhavartha: {
      kn: 'ನಮ್ಮ ಸುಖ-ದುಃಖಗಳು ದೇವರಿಂದಲೇ ಬರುತ್ತವೆ. ಆತನೇ ನಮ್ಮ ಜೀವನದ ದಾರಿದೀಪ ಎಂಬುದು ಕವಿಯ ನಂಬಿಕೆ.',
      en: 'Our joys and sorrows both come from God. He is the guiding light of our lives.',
      hi: 'हमारे सुख और दुख दोनों ईश्वर से आते हैं। वह हमारे जीवन का मार्गदर्शक प्रकाश है।'
    },
    summary: {
      kn: 'ದೈವ ಸಮರ್ಪಣಾ ಭಾವ.',
      en: 'Spirit of divine surrender.',
      hi: 'दिव्य समर्पण की भावना।'
    },
    favoriteQuote: 'ದೀಪವು ನಿನ್ನದೆ ಗಾಳಿಯೂ ನಿನ್ನದೆ',
    category: 'Love',
    mood: 'Peaceful',
    duration: '3:00'
  },
  {
    id: 'kurigalu',
    title: {
      kn: 'ಕುರಿಗಳು ಸಾರ್ ಕುರಿಗಳು',
      en: 'Sheep, Sir, Sheep',
      hi: 'भेड़ें, सर, भेड़ें'
    },
    poetId: 'nisar-ahammed',
    poetName: 'ಕೆ.ಎಸ್. ನಿಸ್ಸಾರ್ ಅಹಮದ್ (Nisar Ahmed)',
    introduction: {
      kn: 'ಜನರ ಕುರುಡು ನಂಬಿಕೆಗಳು ಮತ್ತು ವ್ಯವಸ್ಥೆಯನ್ನು ವಿಡಂಬಿಸುವ ಪದ್ಯ.',
      en: 'A verse satirizing the blind faith of people and the system.',
      hi: 'लोगों के अंधविश्वास और व्यवस्था पर कटाक्ष करने वाला छंद।'
    },
    content: `ಕುರಿಗಳು ಸಾರ್ ಕುರಿಗಳು 
ಒಂದರ ಹಿಂದೆ ಒಂದು ಹೋಗುವ ಕುರಿಗಳು!
ನಡೆ ಅಂದ ಕಡೆ ನಡೆಯುವ ಕುರಿಗಳು
ಕುರಿಗಳ ಈ ಬದುಕು ನಮಗೆ ಪಾಠಗಳು!`,
    meaning: {
      'ವಿಡಂಬನೆ': { kn: 'ಹಾಸ್ಯದ ಮೂಲಕ ಟೀಕಿಸುವುದು', en: 'Satire', hi: 'व्यंग्य' },
      'ಕುರುಡು': { kn: 'ಕಣ್ಣಿಲ್ಲದ/ವಿಚಾರ ಮಾಡದ', en: 'Blind', hi: 'अंधा' }
    },
    bhavartha: {
      kn: 'ಯೋಚಿಸದೆ ಗುಂಪಿನ ಹಿಂದೆ ಹೋಗುವ ಜನರ ಪ್ರವೃತ್ತಿಯನ್ನು ಕವಿ ಇಲ್ಲಿ ಕುರಿಗಳಿಗೆ ಹೋಲಿಸಿ ವಿಡಂಬಿಸಿದ್ದಾರೆ.',
      en: 'The poet satirizes the human tendency to follow the crowd without thinking, comparing them to sheep.',
      hi: 'कवि ने बिना सोचे-समझे भीड़ का अनुसरण करने की मानवीय प्रवृत्ति पर कटाक्ष किया है, और उनकी तुलना भेड़ों से की है।'
    },
    summary: {
      kn: 'ಸಾಮಾಜಿಕ ಜಾಗೃತಿ ಮತ್ತು ವಿಡಂಬನೆ.',
      en: 'Social awareness and satire.',
      hi: 'सामाजिक जागरूकता और व्यंग्य।'
    },
    favoriteQuote: 'ಕುರಿಗಳು ಸಾರ್ ಕುರಿಗಳು',
    category: 'Motivation',
    mood: 'Energetic',
    duration: '3:40'
  },
  {
    id: 'adisidalu-yashode',
    title: {
      kn: 'ಆಡಿಸಿದಳು ಯಶೋದೆ',
      en: 'Yashoda Made Him Play',
      hi: 'यशोदा ने उसे खिलाया'
    },
    poetId: 'purandara-dasa',
    poetName: 'ಪುರಂದರದಾಸರು (Purandara Dasa)',
    introduction: {
      kn: 'ಬಾಲಕೃಷ್ಣನ ತುಂಟತನ ಮತ್ತು ಯಶೋದೆಯ ವಾತ್ಸಲ್ಯವನ್ನು ಬಣ್ಣಿಸುವ ಕೀರ್ತನೆ.',
      en: 'A kirtana describing Balakrishna\'s mischief and Yashoda\'s maternal love.',
      hi: 'बालकृष्ण की शरारतों और यशोदा के ममतामयी प्रेम का वर्णन करने वाला कीर्तन।'
    },
    content: `ಆಡಿಸಿದಳು ಯಶೋದೆ ಜಗದೋದ್ಧಾರನ |
ಮಾಡಿದಳು ಮಗನೆಂದು ತಾ ಮುದ್ದಿನಾ ||
ಪದಕ ಹಚ್ಚೆದದೊಳು ನಾಟ್ಯವನಾಡುವ |
ಮದನ ಮೋಹನನ ಹರಿದಾಸ ಪ್ರಿಯನಾ ||`,
    meaning: {
      'ಜಗದೋದ್ಧಾರ': { kn: 'ಜಗತ್ತನ್ನು ರಕ್ಷಿಸುವವನು', en: 'Saviour of the world', hi: 'जगत का उद्धारक' },
      'ವಾತ್ಸಲ್ಯ': { kn: 'ತಾಯಿಯ ಪ್ರೀತಿ', en: 'Maternal love', hi: 'वात्सल्य' }
    },
    bhavartha: {
      kn: 'ಇಡೀ ವಿಶ್ವವನ್ನೇ ಆಳುವ ಭಗವಂತನನ್ನು ಯಶೋದೆ ತನ್ನ ಮಗನೆಂದು ಭಾವಿಸಿ ಆಡಿಸುವುದೇ ಒಂದು ಸೌಭಾಗ್ಯ ಎಂದು ಕವಿ ಇಲ್ಲಿ ಹಾಡಿದ್ದಾರೆ.',
      en: 'The poet sings about the fortune of Yashoda, who plays with the Lord of the universe as if he were her own son.',
      hi: 'कवि यशोदा के सौभाग्य के बारे में गाता है, जो ब्रह्मांड के भगवान के साथ ऐसे खेलती है जैसे कि वह उसका अपना पुत्र हो।'
    },
    summary: {
      kn: 'ದೈವಿಕ ಪ್ರೇಮ ಮತ್ತು ವಾತ್ಸಲ್ಯ.',
      en: 'Divine love and maternal affection.',
      hi: 'दिव्य प्रेम और वात्सल्य।'
    },
    favoriteQuote: 'ಆಡಿಸಿದಳು ಯಶೋದೆ ಜಗದೋದ್ಧಾರನ',
    category: 'Culture',
    mood: 'Peaceful',
    duration: '4:50'
  },
  {
    id: 'belagu',
    title: {
      kn: 'ಬೆಳಗು',
      en: 'The Dawn',
      hi: 'भोर'
    },
    poetId: 'hsv',
    poetName: 'ಎಚ್.ಎಸ್. ವೆಂಕಟೇಶಮೂರ್ತಿ (H.S.V.)',
    introduction: {
      kn: 'ನಿಸರ್ಗದ ಬೆಳಗಿನ ಸೌಂದರ್ಯವನ್ನು ಕಣ್ಣಿಗೆ ಕಟ್ಟುವಂತೆ ವರ್ಣಿಸುವ ಗೀತೆ.',
      en: 'A song vividly describing the beauty of nature at dawn.',
      hi: 'भोर के समय प्रकृति की सुंदरता का सजीव वर्णन करने वाला गीत।'
    },
    content: `ಬೆಳಗು ಬಂತು ನೋಡಿ ಹಕ್ಕಿ ಹಾಡಿತು |
ಇರುಳಿನ ಮುಸುಕು ಸರಿಯಿತು ಬಾನು ಬೆಳಗಿತು ||
ಗಿಡಗಳ ಮೇಲೆ ಇಬ್ಬನಿ ಮುತ್ತಿನ ಹನಿಯಂತೆ |
ನಗುತಿದೆ ಹೂವು ಲೋಕವ ನೋಡುತ ಇಂದು ||`,
    meaning: {
      'ಇಬ್ಬನಿ': { kn: 'ಹಿಮದ ಹನಿ', en: 'Dew drops', hi: 'ओस की बूंदें' },
      'ಬಾನು': { kn: 'ಆಕಾಶ', en: 'Sky', hi: 'आकाश' }
    },
    bhavartha: {
      kn: 'ಮುಂಜಾನೆಯ ಹೊತ್ತಿನಲ್ಲಿ ಹಕ್ಕಿಗಳ ಹಾಡು, ಹೂವುಗಳ ನಗು ಜಗತ್ತಿಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ನೀಡುತ್ತದೆ ಎಂಬುದು ಕವಿಯ ಭಾವ.',
      en: 'The singing of birds and the smiling of flowers at dawn bring new energy to the world.',
      hi: 'भोर के समय पक्षियों का चहचहाना और फूलों का मुस्कुराना दुनिया में नई ऊर्जा भर देता है।'
    },
    summary: {
      kn: 'ನಿಸರ್ಗದ ರಮಣೀಯತೆ.',
      en: 'The scenic beauty of nature.',
      hi: 'प्रकृति की रमणीयता।'
    },
    favoriteQuote: 'ಇರುಳಿನ ಮುಸುಕು ಸರಿಯಿತು ಬಾನು ಬೆಳಗಿತು',
    category: 'Nature',
    mood: 'Peaceful',
    duration: '3:10'
  },
  {
    id: 'helatena-kela',
    title: {
      kn: 'ಹೇಳತೇನ ಕೇಳ',
      en: 'Listen, I Shall Tell',
      hi: 'सुनो, मैं बताता हूँ'
    },
    poetId: 'kambar',
    poetName: 'ಚಂದ್ರಶೇಖರ ಕಂಬಾರ (Chandrashekhara Kambara)',
    introduction: {
      kn: 'ಜಾನಪದ ಸೊಗಡಿನ ಮೂಲಕ ಬದುಕಿನ ಸತ್ಯಗಳನ್ನು ವಿವರಿಸುವ ಕವಿತೆ.',
      en: 'A poem explaining the truths of life through folk elements.',
      hi: 'लोक तत्वों के माध्यम से जीवन के सत्यों की व्याख्या करने वाली एक कविता।'
    },
    content: `ಹೇಳತೇನ ಕೇಳ ಹಳೆಯ ಕತೆಯನು 
ನಮ್ಮೂರ ಹಳ್ಳದ ದಂಡಿಯಲಿ ಕುಳಿತು |
ಮಣ್ಣಿನ ವಾಸನೆ ಮೈಯ ತುಂಬಿದೆ 
ಜನಪದ ಜೀವ ಇಲ್ಲಿ ಅಡಗಿದೆ ||`,
    meaning: {
      'ದಂಡಿಯಲಿ': { kn: 'ದಡದಲ್ಲಿ', en: 'On the shore/bank', hi: 'किनारे पर' },
      'ಜೀವ': { kn: 'ಜೀವಂತಿಕೆ', en: 'Life/Soul', hi: 'जीवन' }
    },
    bhavartha: {
      kn: 'ನಮ್ಮ ಗ್ರಾಮೀಣ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಮಣ್ಣಿನ ಸಂಬಂಧ ಬಹಳ ದೊಡ್ಡದು. ಅದನ್ನು ಗೌರವಿಸಬೇಕು ಎಂಬುದು ಕವಿಯ ಆಶಯ.',
      en: 'The relationship between our rural culture and the land is profound. The poet wishes for us to respect it.',
      hi: 'हमारी ग्रामीण संस्कृति और भूमि के बीच का संबंध गहरा है। कवि चाहता है कि हम इसका सम्मान करें।'
    },
    summary: {
      kn: 'ಜಾನಪದ ಸಂಸ್ಕೃತಿಯ ಆರಾಧನೆ.',
      en: 'Adoration of folk culture.',
      hi: 'लोक संस्कृति की आराधना।'
    },
    favoriteQuote: 'ಮಣ್ಣಿನ ವಾಸನೆ ಮೈಯ ತುಂಬಿದೆ',
    category: 'Culture',
    mood: 'Reflective',
    duration: '4:20'
  },
  {
    id: 'avva',
    title: {
      kn: 'ಅವ್ವ',
      en: 'Mother',
      hi: 'माँ'
    },
    poetId: 'p-lankesh',
    poetName: 'ಪಿ. ಲಂಕೇಶ್ (P. Lankesh)',
    introduction: {
      kn: 'ತಾಯಿಯ ಶ್ರಮ ಮತ್ತು ಅಕ್ಕರೆಯನ್ನು ನೆನೆಯುವ ಭಾವನಾತ್ಮಕ ಕವಿತೆ.',
      en: 'An emotional poem remembering a mother\'s hard work and affection.',
      hi: 'एक माँ की कड़ी मेहनत और स्नेह को याद करने वाली एक भावनात्मक कविता।'
    },
    content: `ಅವ್ವ ಪಕ್ಕದ ಮನೆಯ ರತ್ನಮ್ಮನ ಹಾಗೆ 
ಓದು ಬರಹ ತಿಳಿಯದ ಹೆಣ್ಣುಮಗಳು |
ಅವಳು ಸುರಿಸಿದ ಬೆವರು ಮಣ್ಣು ಕೂಡಿದಾಗ 
ನಮ್ಮ ಹಸಿವಿಗೆ ತುತ್ತು ಸಿಕ್ಕಿದಾಗ ||`,
    meaning: {
      'ಅಕ್ಕರೆ': { kn: 'ಪ್ರೀತಿ', en: 'Affection', hi: 'स्नेह' },
      'ತುತ್ತು': { kn: 'ಅನ್ನದ ಉಂಡೆ', en: 'Morsel', hi: 'निवाला' }
    },
    bhavartha: {
      kn: 'ತಾಯಿ ಅಕ್ಷರ ಕಲಿಯದಿದ್ದರೂ ಜೀವನದ ಮೌಲ್ಯಗಳನ್ನು ತನ್ನ ತ್ಯಾಗದ ಮೂಲಕ ಕಲಿಸುತ್ತಾಳೆ ಎಂಬುದು ಕವಿಯ ಒಳನೋಟ.',
      en: 'Though a mother may be illiterate, she teaches life values through her sacrifices. The poet acknowledges her silent labor.',
      hi: 'भले ही माँ निरक्षर हो, वह अपने त्याग के माध्यम से जीवन के मूल्य सिखाती है। कवि उसके मौन श्रम को स्वीकार करता है।'
    },
    summary: {
      kn: 'ತಾಯಿಯ ತ್ಯಾಗದ ಮಹಿಮೆ.',
      en: 'The glory of mother\'s sacrifice.',
      hi: 'माँ के त्याग की महिमा।'
    },
    favoriteQuote: 'ಅವ್ವ ಸುರಿಸಿದ ಬೆವರು ಮಣ್ಣು ಕೂಡಿದಾಗ',
    category: 'Love',
    mood: 'Reflective',
    duration: '4:00'
  },
  {
    id: 'dharmashravana',
    title: {
      kn: 'ಧರ್ಮಶ್ರವಣ',
      en: 'Listening to Dharma',
      hi: 'धर्म श्रवण'
    },
    poetId: 'sarvajna',
    poetName: 'ಸರ್ವಜ್ಞ (Sarvajna)',
    introduction: {
      kn: 'ನಿಜವಾದ ಧರ್ಮ ಯಾವುದು ಎಂದು ತಿಳಿಸುವ ತ್ರಿಪದಿ.',
      en: 'A Tripadi explaining what true dharma is.',
      hi: 'सच्चा धर्म क्या है, यह समझाने वाली एक त्रिपदी।'
    },
    content: `ಕೊಟ್ಟದ್ದು ತನಗೆ ಬಟ್ಟೆಟ್ಟಿಗೆ ಪರರಿಗೆ 
ಹೆತ್ತ ತಾಯಿ ತಂದೆಯನ್ನು ನೆನೆದರೆ |
ದೇವಲೋಕಕ್ಕೆ ದಾರಿ ಸುಲಭವು ಸರ್ವಜ್ಞ ||`,
    meaning: {
      'ಬಟ್ಟೆಟ್ಟು': { kn: 'ಸಂಗ್ರಹಿಸಿಟ್ಟದ್ದು', en: 'Stored/hoarded', hi: 'संग्रहित' },
      'ನೆನೆ': { kn: 'ನೆನಪಿಸಿಕೋ', en: 'Remember/Meditate', hi: 'याद करना' }
    },
    bhavartha: {
      kn: 'ದಾನ ಧರ್ಮ ಮಾಡುವುದು ಮತ್ತು ಹೆತ್ತವರನ್ನು ಸೇವೆ ಮಾಡುವುದು ನಿಜವಾದ ಧರ್ಮ. ಇದೇ ಸ್ವರ್ಗಕ್ಕೆ ದಾರಿ ಎಂದು ಸರ್ವಜ್ಞ ಹೇಳುತ್ತಾರೆ.',
      en: 'Helping others and honoring your parents is true dharma. It is the easiest path to salvation.',
      hi: 'दूसरों की मदद करना और अपने माता-पिता का सम्मान करना ही सच्चा धर्म है। यह मोक्ष का सबसे आसान मार्ग है।'
    },
    summary: {
      kn: 'ನೈತಿಕ ಜೀವನದ ಮಾರ್ಗ.',
      en: 'The path of a moral life.',
      hi: 'नैतिक जीवन का मार्ग।'
    },
    favoriteQuote: 'ಕೊಟ್ಟದ್ದು ತನಗೆ ಬಟ್ಟೆಟ್ಟಿಗೆ ಪರರಿಗೆ',
    category: 'Motivation',
    mood: 'Inspirational',
    duration: '2:20'
  },
  {
    id: 'tanuvu-ninnadu',
    title: {
      kn: 'ತನುವಿನೀ ಮನವಿನೀ',
      en: 'This Body is Yours',
      hi: 'यह शरीर तुम्हारा है'
    },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ಭಗವಂತನಿಗೆ ಸಂಪೂರ್ಣ ಶರಣಾಗತಿಯನ್ನು ಸಾರುವ ಗೀತೆ.',
      en: 'A song declaring complete surrender to the Divine.',
      hi: 'ईश्वर के प्रति पूर्ण समर्पण की घोषणा करने वाला एक गीत।'
    },
    content: `ತನುವಿನೀ ಮನವಿನೀ ಧನವಿನೀ ದೇವ |
ನಿನಗೆ ಅರ್ಪಿಸುವೆನು ಎನ್ನಾ ||
ನಾನು ನನ್ನದು ಎಂಬ ಅಹವನು ಕಳೆದು |
ನಿನ್ನ ಪಾದದಿ ಸೇರಿರುವೆನು ||`,
    meaning: {
      'ತನು': { kn: 'ದೇಹ', en: 'Body', hi: 'शरीर' },
      'ಮನ': { kn: 'ಮನಸ್ಸು', en: 'Mind', hi: 'मन' }
    },
    bhavartha: {
      kn: 'ಬದುಕಿನ ಎಲ್ಲವೂ ದೇವರಿಗೆ ಸೇರಿದುದು. ಅಹಂಕಾರವನ್ನು ಬಿಟ್ಟು ಆತನಿಗೆ ಶರಣಾಗುವುದೇ ಶ್ರೇಷ್ಠ ಎಂಬುದು ಕವಿತೆಯ ಸಾರ.',
      en: 'Everything in life belongs to God. Surrendering to Him by leaving behind ego is the highest path.',
      hi: 'जीवन में सब कुछ ईश्वर का है। अहंकार को छोड़कर उनके प्रति समर्पित होना ही सर्वोच्च मार्ग है।'
    },
    summary: {
      kn: 'ಸಂಪೂರ್ಣ ಶರಣಾಗತಿ.',
      en: 'Complete surrender.',
      hi: 'पूर्ण समर्पण।'
    },
    favoriteQuote: 'ತನುವಿನೀ ಮನವಿನೀ ದೇವ',
    category: 'Spiritual',
    mood: 'Peaceful',
    duration: '3:30'
  },
  {
    id: 'namma-desha',
    title: {
      kn: 'ನಮ್ಮ ದೇಶ',
      en: 'Our Nation',
      hi: 'हमारा देश'
    },
    poetId: 'kanavi',
    poetName: 'ಚೆನ್ನವೀರ ಕಣವಿ (Chennaveera Kanavi)',
    introduction: {
      kn: 'ದೇಶದ ಏಕತೆ ಮತ್ತು ಅಖಂಡತೆಯನ್ನು ಸಾರುವ ಗೀತೆ.',
      en: 'A song spreading the message of national unity and integrity.',
      hi: 'राष्ट्रीय एकता और अखंडता का संदेश फैलाने वाला एक गीत।'
    },
    content: `ನಮ್ಮ ದೇಶ ಚೆನ್ನ ಈ ಭರತ ಖಂಡ |
ಇಲ್ಲಿನ ಮಣ್ಣು ನಮಗೆ ಬಂಗಾರ ಅಂದ ||
ಹಲವು ಭಾಷೆ ಹಲವು ವೇಷಗಳಿದ್ದರೂ |
ನಾವೆಲ್ಲರೂ ಭಾರತಮಾತೆಯ ಮಕ್ಕಳು ||`,
    meaning: {
      'ಅಖಂಡತೆ': { kn: 'ಒಂದಾಗಿರುವುದು', en: 'Integrity', hi: 'अखंडता' },
      'ಬಂಗಾರ': { kn: 'ಚಿನ್ನ', en: 'Gold', hi: 'सोना' }
    },
    bhavartha: {
      kn: 'ಭಾರತವು ವೈವಿಧ್ಯತೆಯಲ್ಲಿ ಏಕತೆಯನ್ನು ಹೊಂದಿರುವ ದೇಶ. ಇಲ್ಲಿನ ಎಲ್ಲರೂ ಒಂದೇ ಕುಟುಂಬದಂತೆ ಬಾಳಬೇಕು ಎಂಬುದು ಕವಿಯ ಆಶಯ.',
      en: 'India is a country with unity in diversity. The poet wishes for everyone to live like one single family.',
      hi: 'भारत विविधता में एकता वाला देश है। कवि चाहता है कि हर कोई एक ही परिवार की तरह रहे।'
    },
    summary: {
      kn: 'ದೇಶಭಕ್ತಿ ಮತ್ತು ಏಕತೆ.',
      en: 'Patriotism and unity.',
      hi: 'देशभक्ति और एकता।'
    },
    favoriteQuote: 'ನಾವೆಲ್ಲರೂ ಭಾರತಮಾತೆಯ ಮಕ್ಕಳು',
    category: 'Patriotism',
    mood: 'Energetic',
    duration: '4:15'
  },
  {
    id: 'baagilanu-teredu',
    title: {
      kn: 'ಬಾಗಿಲನು ತೆರೆದು',
      en: 'Open the Door',
      hi: 'दरवाजा खोलो'
    },
    poetId: 'kanaka-dasa',
    poetName: 'ಕನಕದಾಸರು (Kanaka Dasa)',
    introduction: {
      kn: 'ಭಗವಂತನ ದರ್ಶನಕ್ಕಾಗಿ ಹಂಬಲಿಸುವ ಭಕ್ತಿಗೀತೆ.',
      en: 'A devotional song longing for a vision of the Divine.',
      hi: 'ईश्वर के दर्शन की लालसा रखने वाला एक भक्ति गीत।'
    },
    content: `ಬಾಗಿಲನು ತೆರೆದು ಸೇವೆಯನು ಕೊಡೊ ಹರಿಯೆ |
ಕೂಗಿದರೂ ಧ್ವನಿ ಕೇಳಿಸದಾಯಿತೆ ನಿನಗೆ? ||
ನಂಬಿ ಬಂದೆನು ನಾನು ನಿನ್ನ ಅಡಿಯಲಿ... 
ಕಡೆಗಣ್ಣ ನೋಟವ ಬೀರು ಬಾ ಹರಿಯೆ ||`,
    meaning: {
      'ಸೇವೆ': { kn: 'ದರ್ಶನ/ಭಕ್ತಿ', en: 'Service/Vision', hi: 'सेवा/दर्शन' },
      'ಕಡೆಗಣ್ಣ': { kn: 'ಓರೆಗಣ್ಣಿನ', en: 'Glance from the corner of the eye', hi: 'कटाक्ष' }
    },
    bhavartha: {
      kn: 'ಜಗತ್ತಿನ ರಕ್ಷಕನಾದ ಹರಿಯ ದರ್ಶನಕ್ಕಾಗಿ ಕನಕದಾಸರು ಇಲ್ಲಿ ಆರ್ದ್ರವಾಗಿ ಬೇಡಿಕೊಳ್ಳುತ್ತಾರೆ.',
      en: 'Kanaka Dasa earnestly pleads for a vision of Lord Hari, the protector of the world.',
      hi: 'कनक दास दुनिया के रक्षक भगवान हरि के दर्शन के लिए ईमानदारी से प्रार्थना करते हैं।'
    },
    summary: {
      kn: 'ಭಕ್ತಿಯ ಆರ್ತ ಕರೆ.',
      en: 'The fervent call of devotion.',
      hi: 'भक्ति की उत्कट पुकार।'
    },
    favoriteQuote: 'ಕಡೆಗಣ್ಣ ನೋಟವ ಬೀರು ಬಾ ಹರಿಯೆ',
    category: 'Spiritual',
    mood: 'Reflective',
    duration: '5:00'
  },
  {
    id: 'mohana-murali',
    title: {
      kn: 'ಯಾವ ಮೋಹನ ಮುರಳಿ ಕರೆಯಿತೋ',
      en: 'Which Enchanting Flute Called?',
      hi: 'किस जादुई मुरली ने पुकारा?'
    },
    poetId: 'gopalakrishna-adiga',
    poetName: 'ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ',
    introduction: {
      kn: 'ಜೀವನದ ಅನ್ವೇಷಣೆ ಮತ್ತು ಆಂತರಿಕ ಧ್ವನಿಯ ಬಗ್ಗೆ ತಿಳಿಸುವ ಆಧುನಿಕ ಕವಿತೆ.',
      en: 'A modern poem about life\'s search and the inner voice.',
      hi: 'जीवन की खोज और आंतरिक आवाज के बारे में एक आधुनिक कविता।'
    },
    content: `ಯಾವ ಮೋಹನ ಮುರಳಿ ಕರೆಯಿತೋ 
ದೂರ ತೀರಕ್ಕೆ ನಿನ್ನ? |
ಹೋಗುವೆಯೋ ಎಲ್ಲಿಗೋ ಹೇತುವಿಲ್ಲದೆ 
ಬಾಳ ಹರಿಗೋಲು ಸಾಗುವ ಹಾದಿಯಲಿ... ||`,
    meaning: {
      'ಹೇತು': { kn: 'ಕಾರಣ', en: 'Reason/Cause', hi: 'कारण' },
      'ಹರಿಗೋಲು': { kn: 'ತೆಪ್ಪ', en: 'Coracle/Raft', hi: 'छोटी नाव' }
    },
    bhavartha: {
      kn: 'ಬದುಕು ಕವಲೊಡೆದ ದಾರಿಯಂತೆ. ನಾವು ನಮ್ಮ ಅಂತಃಸತ್ವವನ್ನು ಹೇಗೆ ಕಂಡುಕೊಳ್ಳಬೇಕು ಎಂಬುದನ್ನು ಈ ಕವಿತೆ ಚಿತ್ರಿಸುತ್ತದೆ.',
      en: 'Life is like a crossroad. This poem depicts how we should find our inner essence or purpose.',
      hi: 'जीवन एक चौराहे की तरह है। यह कविता दर्शाती है कि हमें अपना आंतरिक सार या उद्देश्य कैसे खोजना चाहिए।'
    },
    summary: {
      kn: 'ಬದುಕಿನ ಅನ್ವೇಷಣೆ.',
      en: 'The search for life\'s meaning.',
      hi: 'जीवन के अर्थ की खोज।'
    },
    favoriteQuote: 'ಯಾವ ಮೋಹನ ಮುರಳಿ ಕರೆಯಿತೋ',
    category: 'Motivation',
    mood: 'Reflective',
    duration: '4:40'
  },
  {
    id: 'toreya-hambala',
    title: {
      kn: 'ತೊರೆಯ ಹಂಬಲ',
      en: 'The Longing of the Stream',
      hi: 'धारा की लालसा'
    },
    poetId: 'gs-shivarudrappa',
    poetName: 'ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ (G.S. Shivarudrappa)',
    introduction: {
      kn: 'ತೊರೆಯು ಸಮುದ್ರವನ್ನು ಸೇರುವ ಹಂಬಲವನ್ನು ಸಾರುವ ಗೀತೆ.',
      en: 'A song depicting a stream\'s intense desire to reach the ocean.',
      hi: 'समुद्र तक पहुँचने की धारा की तीव्र इच्छा को दर्शाने वाला गीत।'
    },
    content: `ಗುಡ್ಡದ ಮೇಲಿಂದ ಹರಿಯುವ ತೊರೆ 
ಸಾಗಬಯಸಿದೆ ಜೋಗದ ಹಾದಿಯಲಿ |
ದೂರದ ಕಡಲನು ಸೇರುವ ಕನಸು 
ಮನದಲಿ ಅಚ್ಚಾಗಿ ನಿಂತಿದೆ ಇಂದ ||`,
    meaning: {
      'ತೊರೆ': { kn: 'ಸಣ್ಣ ನದಿ', en: 'Stream/Rivulet', hi: 'नदी' },
      'ಸಾಗಬಯಸು': { kn: 'ಹೋಗಲು ಇಚ್ಛಿಸು', en: 'Wish to travel/move', hi: 'चलना' }
    },
    bhavartha: {
      kn: 'ದೊಡ್ಡ ಗುರಿಯನ್ನು ತಲುಪಲು ನಾವು ಎಲ್ಲ ಅಡೆತಡೆಗಳನ್ನು ದಾಟಿ ಸಾಗಬೇಕು ಎಂಬುದು ಈ ಕವಿತೆಯ ಒಳನೋಟ.',
      en: 'To reach a great goal, one must cross every obstacle. The stream is a metaphor for a determined life.',
      hi: 'एक महान लक्ष्य तक पहुँचने के लिए, हर बाधा को पार करना पड़ता है। धारा एक दृढ़ जीवन का रूपक है।'
    },
    summary: {
      kn: 'ಗುರಿಯೆಡೆಗಿನ ಪಯಣ.',
      en: 'The journey towards the goal.',
      hi: 'लक्ष्य की ओर यात्रा।'
    },
    favoriteQuote: 'ದೂರದ ಕಡಲನು ಸೇರುವ ಕನಸು',
    category: 'Nature',
    mood: 'Inspirational',
    duration: '3:30'
  },
  {
    id: 'jenina-hole',
    title: {
      kn: 'ಜೇನಿನ ಹೊಳೆ ಯೋವನ',
      en: 'Youth is a Stream of Honey',
      hi: 'यौवन शहद की धारा है'
    },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ (D.R. Bendre)',
    introduction: {
      kn: 'ಯೌವನದ ಉತ್ಸಾಹ ಮತ್ತು ಸೌಂದರ್ಯವನ್ನು ವರ್ಣಿಸುವ ಗೀತೆ.',
      en: 'A song describing the enthusiasm and beauty of youth.',
      hi: 'यौवन के उत्साह और सुंदरता का वर्णन करने वाला गीत।'
    },
    content: `ಜೇನಿನ ಹೊಳೆಯೋ ಹರಿಯುವ ಹೊಳೆ 
ಯೋವನ ಬಂತು ನಮ್ಮವರ ಬಳಿ |
ಗಿಡದಲಿ ಚೌಕ ಹೂವುಗಳ ನಗು 
ಮನದಲಿ ಹೊಸತು ಆಸೆಗಳ ಬಿಗು ||`,
    meaning: {
      'ಯೋವನ': { kn: 'ಯೌವನ', en: 'Youth', hi: 'यौवन' },
      'ಹೊಳೆ': { kn: 'ನದಿ', en: 'Stream', hi: 'नदी' }
    },
    bhavartha: {
      kn: 'ಯೌವನವು ಜೀವನದ ಅತ್ಯಂತ ಸುಂದರ ಸಮಯ. ಅದರಲ್ಲಿರುವ ಉತ್ಸಾಹ ಮತ್ತು ಪ್ರೇಮ ಜಗತ್ತನ್ನೇ ಬದಲಿಸಬಲ್ಲದು.',
      en: 'Youth is the most beautiful time in life. The enthusiasm and love it holds can change the world.',
      hi: 'यौवन जीवन का सबसे खूबसूरत समय है। इसमें जो उत्साह और प्रेम होता है वह दुनिया को बदल सकता है।'
    },
    summary: {
      kn: 'ಯೌವನದ ಸಂಭ್ರಮ.',
      en: 'The celebration of youth.',
      hi: 'यौवन का जश्न।'
    },
    favoriteQuote: 'ಜೇನಿನ ಹೊಳೆಯೋ ಹರಿಯುವ ಹೊಳೆ',
    category: 'Love',
    mood: 'Energetic',
    duration: '4:10'
  },
  {
    id: 'badavanadarenu',
    title: {
      kn: 'ಬಡವನಾದರೆನು ಪ್ರಿಯೆ',
      en: 'What if I am Poor, My Dear?',
      hi: 'क्या हुआ अगर मैं गरीब हूँ, मेरी प्रिय?'
    },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ',
    introduction: {
      kn: 'ಬಡತನಕ್ಕಿಂತ ಪ್ರೀತಿ ಮತ್ತು ಕಾಯಕ ದೊಡ್ಡದು ಎಂದು ತಿಳಿಸುವ ಗೀತೆ.',
      en: 'A song stating that love and work are greater than poverty.',
      hi: 'एक गीत जिसमें कहा गया है कि प्रेम और कार्य गरीबी से बड़े हैं।'
    },
    content: `ಬಡವನಾದರೆನು ಪ್ರಿಯೆ ಕೈಲಿ ದುಡಿಯುವ ಶಕ್ತಿಯಿದೆ 
ಒಟ್ಟಾಗಿ ಬಾಳಿದರೆ ಬೆಟ್ಟ ಕೂಡ ಅಗೆಯಬಹುದು |
ಮನಸಿನ ದೌಲತ್ತು ನಮಗೆ ಸಾಕಪ್ಪ 
ಅಂತಸ್ತಿನ ಹಂಗು ನಮಗೇಕೆ ಬೇಕಪ್ಪ ||`,
    meaning: {
      'ದೌಲತ್ತು': { kn: 'ಸಂಪತ್ತು/ಧೈರ್ಯ', en: 'Wealth/Confidence', hi: 'दौलत' },
      'ಹಂಗು': { kn: 'ಅವಲಂಬನೆ', en: 'Dependence/Expectation', hi: 'सहारा' }
    },
    bhavartha: {
      kn: 'ಆರ್ಥಿಕ ಬಡತನಕ್ಕಿಂತ ಮನಸಿನ ಶ್ರೀಮಂತಿಕೆ ಮುಖ್ಯ. ಒಟ್ಟಾಗಿ ದುಡಿದರೆ ಏನನ್ನೂ ಸಾಧಿಸಬಹುದು ಎಂಬುದು ಕವಿಯ ಸಂದೇಶ.',
      en: 'Richness of mind is more important than financial wealth. Together with hard work, anything can be achieved.',
      hi: 'आर्थिक संपत्ति से ज्यादा मन की अमीरी महत्वपूर्ण है। कड़ी मेहनत के साथ मिलकर कुछ भी हासिल किया जा सकता है।'
    },
    summary: {
      kn: 'ಸ್ವಾವಲಂಬನೆ ಮತ್ತು ಪ್ರೇಮದ ಶಕ್ತಿ.',
      en: 'Self-reliance and the power of love.',
      hi: 'आत्मनिर्भरता और प्रेम की शक्ति।'
    },
    favoriteQuote: 'ಬಡವನಾದರೆನು ಪ್ರಿಯೆ ಕೈಲಿ ದುಡಿಯುವ ಶಕ್ತಿಯಿದೆ',
    category: 'Motivation',
    mood: 'Inspirational',
    duration: '3:45'
  },
  {
    id: 'shivatandava',
    title: {
      kn: 'ಶಿವತಾಂಡವ',
      en: 'Dance of Shiva',
      hi: 'शिव तांडव'
    },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ನಟರಾಜನ ನೃತ್ಯದ ರೌದ್ರ ಮತ್ತು ಸೌಂದರ್ಯವನ್ನು ವರ್ಣಿಸುವ ಗೀತೆ.',
      en: 'A song describing the fierceness and beauty of Lord Shiva\'s dance.',
      hi: 'भगवान शिव के नृत्य की भयंकरता और सुंदरता का वर्णन करने वाला गीत।'
    },
    content: `ಆಡಿದನು ಶಿವ ತಾಂಡವವ ಭೋರ್ಗರೆವ ಮಳೆಯಲಿ 
ಗುಡುಗಿನ ನಾದವ ಮೀಟುತ ಜಗದ ಅಂಗಳದಿ |
ನಕ್ಷತ್ರಗಳ ಹಂದರ ಒಡೆಯುತ ಗತಿಯಲಿ 
ಸೃಷ್ಟಿಯ ಲಯದಲಿ ಮುಳುಗಿದನು ಮದನ ಮೋಹನ ||`,
    meaning: {
      'ಲಯ': { kn: 'ಸ್ಥಿತಿ/ಗತಿ', en: 'Rhythm', hi: 'लय' },
      'ಹಂದರ': { kn: 'ಚಪ್ಪರ/ಆವರಣ', en: 'Canopy/Framework', hi: 'छतरी' }
    },
    bhavartha: {
      kn: 'ಶಿವನ ತಾಂಡವವು ಸೃಷ್ಟಿ ಮತ್ತು ವಿನಾಶದ ಸಂಕೇತ. ಆತನ ನೃತ್ಯದ ದೈವಿಕ ಶಕ್ತಿ ಜಗತ್ತನ್ನು ಸಮತೋಲನದಲ್ಲಿರಿಸುತ್ತದೆ.',
      en: 'Shiva\'s Tandava is a symbol of creation and destruction. The divine power of his dance keeps the world in balance.',
      hi: 'शिव का तांडव सृष्टि और विनाश का प्रतीक है। उनके नृत्य की दिव्य शक्ति दुनिया को संतुलन में रखती है।'
    },
    summary: {
      kn: 'ದೈವಿಕ ಶಕ್ತಿಯ ಸಂಪ್ರದಾಯ.',
      en: 'Tradition of divine power.',
      hi: 'दिव्य शक्ति की परंपरा।'
    },
    favoriteQuote: 'ಆಡಿದನು ಶಿವ ತಾಂಡವವ ಭೋರ್ಗರೆವ ಮಳೆಯಲಿ',
    category: 'Culture',
    mood: 'Energetic',
    duration: '4:30'
  },
  {
    id: 'mankuthimmana-kagga',
    title: {
      kn: 'ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ',
      en: 'Mankuthimmana Kagga (Excerpt)',
      hi: 'मंकुतिम्मन कग्गा'
    },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಜೀವನ ದರ್ಶನವನ್ನು ಜಟಕಾಬಂಡಿಗೆ ಹೋಲಿಸುವ ಡಿವಿಜಿಯವರ ಪ್ರಸಿದ್ಧ ಕವಿತೆ.',
      en: 'A famous poem by DVG comparing life\'s journey to a horse-drawn carriage.',
      hi: 'DVG द्वारा जीवन की यात्रा की तुलना घोड़ा-गाड़ी से करने वाली एक प्रसिद्ध कविता।'
    },
    content: `ಕುದುರೆ ಮದವೇರಿಹುದು, ಗಾಡಿ ಹಳೆಯದು,
ಹದವರಿತು ನಡೆಸುತಿಹನಾತ ಬಲ್ಲಿದನು.
ವಿಧಿಯೆಂಬ ಗಾಡಿಗವನಾತ್ಮ ಚೇತನನು,
ಬದುಕಿನೀ ಹಾದಿಯಲಿ ಮಂಕುತಿಮ್ಮ.`,
    meaning: {
      'ಬಲ್ಲಿದನು': { kn: 'ಶಕ್ತನು, ಸಮರ್ಥನು', en: 'The powerful/skilled one', hi: 'शक्तिशाली' },
      'ಹದವರಿತು': { kn: 'ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ', en: 'Knowing the right way', hi: 'सही तरीका' }
    },
    bhavartha: {
      kn: 'ಬದುಕು ಎಂಬುದು ಜಟಕಾಬಂಡಿಯಂತೆ, ಆತ್ಮ ಅದರ ಚಾಲಕ. ಕಾಲದ ಹಾದಿಯಲ್ಲಿ ಸಾಗುವ ಈ ಪಯಣದ ಸತ್ಯವನ್ನು ಇಲ್ಲಿ ವಿವರಿಸಲಾಗಿದೆ.',
      en: 'Life is like a horse-drawn carriage and the soul the rider. The Master is God, and the world is the path.',
      hi: 'जीवन एक घोड़ा-गाड़ी की तरह है और आत्मा सवार है। ईश्वर स्वामी है, और संसार मार्ग है।'
    },
    summary: {
      kn: 'ಜೀವನ ಮತ್ತು ವಿಧಿಯ ಸಂಬಂಧ.',
      en: 'Relation between life and fate.',
      hi: 'जीवन और भाग्य के बीच संबंध।'
    },
    favoriteQuote: 'ವಿಧಿಯೆಂಬ ಗಾಡಿಗವನಾತ್ಮ ಚೇತನನು',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '3:15'
  },
  {
    id: 'turning-wheels',
    title: {
      kn: 'ಚಕ್ರ',
      en: 'The Turning Wheels',
      hi: 'घूमते पहिए'
    },
    poetId: 'gs-shivarudrappa',
    poetName: 'ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ (G.S. Shivarudrappa)',
    introduction: {
      kn: 'ಕಾಲದ ಬದಲಾವಣೆ ಮತ್ತು ಅನಿಶ್ಚಿತತೆಯನ್ನು ಚಿತ್ರಿಸುವ ಕವಿತೆ.',
      en: 'A poem depicting the change and uncertainty of time.',
      hi: 'समय के परिवर्तन और अनिश्चितता को दर्शाती एक कविता।'
    },
    content: `ಚಕ್ರ ಉರುಳುತಿರುತ್ತವೆ, ಕಾಲ ಬದಲಾಗುತ್ತಿರುತ್ತದೆ,
ಇಂದಿನ ಮಣ್ಣು ನಾಳೆಯ ಸಿಂಹಾಸನ.
ಮನುಷ್ಯ ಗೋಡೆ ಕಟ್ಟುತ್ತಾನೆ ಅಮರವೆಂದು,
ಗಾಳಿ ನಗುತ್ತದೆ ಆಕಾಶವೊಂದೇ ಶಾಶ್ವತವೆಂದು ಅರಿತು.`,
    meaning: {
      'ಶಾಶ್ವತ': { kn: 'ಯಾವಾಗಲೂ ಇರುವಂತಹುದು', en: 'Eternal', hi: 'शाश्वत' },
      'ಸಿಂಹಾಸನ': { kn: 'ರಾಜಗದ್ದುಗೆ', en: 'Throne', hi: 'सिंहासन' }
    },
    bhavartha: {
      kn: 'ಕಾಲದ ಚಕ್ರ ನಿರಂತರವಾಗಿ ಉರುಳುತ್ತದೆ. ಇಂದು ಮಣ್ಣಾಗಿರುವುದು ನಾಳೆ ಅಧಿಕಾರವಾಗಬಹುದು. ಯಾವುದು ಶಾಶ್ವತವಲ್ಲ ಎಂಬುದನ್ನು ಇದು ತಿಳಿಸುತ್ತದೆ.',
      en: 'The wheels turn, the seasons change, and the dust of today becomes the throne of tomorrow.',
      hi: 'पहिए घूमते हैं, मौसम बदलते हैं, और आज की धूल कल का सिंहासन बन जाती है।'
    },
    summary: {
      kn: 'ಕಾಲದ ಬದಲಾವಣೆ.',
      en: 'The movement of time.',
      hi: 'समय की गति।'
    },
    favoriteQuote: 'ಆಕಾಶವೊಂದೇ ಶಾಶ್ವತವೆಂದು ಅರಿತು',
    category: 'Philosophy',
    mood: 'Calm',
    duration: '2:45'
  },
  {
    id: 'who-am-i',
    title: {
      kn: 'ನಾನು ಯಾರು?',
      en: 'Who Am I?',
      hi: 'मैं कौन हूँ?'
    },
    poetId: 'shishunala-sharif',
    poetName: 'ಶಿಶುನಾಳ ಶರೀಫ (Shishunala Sharif)',
    introduction: {
      kn: 'ಆಧ್ಯಾತ್ಮಿಕ ಅನ್ವೇಷಣೆಯ ಮೂಲಕ ತನ್ನ ಅಸ್ತಿತ್ವವನ್ನು ಪ್ರಶ್ನಿಸುವ ಶರೀಫರ ವಚನ.',
      en: 'Shishunala Sharif\'s poem questioning self-existence through spiritual inquiry.',
      hi: 'शिशुनाला शरीफ की कविता आध्यात्मिक जांच के माध्यम से आत्म-अस्तित्व पर सवाल उठाती है।'
    },
    content: `ದೇಹವಲ್ಲ ನಾನು, ಉಸಿರಲ್ಲ ನಾನು,
ದೀಪದಂತೆ ಮಿನುಗುವ ಆಲೋಚನೆಯಲ್ಲ.
ಮಾತಿನ ನಡುವಿನ ಮೌನ ನಾನು,
ಬೆಳಕಿನ ಕಿಡಿ ನಾನು, ಕತ್ತಲಲ್ಲಿ ಅಲೆದಾಡುವ ಚೇತನ.`,
    meaning: {
      'ಚೇತನ': { kn: 'ಜೀವ', en: 'Spirit/Consciousness', hi: 'चेतना' },
      'ಮಿನುಗುವ': { kn: 'ಹೊಳೆಯುವ', en: 'Glimmering', hi: 'चमकता' }
    },
    bhavartha: {
      kn: 'ನಾನು ಈ ದೇಹವಾಗಲಿ ಅಥವಾ ಉಸಿರಾಗಲಿ ಅಲ್ಲ. ನಾನು ಕೇವಲ ಒಂದು ಆತ್ಮದ ಬೆಳಕು ಎಂಬ ಅದ್ವೈತ ಭಾವ ಇಲ್ಲಿದೆ.',
      en: 'I am not this body, nor the breath that leaves it. I am the silence between the words.',
      hi: 'मैं न तो यह शरीर हूँ, न ही वह साँस जो इसे छोड़ती है। मैं शब्दों के बीच का सन्नाटा हूँ।'
    },
    summary: {
      kn: 'ಆತ್ಮದ ಅನ್ವೇಷಣೆ.',
      en: 'The quest for the soul.',
      hi: 'आत्मा की खोज।'
    },
    favoriteQuote: 'ಮಾತಿನ ನಡುವಿನ ಮೌನ ನಾನು',
    category: 'Philosophy',
    mood: 'Peaceful',
    duration: '3:30'
  },
  {
    id: 'mankutimmana-kagga',
    title: { kn: 'ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ', en: 'Mankutimmana Kagga', hi: 'मंकुतिम्मन कग्गा' },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪನವರ ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಒಂದು ಅನರ್ಘ್ಯ ರತ್ನ. ಜೀವನದ ರಹಸ್ಯ, ಸಂಶಯ ಮತ್ತು ಸ್ವೀಕಾರದ ಬಗ್ಗೆ ಗಂಭೀರ ಚಿಂತನೆ ಮಾಡುವ ಈ ಕೃತಿ "ಕನ್ನಡದ ಭಗವದ್ಗೀತೆ" ಎಂದು ಪ್ರಸಿದ್ಧವಾಗಿದೆ.',
      en: 'Mankutimmana Kagga by D.V. Gundappa is an invaluable gem of Kannada literature. Known as the "Bhagavad Gita of Kannada," it deeply contemplates the mystery, doubt, and acceptance of life.',
      hi: 'डी.वी. गुंडप्पा की मंकुतिम्मन कग्गा कन्नड़ साहित्य की एक अमूल्य रत्न है। "कन्नड़ की भगवद्गीता" के रूप में जानी जाती यह कृति जीवन के रहस्य, संशय और स्वीकृति पर गहराई से विचार करती है।'
    },
    content: `ವಿಶ್ವವಿದ್ದರೆ ಮಾಯೆ, ಇಲ್ಲದಿದ್ದರೆ ಶೂನ್ಯ,
ಸತ್ಯವೆಂಬುದೇ ಇಲ್ಲ, ಮಿಥ್ಯವೇ ಸತ್ಯ ಅನ್ಯ.
ಮಂಕುತಿಮ್ಮ ಮರಳ ಮೇಲೆ ಬಿಡು ನಿನ್ನ ಕಥೆ,
ಕಾಲವೇ ಸಾಕ್ಷಿ ಎಲ್ಲ, ಬಾಳು ನಿನ್ನ ಪಥೆ.

ಹುಟ್ಟಿದರೆ ಸಾಯಬೇಕು, ಬಂದರೆ ಹೋಗಬೇಕು,
ನಗೆಯ ಹಿಂದೆ ಅಳು ಅಡಗಿದೆ, ಅರಿತು ನಡೆಯಬೇಕು.
ಬ್ರಹ್ಮಾಂಡದ ಆಟದಲ್ಲಿ ನಾವು ಆಟಿಕೆ,
ಮಂಕುತಿಮ್ಮ ಒಪ್ಪಿಕೊ ಇದುವೇ ಜೀವನ ನೀತಿಕೆ.`,
    meaning: {
      'ಮಾಯೆ': { kn: 'ಭ್ರಮೆ, ಸುಳ್ಳು ಕಾಣುವಿಕೆ', en: 'Illusion', hi: 'माया/भ्रम' },
      'ಮಿಥ್ಯ': { kn: 'ಸುಳ್ಳು, ಅಸತ್ಯ', en: 'Falsehood', hi: 'मिथ्या' },
      'ಬ್ರಹ್ಮಾಂಡ': { kn: 'ಇಡೀ ಜಗತ್ತು', en: 'Universe', hi: 'ब्रह्मांड' }
    },
    bhavartha: {
      kn: 'ಜಗತ್ತು ಇದ್ದರೂ ಮಾಯೆ, ಇಲ್ಲದಿದ್ದರೂ ಶೂನ್ಯ. ಈ ರಹಸ್ಯಮಯ ಜೀವನದಲ್ಲಿ ಮನುಷ್ಯ ಆಟಿಕೆಯಷ್ಟೇ. ಎಲ್ಲವನ್ನೂ ಒಪ್ಪಿಕೊಂಡು ತನ್ನ ಪಾಡಿನಲ್ಲಿ ನಡೆಯುವುದೇ ಜ್ಞಾನ ಎಂದು ಡಿವಿಜಿ ಹೇಳುತ್ತಾರೆ.',
      en: 'The world is illusion if it exists, void if it does not. In this mysterious life, man is merely a toy. DVG says that accepting everything and walking one\'s own path is wisdom.',
      hi: 'संसार हो तो माया है, न हो तो शून्य है। इस रहस्यमय जीवन में मनुष्य एक खिलौने से अधिक नहीं। सब कुछ स्वीकार करके अपनी राह पर चलना ही ज्ञान है।'
    },
    summary: {
      kn: 'ಜೀವನದ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಒಪ್ಪಿ ಶಾಂತಿಯಿಂದ ಬಾಳಿ.',
      en: 'Accept life\'s uncertainties and live in peace.',
      hi: 'जीवन की अनिश्चितता को स्वीकारो और शांति से जियो।'
    },
    favoriteQuote: 'ಮಂಕುತಿಮ್ಮ ಒಪ್ಪಿಕೊ ಇದುವೇ ಜೀವನ ನೀತಿಕೆ',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '4:00'
  },
  {
    id: 'hakkiya-haadu',
    title: { kn: 'ಹಕ್ಕಿಯ ಹಾಡು', en: 'The Bird\'s Song', hi: 'पक्षी का गीत' },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ಕುವೆಂಪು ಅವರ ಈ ಕವಿತೆ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯವನ್ನು ಒಂದು ಹಕ್ಕಿಯ ದೃಷ್ಟಿಯಿಂದ ವರ್ಣಿಸುತ್ತದೆ.',
      en: 'This poem by Kuvempu describes the beauty of freedom and nature from a bird\'s perspective.',
      hi: 'कुवेम्पू की यह कविता एक पक्षी के दृष्टिकोण से स्वतंत्रता और प्रकृति की सुंदरता का वर्णन करती है।'
    },
    content: `ಹಾರುತಿದೆ ಹಕ್ಕಿ ನೀಲಾಂಬರದಲ್ಲಿ,
ಹಾಡುತಿದೆ ಸ್ವರ ಹಸಿರು ಕಾಡಿನಲ್ಲಿ.
ಗಿರಿಗಳ ಮೇಲೆ ಗಾಳಿಯ ಜೊತೆ ಆಡಿ,
ನದಿಯ ನೀರಿನಲ್ಲಿ ತನ್ನ ಬಿಂಬ ನೋಡಿ.

ಸ್ವತಂತ್ರ ನಾನು ಎಂಬ ಭಾವ ಎದೆಯಲ್ಲಿ,
ಪ್ರೀತಿ ತುಂಬಿ ಹರಿಯುತಿದೆ ಗೀತೆಯಲ್ಲಿ.
ನಾಡ ನೆಲದ ಸಿರಿಯ ನಾನು ಹಾಡುವೆ,
ಬೆಳಕ ತಂದು ಜಗಕೆ ಆಶೆ ಊಡುವೆ.`,
    meaning: {
      'ನೀಲಾಂಬರ': { kn: 'ನೀಲಿ ಆಕಾಶ', en: 'Blue sky', hi: 'नीला आकाश' },
      'ಬಿಂಬ': { kn: 'ನೆರಳಿನ ಪ್ರತಿಬಿಂಬ', en: 'Reflection/image', hi: 'प्रतिबिम्ब' }
    },
    bhavartha: {
      kn: 'ಹಕ್ಕಿ ನೀಲಿ ಆಕಾಶದಲ್ಲಿ ಮುಕ್ತವಾಗಿ ಹಾರಾಡುತ್ತಾ ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯವನ್ನು ಸವಿಯುತ್ತದೆ. ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಪ್ರಕೃತಿ ಒಂದಾಗಿ ಸಂಭ್ರಮಿಸುವ ಚಿತ್ರ ಇಲ್ಲಿದೆ.',
      en: 'A bird soars freely in the blue sky, savoring the beauty of nature. This poem paints a picture of freedom and nature celebrating together.',
      hi: 'एक पक्षी नीले आकाश में स्वतंत्र रूप से उड़ता है, प्रकृति की सुंदरता का आनंद लेता है। यह कविता स्वतंत्रता और प्रकृति के एक साथ उत्सव का चित्र प्रस्तुत करती है।'
    },
    summary: {
      kn: 'ಪ್ರಕೃತಿಯ ಮಡಿಲಲ್ಲಿ ಹಕ್ಕಿಯ ಸ್ವತಂತ್ರ ಜೀವನ.',
      en: 'A bird\'s free life in the lap of nature.',
      hi: 'प्रकृति की गोद में पक्षी का स्वतंत्र जीवन।'
    },
    favoriteQuote: 'ಹಾರುತಿದೆ ಹಕ್ಕಿ ನೀಲಾಂಬರದಲ್ಲಿ',
    category: 'Nature',
    mood: 'Peaceful',
    duration: '3:15'
  },
  {
    id: 'udayavagali',
    title: { kn: 'ಉದಯವಾಗಲಿ ನಮ್ಮ ಚೆಲುವ ಕನ್ನಡ ನಾಡು', en: 'Let Our Beautiful Karnataka Rise', hi: 'उदय हो हमारे सुंदर कन्नड़ प्रदेश का' },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ಕರ್ನಾಟಕದ ಉದಯ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ಕುರಿತ ಕುವೆಂಪು ಅವರ ದೇಶಭಕ್ತಿ ಕವಿತೆ.',
      en: 'Kuvempu\'s patriotic poem about the rise and prosperity of Karnataka.',
      hi: 'कर्नाटक के उदय और समृद्धि पर कुवेम्पू की देशभक्ति कविता।'
    },
    content: `ಉದಯವಾಗಲಿ ನಮ್ಮ ಚೆಲುವ ಕನ್ನಡ ನಾಡು,
ಬೆಳೆದು ನಿಲ್ಲಲಿ ಕನ್ನಡಿಗರ ಒಕ್ಕಟ್ಟಿನ ಕೂಡು.
ಬೆಟ್ಟ ಗುಡ್ಡ ಕಾಡು ನದಿ ಸಾಗರ ಕೆರೆ,
ಈ ನೆಲದ ಮಕ್ಕಳಿಗೆ ಜಯ ಜಯ ಉರೆ.

ಕನ್ನಡ ತಾಯಿಗೆ ಕೀರ್ತಿ ತನ್ನಿ ಮಕ್ಕಳೇ,
ಕನ್ನಡ ಭಾಷೆಯ ಹಣತೆ ಬೆಳಗಿಸಿ ತಕ್ಕಳೇ.
ಒಂದೇ ಮನದಿ ಒಂದೇ ನುಡಿಯಲ್ಲಿ ನಿಲ್ಲಿ,
ಕನ್ನಡ ನಾಡ ಹಿರಿಮೆ ಎಲ್ಲೆಡೆ ತಿಳ್ಳಿ.`,
    meaning: {
      'ಒಕ್ಕಟ್ಟು': { kn: 'ಏಕತೆ, ಒಗ್ಗಟ್ಟು', en: 'Unity', hi: 'एकता' },
      'ಹಣತೆ': { kn: 'ದೀಪ, ಬೆಳಕು', en: 'Lamp/light', hi: 'दीपक' }
    },
    bhavartha: {
      kn: 'ಕನ್ನಡ ನಾಡಿನ ಉದಯ ಮತ್ತು ಕನ್ನಡಿಗರ ಏಕತೆಯ ಕರೆ ಈ ಕವಿತೆಯ ಮೂಲ ಸಂದೇಶ. ಕನ್ನಡ ಭಾಷೆ, ನಾಡು ಮತ್ತು ಜನರ ಮೇಲಿನ ಪ್ರೀತಿ ಉಕ್ಕಿ ಹರಿಯುತ್ತದೆ.',
      en: 'The poem\'s core message is a call for the rise of Karnataka and the unity of Kannadigas. It overflows with love for the Kannada language, land, and people.',
      hi: 'कविता का मूल संदेश कर्नाटक के उदय और कन्नडिगाओं की एकता का आह्वान है। कन्नड़ भाषा, भूमि और लोगों के प्रति प्रेम उमड़ पड़ता है।'
    },
    summary: {
      kn: 'ಕನ್ನಡ ನಾಡಿನ ಉದಯ ಮತ್ತು ಹಿರಿಮೆ.',
      en: 'The rise and glory of the Kannada land.',
      hi: 'कन्नड़ भूमि का उदय और गौरव।'
    },
    favoriteQuote: 'ಉದಯವಾಗಲಿ ನಮ್ಮ ಚೆಲುವ ಕನ್ನಡ ನಾಡು',
    category: 'Patriotism',
    mood: 'Energetic',
    duration: '3:30'
  },
  {
    id: 'shishuvina-haadu',
    title: { kn: 'ಶಿಶುವಿನ ಹಾಡು', en: 'The Child\'s Lullaby', hi: 'शिशु का गीत' },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ (D.R. Bendre)',
    introduction: {
      kn: 'ಬೇಂದ್ರೆ ಅವರ ಈ ಮಧುರ ತಾಯಿ-ಮಗನ ಪ್ರೇಮದ ಲಾಲಿ ಹಾಡು ಕನ್ನಡ ಕಾವ್ಯದಲ್ಲಿ ವಿಶೇಷ ಸ್ಥಾನ ಪಡೆದಿದೆ.',
      en: 'This sweet mother-child love lullaby by Bendre holds a special place in Kannada poetry.',
      hi: 'बेंद्रे का यह मधुर माँ-बच्चे के प्रेम का लोरी गीत कन्नड़ कविता में विशेष स्थान रखता है।'
    },
    content: `ಲಾಲಿ ಲಾಲಿ ಲಾಲಿ ಕಂದ, ನಿದ್ದೆ ಮಾಡು ಮಗನಂದ,
ತಾರೆ ನಿನ್ನ ನೋಡ ಬರುವ, ಚಂದ್ರ ನಿನ್ನ ನಗೆ ಕಾಣ್ಬ.
ತಾಯಿ ಮಮತೆ ಎಂದೂ ಬಾಡದ, ನಿನ್ನ ಕನಸು ಎಂದೂ ಮಾಡದ,
ಮಲ್ಲಿಗೆ ಹೂವಿನಂತೆ ನೀನು ಅರಳು ಕಂದ ಮಮ್ಮಲ.

ಬೆಳ್ಳಿ ಮೋಡದ ಅಡಿಯಲ್ಲಿ ಮಲಗಿ,
ಸ್ವರ್ಗದ ಸ್ವಪ್ನ ಕಾಣು ಎದ್ದಾಗಿ.
ಮುಂಜಾನೆ ಬೆಳಕ ತಂದು ಬಾ ನೀ,
ಜಗದ ಜ್ಯೋತಿಯಾಗು ನೀನಲ್ಲ ಕಂದಾ.`,
    meaning: {
      'ಮಮ್ಮಲ': { kn: 'ತಾಯಿಯ ಪ್ರೀತಿಯ ಕರೆ', en: 'Mother\'s tender call', hi: 'माँ की प्यार भरी पुकार' },
      'ಸ್ವಪ್ನ': { kn: 'ಕನಸು', en: 'Dream', hi: 'सपना' }
    },
    bhavartha: {
      kn: 'ತಾಯಿ ತನ್ನ ಮಗುವಿಗೆ ಲಾಲಿ ಹಾಡಿ ಮಲಗಿಸುತ್ತಾ, ಆ ಮಗು ಒಂದು ದಿನ ಜಗದ ಬೆಳಕಾಗಬೇಕೆಂಬ ಆಶೀರ್ವಾದ ನೀಡುತ್ತಾಳೆ. ತಾಯಿ ಪ್ರೇಮ ಮತ್ತು ಭವಿಷ್ಯದ ಭರವಸೆ ಈ ಕವಿತೆಯ ಸಾರ.',
      en: 'A mother sings a lullaby to her child while blessing it to become the light of the world one day. The essence of the poem is mother\'s love and hope for the future.',
      hi: 'एक माँ अपने बच्चे को लोरी सुनाते हुए उसे एक दिन दुनिया का प्रकाश बनने का आशीर्वाद देती है। कविता का सार मातृप्रेम और भविष्य की उम्मीद है।'
    },
    summary: {
      kn: 'ತಾಯಿ ಪ್ರೇಮ ಮತ್ತು ಮಗುವಿನ ಭವಿಷ್ಯದ ಆಶೀರ್ವಾದ.',
      en: 'Mother\'s love and blessings for the child\'s future.',
      hi: 'मातृप्रेम और बच्चे के भविष्य के लिए आशीर्वाद।'
    },
    favoriteQuote: 'ತಾಯಿ ಮಮತೆ ಎಂದೂ ಬಾಡದ',
    category: 'Love',
    mood: 'Calm',
    duration: '3:20'
  },
  {
    id: 'belakina-hadu',
    title: { kn: 'ಬೆಳಕಿನ ಹಾಡು', en: 'Song of Light', hi: 'प्रकाश का गीत' },
    poetId: 'gs-shivarudrappa',
    poetName: 'ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ (G.S. Shivarudrappa)',
    introduction: {
      kn: 'ಶಿವರುದ್ರಪ್ಪ ಅವರ ಈ ಕವಿತೆ ಕತ್ತಲನ್ನು ಜಯಿಸಿ ಬೆಳಕಿನ ದಾರಿಯಲ್ಲಿ ನಡೆಯಲು ಪ್ರೇರಣೆ ನೀಡುತ್ತದೆ.',
      en: 'This poem by Shivarudrappa inspires us to overcome darkness and walk the path of light.',
      hi: 'शिवरुद्रप्पा की यह कविता अंधकार को जीतकर प्रकाश के मार्ग पर चलने की प्रेरणा देती है।'
    },
    content: `ಬೆಳಕ ತನ್ನಿ, ಬೆಳಕ ತನ್ನಿ, ಕತ್ತಲ ಓಡಿಸಿ,
ಜ್ಞಾನದ ದೀಪ ಹಚ್ಚಿ ನಾಡ ಬೆಳಗಿಸಿ.
ಭಯ ಬಿಡಿ, ಸಂಶಯ ತೊಡಿ, ಮುನ್ನಡೆಯಿರಿ,
ಹೊಸ ಹೆಜ್ಜೆ ಇಡಿ, ಹೊಸ ಹಾಡು ಹಾಡಿ ಬದುಕಿರಿ.

ಕನಸು ಕಾಣಿ, ಕಾಣ್ಕೆ ಮಾಡಿ, ಕಾಯಕ ನಡೆಸಿ,
ಬೆವರ ಹನಿಯಲ್ಲಿ ಭವಿಷ್ಯ ಬರೆದು ತೋರಿಸಿ.
ಮನೆ ಮನೆಯಲ್ಲಿ ಹಣತೆ ಬೆಳಗಲಿ,
ಮನ ಮನದಲ್ಲಿ ಆಸೆ ಹೊಳೆಯಲಿ.`,
    meaning: {
      'ಜ್ಞಾನ': { kn: 'ತಿಳಿವಳಿಕೆ, ಅರಿವು', en: 'Knowledge/wisdom', hi: 'ज्ञान' },
      'ಕಾಯಕ': { kn: 'ಕೆಲಸ, ಶ್ರಮ', en: 'Work/labour', hi: 'कार्य' }
    },
    bhavartha: {
      kn: 'ಕತ್ತಲನ್ನು ಓಡಿಸಿ ಜ್ಞಾನದ ದೀಪ ಹಚ್ಚಬೇಕು, ಭಯ-ಸಂಶಯ ತೊರೆದು ಪರಿಶ್ರಮದಿಂದ ಭವಿಷ್ಯ ನಿರ್ಮಿಸಬೇಕು ಎಂಬ ಪ್ರೇರಣಾ ಸಂದೇಶ ಇಲ್ಲಿದೆ.',
      en: 'This poem carries an inspirational message to drive away darkness and light the lamp of knowledge, to shed fear and doubt, and build the future through hard work.',
      hi: 'यह कविता अंधकार भगाकर ज्ञान का दीप जलाने, भय और संशय त्यागकर परिश्रम से भविष्य बनाने का प्रेरणादायक संदेश देती है।'
    },
    summary: {
      kn: 'ಜ್ಞಾನ ಮತ್ತು ಪರಿಶ್ರಮದಿಂದ ಹೊಸ ಭವಿಷ್ಯ ನಿರ್ಮಿಸಿ.',
      en: 'Build a new future through knowledge and hard work.',
      hi: 'ज्ञान और परिश्रम से नया भविष्य बनाओ।'
    },
    favoriteQuote: 'ಜ್ಞಾನದ ದೀಪ ಹಚ್ಚಿ ನಾಡ ಬೆಳಗಿಸಿ',
    category: 'Motivation',
    mood: 'Inspirational',
    duration: '3:10'
  },
  {
    id: 'nanna-hadu',
    title: { kn: 'ನನ್ನ ಹಾಡು', en: 'My Song', hi: 'मेरा गीत' },
    poetId: 'gopalakrishna-adiga',
    poetName: 'ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ (Gopalakrishna Adiga)',
    introduction: {
      kn: 'ಅಡಿಗರ ಈ ಕವಿತೆ ತನ್ನದೇ ಆದ ದನಿ ಕಂಡುಕೊಳ್ಳುವ ಆತ್ಮ ಸಂಶೋಧನೆಯ ಕವಿತೆ.',
      en: 'Adiga\'s poem is a self-exploration poem about finding one\'s own unique voice.',
      hi: 'अडिग की यह कविता अपनी अनोखी आवाज खोजने की आत्म-अन्वेषण की कविता है।'
    },
    content: `ನನ್ನ ಹಾಡು ನನ್ನ ದನಿ, ನನ್ನ ನೋವ ಮಾತು,
ಬೇರೆಯವರ ಹಾಡ ಹಾಡಲಾರೆ ನಾನಿಂತು.
ಕಲ್ಲ ಮೌನದಲ್ಲಿ ಕಥೆ ಅಡಗಿದೆ ಎಲ್ಲ,
ಮಾತಿನ ಹಿಂದೆ ಅರ್ಥ ಹುಡುಕಿ ಹೊರಡು ನಾನು.

ಅವರ ಮಾತಲ್ಲ, ಇವರ ನುಡಿಯಲ್ಲ,
ನನ್ನ ಒಳಗಿನ ಕನಸು ನನ್ನ ಸತ್ಯ.
ಹೊಸ ದಾರಿ ಹಿಡಿದು ನಡೆಯುವೆ ನಾನು,
ನನ್ನ ದನಿ ಉಳಿಸಿ ನನ್ನ ಪಯಣ ಸಾಧ್ಯ.`,
    meaning: {
      'ದನಿ': { kn: 'ಶಬ್ದ, ಆವಾಜ್', en: 'Voice', hi: 'आवाज़' },
      'ಪಯಣ': { kn: 'ಪ್ರಯಾಣ, ಪ್ರಯಾಸ', en: 'Journey', hi: 'यात्रा' }
    },
    bhavartha: {
      kn: 'ಕವಿ ತನ್ನದೇ ಆದ ದನಿ, ತನ್ನದೇ ಅನುಭವ, ತನ್ನದೇ ಸತ್ಯವನ್ನು ಕಾವ್ಯದ ಮೂಲಕ ಹೇಳಲು ಬಯಸುತ್ತಾನೆ. ಅನ್ಯರ ಹಾಡಿಗೆ ಅನುಕರಣೆ ಮಾಡದೆ ಸ್ವಂತ ಮಾರ್ಗ ಕ್ರಮಿಸುವ ನಿರ್ಧಾರ.',
      en: 'The poet desires to express his own voice, his own experience, and his own truth through poetry. It is a resolve to walk one\'s own path without imitating others.',
      hi: 'कवि अपनी आवाज, अपने अनुभव और अपनी सच्चाई को कविता के माध्यम से व्यक्त करना चाहता है। दूसरों की नकल न करके अपना रास्ता चुनने का संकल्प।'
    },
    summary: {
      kn: 'ಸ್ವಂತ ದನಿ ಕಂಡುಕೊಂಡು ಬದುಕಿ.',
      en: 'Find your own voice and live by it.',
      hi: 'अपनी आवाज खोजो और उससे जियो।'
    },
    favoriteQuote: 'ನನ್ನ ಹಾಡು ನನ್ನ ದನಿ, ನನ್ನ ನೋವ ಮಾತು',
    category: 'Motivation',
    mood: 'Reflective',
    duration: '3:05'
  },
  {
    id: 'akkamahadevi-vachana',
    title: { kn: 'ಅಕ್ಕಮಹಾದೇವಿ ವಚನ', en: 'Akka Mahadevi\'s Vachana', hi: 'अक्का महादेवी का वचन' },
    poetId: 'akka-mahadevi',
    poetName: 'ಅಕ್ಕಮಹಾದೇವಿ (Akka Mahadevi)',
    introduction: {
      kn: 'ಅಕ್ಕಮಹಾದೇವಿ ತಮ್ಮ ವಚನಗಳ ಮೂಲಕ ಚೆನ್ನಮಲ್ಲಿಕಾರ್ಜುನನ ಭಕ್ತಿಯನ್ನು ಮನೋಹರವಾಗಿ ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ.',
      en: 'Akka Mahadevi beautifully expressed her devotion to Chennamallikarjuna through her vachanas.',
      hi: 'अक्का महादेवी ने अपने वचनों के माध्यम से चेन्नमल्लिकार्जुन के प्रति अपनी भक्ति को मनोहर ढंग से व्यक्त किया है।'
    },
    content: `ಚೆನ್ನಮಲ್ಲಿಕಾರ್ಜುನ ನನ್ನ ಗಂಡ,
ಅವನ ಪ್ರೀತಿ ನನ್ನ ಜೀವನ ಭಂಡ.
ಲೌಕಿಕ ಬಂಧ ತೊರೆದು ಹೊರಟೆ,
ಅಲ್ಲಯ್ಯನ ಮಡಿಲಿಗೆ ಸೇರಿಕೊಂಡೆ.

ಹೂವಿನ ಮನಸ್ಸಲ್ಲಿ ಭಕ್ತಿ ತುಂಬಿ,
ಪ್ರೇಮದ ನದಿ ಮೈಯ ತಂಬಿ ತಂಬಿ.
ಶರಣರ ನಡುವೆ ಶಿವ ಕಾಣಿಸ,
ಚೆನ್ನಮಲ್ಲ ನನ್ನ ದೇವ ಬಾಳ ಜ್ಯೋತಿಸ.`,
    meaning: {
      'ಚೆನ್ನಮಲ್ಲಿಕಾರ್ಜುನ': { kn: 'ಅಕ್ಕಮಹಾದೇವಿ ಆರಾಧಿಸುತ್ತಿದ್ದ ಶಿವನ ರೂಪ', en: 'The form of Shiva worshipped by Akka Mahadevi', hi: 'अक्का महादेवी द्वारा पूजित शिव का रूप' },
      'ಲೌಕಿಕ': { kn: 'ಸಂಸಾರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ', en: 'Worldly', hi: 'सांसारिक' }
    },
    bhavartha: {
      kn: 'ಅಕ್ಕಮಹಾದೇವಿ ಶಿವನನ್ನು ತನ್ನ ಪತಿ ಎಂದು ಭಾವಿಸಿ, ಲೌಕಿಕ ಜಗತ್ತನ್ನು ತ್ಯಜಿಸಿ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗ ಹಿಡಿದಳು. ಅವಳ ಭಕ್ತಿ ಕೇವಲ ಧಾರ್ಮಿಕ ಅಲ್ಲ, ಅದು ಅಗಾಧ ಪ್ರೇಮ.',
      en: 'Akka Mahadevi regarded Shiva as her husband, renounced the worldly life, and took the spiritual path. Her devotion was not merely religious but an immense love.',
      hi: 'अक्का महादेवी ने शिव को अपना पति माना, सांसारिक जीवन त्यागकर आध्यात्मिक मार्ग अपनाया। उनकी भक्ति केवल धार्मिक नहीं थी, यह गहरा प्रेम था।'
    },
    summary: {
      kn: 'ದೈವ ಭಕ್ತಿ ಮತ್ತು ಲೌಕಿಕ ತ್ಯಾಗ.',
      en: 'Divine devotion and worldly renunciation.',
      hi: 'दिव्य भक्ति और सांसारिक त्याग।'
    },
    favoriteQuote: 'ಚೆನ್ನಮಲ್ಲಿಕಾರ್ಜುನ ನನ್ನ ಗಂಡ',
    category: 'Spiritual',
    mood: 'Peaceful',
    duration: '3:40'
  },
  {
    id: 'sarvajna-tripadi',
    title: { kn: 'ಸರ್ವಜ್ಞನ ತ್ರಿಪದಿ', en: 'Sarvajna\'s Tripadi', hi: 'सर्वज्ञ की त्रिपदी' },
    poetId: 'sarvajna',
    poetName: 'ಸರ್ವಜ್ಞ (Sarvajna)',
    introduction: {
      kn: 'ಸರ್ವಜ್ಞನ ತ್ರಿಪದಿಗಳು ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಜೀವನ ಮೌಲ್ಯಗಳನ್ನು ಮೂರು ಸಾಲುಗಳಲ್ಲಿ ತಿಳಿಸುತ್ತವೆ.',
      en: 'Sarvajna\'s tripadis convey life values to common people in just three lines.',
      hi: 'सर्वज्ञ की त्रिपदियाँ सामान्य लोगों को तीन पंक्तियों में जीवन मूल्य सिखाती हैं।'
    },
    content: `ಒಳಗೆ ಒಳ್ಳೆಯ ಮನಸ್ಸಿರಲಿ, ಹೊರಗೆ ನಡತೆ ಒಳ್ಳೆಯದಿರಲಿ,
ಮಾತು ಸತ್ಯ ಮಧುರ ಇರಲಿ, ಸರ್ವಜ್ಞ.

ಸಿರಿ ಬಂದರೆ ದಂಬ ಬೇಡ, ಬಡತನ ಬಂದರೆ ನೊಂದ ಬೇಡ,
ಕಾಲ ಬದಲಾಗುವುದು ಸರ್ವಜ್ಞ.

ಹಿರಿಯರ ಮಾತ ಕೇಳಬೇಕು, ಕಿರಿಯರ ಮನ ಗೆಲ್ಲಬೇಕು,
ದೊಡ್ಡವನಾಗ ಬೇಕು ಸರ್ವಜ್ಞ.`,
    meaning: {
      'ದಂಬ': { kn: 'ಅಹಂಕಾರ, ಗರ್ವ', en: 'Pride/arrogance', hi: 'अहंकार' },
      'ಸಿರಿ': { kn: 'ಸಂಪತ್ತು, ಐಶ್ವರ್ಯ', en: 'Wealth/prosperity', hi: 'सम्पत्ति' }
    },
    bhavartha: {
      kn: 'ಒಳ್ಳೆಯ ಮನಸ್ಸು ಮತ್ತು ಸತ್ಯ ನಡತೆ, ಐಶ್ವರ್ಯ ಬಂದಾಗ ಅಹಂಕಾರ ಬೇಡ, ಕಷ್ಟ ಬಂದಾಗ ಕುಸಿಯ ಬೇಡ ಎಂಬ ಸರಳ ಜೀವನ ಮೌಲ್ಯಗಳನ್ನು ಸರ್ವಜ್ಞ ಹೇಳುತ್ತಾನೆ.',
      en: 'Sarvajna teaches simple life values: have a good heart and truthful conduct, do not be arrogant when wealthy, and do not despair in hardship.',
      hi: 'सर्वज्ञ सरल जीवन मूल्य सिखाते हैं: अच्छा मन और सच्चा आचरण रखो, धन आने पर अहंकार मत करो, कठिनाई में निराश मत हो।'
    },
    summary: {
      kn: 'ಸರ್ಳ ಸತ್ಯ, ಒಳ್ಳೆಯ ನಡತೆ ಮತ್ತು ಮನೋಸ್ಥೈರ್ಯ.',
      en: 'Simple truth, good conduct, and mental strength.',
      hi: 'सरल सत्य, अच्छा आचरण और मानसिक दृढ़ता।'
    },
    favoriteQuote: 'ಒಳಗೆ ಒಳ್ಳೆಯ ಮನಸ್ಸಿರಲಿ, ಹೊರಗೆ ನಡತೆ ಒಳ್ಳೆಯದಿರಲಿ',
    category: 'Philosophy',
    mood: 'Reflective',
    duration: '2:50'
  },
  {
    id: 'kannadave-satya',
    title: { kn: 'ಕನ್ನಡವೇ ಸತ್ಯ', en: 'Kannada is Truth', hi: 'कन्नड़ ही सत्य है' },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಮಹಿಮೆಯನ್ನು ಕುವೆಂಪು ಅದ್ಭುತವಾಗಿ ವರ್ಣಿಸಿದ ಕವಿತೆ.',
      en: 'Kuvempu\'s poem wonderfully describes the glory of the Kannada language and culture.',
      hi: 'कुवेम्पू की कविता जो कन्नड़ भाषा और संस्कृति की महिमा का अद्भुत वर्णन करती है।'
    },
    content: `ಕನ್ನಡ ನಮ್ಮ ತಾಯ್ನುಡಿ, ಕನ್ನಡ ನಮ್ಮ ಉಸಿರು,
ಕನ್ನಡ ಮಣ್ಣ ಕಂಪಿನಲ್ಲಿ ನಮ್ಮ ಬದುಕ ಬಸಿರು.
ಸಾವಿರ ವರ್ಷ ಬಾಳಿದ ಭಾಷೆ ಕನ್ನಡ,
ಗಂಗ ರಾಷ್ಟ್ರಕೂಟ ಚಾಲುಕ್ಯ ನಮ್ಮ ನಾಡು.

ಬಸವ ಪಂಪ ರನ್ನ ಕುಮಾರವ್ಯಾಸ ಬಾಳಿದ,
ಕನ್ನಡ ಸಾಹಿತ್ಯ ಜಗಕೆ ತೋರಿ ತೋಳ ತೊಳೆದ.
ಕನ್ನಡವೇ ಸತ್ಯ, ಕನ್ನಡವೇ ಧರ್ಮ,
ಕನ್ನಡ ನಾಡ ಮಕ್ಕಳಿಗಿದೇ ಮಹಾ ಕರ್ಮ.`,
    meaning: {
      'ತಾಯ್ನುಡಿ': { kn: 'ತಾಯಿ ಭಾಷೆ', en: 'Mother tongue', hi: 'मातृभाषा' },
      'ಬಸಿರು': { kn: 'ಗರ್ಭ, ಮೂಲ', en: 'Womb/origin', hi: 'उद्गम' }
    },
    bhavartha: {
      kn: 'ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಕನ್ನಡ ನಾಡಿನ ಹಿರಿಮೆಯನ್ನು ಕುವೆಂಪು ಕಾವ್ಯ ರೂಪದಲ್ಲಿ ಹಾಡಿ ಹೊಗಳಿದ್ದಾರೆ. ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಶ್ರೀಮಂತ ಇತಿಹಾಸ ಮತ್ತು ಅದನ್ನು ಉಳಿಸಿ ಬೆಳೆಸಬೇಕಾದ ಜವಾಬ್ದಾರಿ ಇಲ್ಲಿದೆ.',
      en: 'Kuvempu has sung the glory of the Kannada language and land in poetic form. The poem speaks of the rich history of Kannada literature and the responsibility to preserve and nurture it.',
      hi: 'कुवेम्पू ने काव्य रूप में कन्नड़ भाषा और भूमि की महिमा का गुणगान किया है। कन्नड़ साहित्य के समृद्ध इतिहास और उसे संरक्षित करने की जिम्मेदारी की बात यहाँ है।'
    },
    summary: {
      kn: 'ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಹಿರಿಮೆ.',
      en: 'The glory of the Kannada language and culture.',
      hi: 'कन्नड़ भाषा और संस्कृति का गौरव।'
    },
    favoriteQuote: 'ಕನ್ನಡವೇ ಸತ್ಯ, ಕನ್ನಡವೇ ಧರ್ಮ',
    category: 'Culture',
    mood: 'Inspirational',
    duration: '3:25'
  },
  {
    id: 'male-barali',
    title: { kn: 'ಮಳೆ ಬಾರಲಿ', en: 'Let the Rain Come', hi: 'वर्षा आए' },
    poetId: 'bendre',
    poetName: 'ದ.ರಾ. ಬೇಂದ್ರೆ (D.R. Bendre)',
    introduction: {
      kn: 'ಶ್ರಾವಣ ಮಾಸದ ಮಳೆಯನ್ನು ಸ್ವಾಗತಿಸುವ ಬೇಂದ್ರೆ ಅವರ ಮಳೆಗಾಲದ ಸೌಂದರ್ಯ ಕವಿತೆ.',
      en: 'Bendre\'s poem welcoming the rains of the Shravana season, celebrating the beauty of monsoon.',
      hi: 'बेंद्रे की कविता श्रावण की वर्षा का स्वागत करती है और मानसून की सुंदरता का उत्सव मनाती है।'
    },
    content: `ಮಳೆ ಬಾರಲಿ, ಮಳೆ ಬಾರಲಿ, ಶ್ರಾವಣ ಮಳೆ ಬಾರಲಿ,
ಹಸಿರು ಹೊದ್ದ ಬೆಟ್ಟ ನಗಲಿ, ನದಿ ತುಂಬಿ ಹರಿಯಲಿ.
ಕಪ್ಪೆ ಕೂಗಲಿ, ನವಿಲು ಕುಣಿಯಲಿ, ರೈತ ಉಳಿಯಲಿ,
ಬಿತ್ತಿದ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯಲಿ, ಭೂಮಿ ತಣಿಯಲಿ.

ಮೋಡ ಕಪ್ಪಾಗಿ ಮುಸಿ ಮುಸಿ ನಗಲಿ,
ಮಿಂಚು ಹೊಳೆದು ಆಕಾಶ ಬೆಳಗಲಿ.
ಮಣ್ಣ ಸುವಾಸನೆ ಗಾಳಿ ಹೊತ್ತು ತರಲಿ,
ಶ್ರಾವಣ ಸಂಭ್ರಮ ಮನೆ ಮನೆ ತುಂಬಲಿ.`,
    meaning: {
      'ಶ್ರಾವಣ': { kn: 'ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರಿನ ಒಂದು ತಿಂಗಳು, ಮಳೆಗಾಲ', en: 'A month in the Kannada calendar, monsoon season', hi: 'कन्नड़ कैलेंडर का एक महीना, मानसून का मौसम' },
      'ಮೊಳಕೆ': { kn: 'ಬೀಜ ಮೊಳೆಯುವಿಕೆ', en: 'Germination/sprouting', hi: 'अंकुर' }
    },
    bhavartha: {
      kn: 'ಶ್ರಾವಣ ಮಳೆ ಬಂದಾಗ ಪ್ರಕೃತಿ ಸಂಭ್ರಮಿಸುತ್ತದೆ. ರೈತನ ಬದುಕಿಗೆ ಮಳೆ ಆಶೀರ್ವಾದ. ಮಳೆಯ ಆಗಮನ ಸಕಲ ಜೀವರಾಶಿಗೆ ಹೊಸ ಜೀವ ನೀಡುತ್ತದೆ ಎಂಬ ಸಂದೇಶ ಇಲ್ಲಿದೆ.',
      en: 'When the Shravana rains arrive, nature rejoices. Rain is a blessing for the farmer\'s life. The poem conveys that the arrival of rain gives new life to all living beings.',
      hi: 'जब श्रावण की वर्षा आती है तो प्रकृति आनंद मनाती है। किसान के जीवन के लिए बारिश आशीर्वाद है। कविता का संदेश है कि वर्षा का आगमन सभी जीवों को नया जीवन देता है।'
    },
    summary: {
      kn: 'ಶ್ರಾವಣ ಮಳೆಯ ಸ್ವಾಗತ ಮತ್ತು ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ.',
      en: 'Welcome of the Shravana rain and beauty of nature.',
      hi: 'श्रावण वर्षा का स्वागत और प्रकृति की सुंदरता।'
    },
    favoriteQuote: 'ಮಳೆ ಬಾರಲಿ, ಮಳೆ ಬಾರಲಿ, ಶ್ರಾವಣ ಮಳೆ ಬಾರಲಿ',
    category: 'Nature',
    mood: 'Calm',
    duration: '3:00'
  },
  {
    id: 'deepada-beligai',
    title: { kn: 'ದೀಪದ ಬೆಳಿಗೈ', en: 'Light of the Lamp', hi: 'दीपक का प्रकाश' },
    poetId: 'dvg',
    poetName: 'ಡಿ.ವಿ. ಗುಂಡಪ್ಪ (D.V. Gundappa)',
    introduction: {
      kn: 'ಡಿವಿಜಿ ಅವರ ಈ ಕವಿತೆ ಜ್ಞಾನ ಮತ್ತು ಮಾನಸಿಕ ಬೆಳಕಿನ ಬಗ್ಗೆ ಆಳವಾದ ಚಿಂತನೆ ಮಾಡುತ್ತದೆ.',
      en: 'This poem by DVG deeply contemplates knowledge and the inner light of the mind.',
      hi: 'डीवीजी की यह कविता ज्ञान और मन के आंतरिक प्रकाश पर गहराई से विचार करती है।'
    },
    content: `ದೀಪ ಹಚ್ಚು ಮನೆಯ ಒಳಗೆ, ದೀಪ ಹಚ್ಚು ಮನದ ಒಳಗೆ,
ಕತ್ತಲೆಯ ಓಡಿಸಲು ಜ್ಞಾನದ ದೀಪ ಹಚ್ಚು.
ಸಂಶಯದ ಕಾರ್ಗತ್ತಲಲ್ಲಿ ದಾರಿ ತೋರು ದೀಪ,
ಮೋಹ ಮತ್ಸರ ಓಡಿಸಿ ಶಾಂತಿಯ ಹಾಡು ಹೇಳು.

ಅಜ್ಞಾನ ಹೋಗಲಿ, ಸುಜ್ಞಾನ ಬರಲಿ,
ಹೃದಯ ದೇವಾಲಯದಲ್ಲಿ ಬೆಳಕ ತರಲಿ.
ಭಕ್ತಿಯ ದೀಪ ಬಾಳಿನ ರಾತ್ರಿ ಬೆಳಗಲಿ,
ಸದ್ಬುದ್ಧಿ ನಮ್ಮ ದಾರಿ ದೀಪವಾಗಲಿ.`,
    meaning: {
      'ಸಂಶಯ': { kn: 'ಸಂದೇಹ, ಅನಿಶ್ಚಿತತೆ', en: 'Doubt/uncertainty', hi: 'संशय/अनिश्चितता' },
      'ಅಜ್ಞಾನ': { kn: 'ಅರಿವಿಲ್ಲದಿರುವಿಕೆ', en: 'Ignorance', hi: 'अज्ञान' }
    },
    bhavartha: {
      kn: 'ಮನೆಯಲ್ಲಿ ದೀಪ ಹಚ್ಚುವಂತೆ ಮನದಲ್ಲೂ ಜ್ಞಾನದ ದೀಪ ಹಚ್ಚಬೇಕು. ಅಜ್ಞಾನ ಮತ್ತು ಸಂಶಯಗಳನ್ನು ಓಡಿಸಿ ಮನಸ್ಸನ್ನು ಶುದ್ಧಗೊಳಿಸಿ ಜ್ಞಾನ ಪ್ರಕಾಶ ಪಡೆಯಬೇಕು ಎಂದು ಡಿವಿಜಿ ಹೇಳುತ್ತಾರೆ.',
      en: 'Just as we light a lamp at home, we must also light the lamp of knowledge in the mind. DVG says we must drive away ignorance and doubt, purify the mind, and attain the light of wisdom.',
      hi: 'जैसे घर में दीप जलाते हैं, वैसे मन में ज्ञान का दीप भी जलाना चाहिए। डीवीजी कहते हैं कि अज्ञान और संशय को दूर करके मन को शुद्ध कर ज्ञान का प्रकाश पाना चाहिए।'
    },
    summary: {
      kn: 'ಜ್ಞಾನದ ದೀಪ ಮನದಲ್ಲಿ ಹಚ್ಚಿ ಅಜ್ಞಾನ ಓಡಿಸಿ.',
      en: 'Light the lamp of knowledge in the mind and drive away ignorance.',
      hi: 'मन में ज्ञान का दीप जलाओ और अज्ञान भगाओ।'
    },
    favoriteQuote: 'ದೀಪ ಹಚ್ಚು ಮನೆಯ ಒಳಗೆ, ದೀಪ ಹಚ್ಚು ಮನದ ಒಳಗೆ',
    category: 'Spiritual',
    mood: 'Reflective',
    duration: '3:35'
  },
  {
    id: 'hoovina-kempu',
    title: { kn: 'ಹೂವಿನ ಕೆಂಪು', en: 'The Redness of Flowers', hi: 'फूलों की लालिमा' },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ವಸಂತ ಕಾಲದ ಹೂ ಅರಳುವಿಕೆಯನ್ನು ಕುರಿತ ಒಂದು ಮನೋಹರ ಪ್ರಕೃತಿ ಕವಿತೆ.',
      en: 'A beautiful nature poem about flowers blooming in the spring season.',
      hi: 'वसंत ऋतु में फूलों के खिलने पर एक मनोहर प्रकृति कविता।'
    },
    content: `ಹೂವು ಅರಳಿತು ತೋಟದ ತುಂಬ, ಕೆಂಪು ಹಳದಿ ನೀಲ ರಂಗು,
ವಸಂತ ಬಂದ ಸಂಭ್ರಮದಲ್ಲಿ ಪ್ರಕೃತಿ ತುಂಬಿ ತಂಗು.
ತೊಟ್ಟಿಲಲ್ಲಿ ಮಲಗಿದ ಮಗುವಂತೆ ಮೊಗ್ಗು ಮಿನುಗು,
ಬೆಳ್ಳಿ ಮಂಜ ಸಿಂಪಡಿಸಿ ಬೆಳ್ಳಿ ಹೂವು ಬನ್ನಿ ಎನ್ನು.

ಭ್ರಮರ ಗುನುಗು, ಕೋಗಿಲ ಕೂಗು, ಹಸಿರ ಸದ್ದು ಎಲ್ಲ,
ವಸಂತ ರಾಗ ಪ್ರಕೃತಿ ಹಾಡುವ ಸಂಗೀತ ಇಲ್ಲ.
ಹೂವ ಹೊತ್ತ ಕೊಂಬೆ ನಡುಗು, ಗಾಳಿ ಮೃದು ತಾಗು,
ಜಗದ ಸೌಂದರ್ಯ ಇಲ್ಲಿ ತುಂಬಿ ತಂಪಾಗು.`,
    meaning: {
      'ಭ್ರಮರ': { kn: 'ದುಂಬಿ, ಜೇನು ನೊಣ', en: 'Bee/bumblebee', hi: 'भौंरा' },
      'ಮೊಗ್ಗು': { kn: 'ಅರಳದ ಹೂವು', en: 'Bud', hi: 'कली' }
    },
    bhavartha: {
      kn: 'ವಸಂತ ಕಾಲದಲ್ಲಿ ಹೂಗಳು ಅರಳಿ ಪ್ರಕೃತಿ ಆನಂದಿಸುತ್ತದೆ. ಬಣ್ಣ, ಕಂಪು, ದ್ವನಿ ಎಲ್ಲವೂ ಸೇರಿ ಒಂದು ಅನನ್ಯ ಸೌಂದರ್ಯ ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂಬ ಸಂದೇಶ ಈ ಕವಿತೆಯಲ್ಲಿದೆ.',
      en: 'In spring, flowers bloom and nature rejoices. The poem conveys that colours, fragrance, and sounds all come together to create a unique beauty.',
      hi: 'वसंत में फूल खिलते हैं और प्रकृति आनंद मनाती है। कविता का संदेश है कि रंग, सुगंध और ध्वनि मिलकर एक अनोखी सुंदरता रचते हैं।'
    },
    summary: {
      kn: 'ವಸಂತ ಕಾಲದ ಹೂ ಅರಳುವ ಸೌಂದರ್ಯ.',
      en: 'The beauty of flowers blooming in spring.',
      hi: 'वसंत में फूलों के खिलने की सुंदरता।'
    },
    favoriteQuote: 'ವಸಂತ ಬಂದ ಸಂಭ್ರಮದಲ್ಲಿ ಪ್ರಕೃತಿ ತುಂಬಿ ತಂಗು',
    category: 'Nature',
    mood: 'Peaceful',
    duration: '3:15'
  },
  {
    id: 'tayi-karulada',
    title: { kn: 'ತಾಯಿ ಕರುಳಾಡ', en: 'Mother\'s Heartstrings', hi: 'माँ का दिल' },
    poetId: 'kuvempu',
    poetName: 'ಕುವೆಂಪು (Kuvempu)',
    introduction: {
      kn: 'ತಾಯಿ ಪ್ರೇಮದ ಅಗಾಧತೆಯನ್ನು ಕುವೆಂಪು ಈ ಕವಿತೆಯಲ್ಲಿ ಮಾರ್ಮಿಕವಾಗಿ ಹಿಡಿದಿಟ್ಟಿದ್ದಾರೆ.',
      en: 'Kuvempu has poignantly captured the depth of a mother\'s love in this poem.',
      hi: 'कुवेम्पू ने इस कविता में माँ के प्रेम की गहराई को मार्मिक रूप से प्रस्तुत किया है।'
    },
    content: `ತಾಯಿ ಕರುಳ ಮಮತೆ ಸಾಗರಕ್ಕಿಂತ ಆಳ,
ಅವಳ ಕಣ್ಣ ಹನಿ ಮಳೆಗಿಂತ ಮಧುರ ನೀಳ.
ಹಸಿವ ತೀರಿಸಿ ತಾ ಹಸಿದ ತಾಯಿ,
ಮಗ ನಕ್ಕ ನಗೆ ನೋಡಿ ಸ್ವರ್ಗ ತೋಯಿ.

ಕಷ್ಟ ಬಂದಾಗ ಕೈ ಹಿಡಿದ ತಾಯಿ,
ಬಿದ್ದ ಮಗನ ಎತ್ತಿ ನಡೆಸಿದ ರಾಯಿ.
ತಾಯಿ ಎಂಬ ಶಬ್ದ ಲೋಕದ ತುಂಬ ಪ್ರೀತಿ,
ಆ ಪ್ರೀತಿಗೆ ಸಮ ಅಲ್ಲ ಯಾವ ನೀತಿ.`,
    meaning: {
      'ಕರುಳು': { kn: 'ಮಮತೆ, ಒಳ ಭಾವ', en: 'Heartstrings/love', hi: 'ममता/करुणा' },
      'ತೋಯಿ': { kn: 'ತೊಯ್ಯು, ಮುಳುಗು', en: 'Immerse/soak', hi: 'डूबना' }
    },
    bhavartha: {
      kn: 'ತಾಯಿಯ ಪ್ರೇಮ ಸಮುದ್ರಕ್ಕಿಂತ ಆಳವಾದದ್ದು. ತಾನು ಹಸಿದರೂ ಮಗನಿಗೆ ತಿನ್ನಿಸಿ, ಮಗ ನಕ್ಕರೆ ಸ್ವರ್ಗ ಕಂಡ ತಾಯಿಯ ನಿಸ್ವಾರ್ಥ ಪ್ರೇಮ ಜಗತ್ತಿನಲ್ಲಿ ಅಸದೃಶ ಎಂದು ಕುವೆಂಪು ಭಾವಿಸಿದ್ದಾರೆ.',
      en: 'A mother\'s love is deeper than the ocean. Kuvempu feels that a mother\'s selfless love – going hungry herself to feed her child, feeling heaven when her child smiles – is incomparable in the world.',
      hi: 'माँ का प्रेम समुद्र से भी गहरा है। कुवेम्पू मानते हैं कि माँ का निस्वार्थ प्रेम – खुद भूखी रहकर बच्चे को खिलाना, बच्चे की मुस्कान में स्वर्ग देखना – इस दुनिया में बेजोड़ है।'
    },
    summary: {
      kn: 'ತಾಯಿ ಪ್ರೇಮದ ಅಪ್ರತಿಮ ಆಳ ಮತ್ತು ನಿಸ್ವಾರ್ಥ.',
      en: 'The incomparable depth and selflessness of a mother\'s love.',
      hi: 'माँ के प्रेम की अतुलनीय गहराई और निस्वार्थता।'
    },
    favoriteQuote: 'ತಾಯಿ ಕರುಳ ಮಮತೆ ಸಾಗರಕ್ಕಿಂತ ಆಳ',
    category: 'Love',
    mood: 'Calm',
    duration: '3:20'
  },
  {
    id: 'janapada-geete',
    title: { kn: 'ಜಾನಪದ ಗೀತೆ', en: 'Folk Song', hi: 'लोकगीत' },
    poetId: 'masti',
    poetName: 'ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್ (Masti Venkatesha Iyengar)',
    introduction: {
      kn: 'ಕರ್ನಾಟಕದ ಸಮೃದ್ಧ ಜಾನಪದ ಪರಂಪರೆಯನ್ನು ಆಚರಿಸುವ ಒಂದು ಮನೋಹರ ಕವಿತೆ.',
      en: 'A beautiful poem celebrating the rich folk tradition of Karnataka.',
      hi: 'कर्नाटक की समृद्ध लोक परंपरा को मनाने वाली एक सुंदर कविता।'
    },
    content: `ಜಾನಪದ ಹಾಡ ಹಾಡಿ ನಮ್ಮ ನಾಡ ತಿಳಿ,
ಗ್ರಾಮದ ಜನರ ಜೀವನ ಕಥೆ ಅರಿ.
ಹೊಲದ ಹಾಡು, ಗಿರಿಯ ಗೀತೆ, ನದಿಯ ರಾಗ,
ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ಎಂದೂ ಮಾಗ.

ಡೊಳ್ಳಿನ ನಾದ ತಾಳಕ್ಕೆ ಸೇರಿ,
ಜನರ ಮನ ಆನಂದ ಮಾಡ ತೇರಿ.
ತಲೆ ತಲೆಯಿಂದ ಬಂದ ಹಾಡ ಕಾಪಾಡಿ,
ನಮ್ಮ ನಾಡ ಮಣ್ಣಿನ ಮಹಿಮೆ ಸಾಧಿ.`,
    meaning: {
      'ಜಾನಪದ': { kn: 'ಜನ ಸಾಮಾನ್ಯರ ಸಾಹಿತ್ಯ-ಸಂಸ್ಕೃತಿ', en: 'Folk literature and culture', hi: 'लोक साहित्य और संस्कृति' },
      'ಡೊಳ್ಳು': { kn: 'ಕರ್ನಾಟಕದ ಒಂದು ಜಾನಪದ ವಾದ್ಯ', en: 'A traditional Karnataka drum', hi: 'कर्नाटक का एक पारंपरिक ढोल' }
    },
    bhavartha: {
      kn: 'ಜಾನಪದ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಂಗೀತದ ಮೂಲಕ ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ಜೀವನ ಮತ್ತು ಸಂಸ್ಕೃತಿ ಪ್ರತಿಫಲಿಸುತ್ತದೆ. ಈ ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿ ಮುಂದಿನ ತಲೆಮಾರಿಗೆ ದಾಟಿಸಬೇಕೆಂಬ ಕರೆ ಕವಿತೆಯಲ್ಲಿದೆ.',
      en: 'Folk literature and music reflect the rural life and culture of Karnataka. The poem calls for preserving this tradition and passing it on to future generations.',
      hi: 'लोक साहित्य और संगीत कर्नाटक के ग्रामीण जीवन और संस्कृति को दर्शाते हैं। कविता में इस परंपरा को संरक्षित करके भावी पीढ़ियों को सौंपने का आह्वान है।'
    },
    summary: {
      kn: 'ಕರ್ನಾಟಕದ ಜಾನಪದ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಅದನ್ನು ಉಳಿಸುವ ಕರೆ.',
      en: 'Karnataka\'s folk culture and a call to preserve it.',
      hi: 'कर्नाटक की लोक संस्कृति और उसे संरक्षित करने का आह्वान।'
    },
    favoriteQuote: 'ತಲೆ ತಲೆಯಿಂದ ಬಂದ ಹಾಡ ಕಾಪಾಡಿ',
    category: 'Culture',
    mood: 'Energetic',
    duration: '3:10'
  },
  {
    id: 'veeragase-nritya',
    title: { kn: 'ವೀರಗಾಸೆ ನೃತ್ಯ', en: 'Veeragase Dance', hi: 'वीरगासे नृत्य' },
    poetId: 'p-lankesh',
    poetName: 'ಪಿ. ಲಂಕೇಶ್ (P. Lankesh)',
    introduction: {
      kn: 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಜಾನಪದ ಕಲೆಯಾದ ವೀರಗಾಸೆ ನೃತ್ಯದ ಮಹಿಮೆ ಹೇಳುವ ಲಂಕೇಶ್ ಅವರ ಕವಿತೆ.',
      en: 'Lankesh\'s poem describing the grandeur of Veeragase, one of Karnataka\'s major folk art forms.',
      hi: 'लंकेश की कविता कर्नाटक की प्रमुख लोक कला वीरगासे नृत्य की महिमा का वर्णन करती है।'
    },
    content: `ವೀರಗಾಸೆ ಕುಣಿಯುತಿದೆ ಬೀದಿ ತುಂಬ,
ಡೊಳ್ಳಿನ ನಾದ ಆಕಾಶ ತುಂಬ.
ಕೆಂಪು ಉಡುಪು ತೊಟ್ಟ ವೀರ ಧಾವಿಸ,
ಶಿವನ ಭಕ್ತಿ ಮೈ ತುಂಬಿ ಕೇಕೆ ಹಾಕಿಸ.

ತಲೆ ಮೇಲೆ ಕೊಡ ಹೊತ್ತು ಕುಣಿಯ,
ಹಿಂಡಿದ ಮನಸ್ಸ ಭಕ್ತಿ ರಸ ಬಿನ್ನಯ.
ಜಾನಪದ ಕಲೆ ಕರ್ನಾಟಕದ ಪ್ರಾಣ,
ವೀರಗಾಸೆ ನಮ್ಮ ನಾಡಿನ ಅಭಿಮಾನ.`,
    meaning: {
      'ವೀರಗಾಸೆ': { kn: 'ಕರ್ನಾಟಕದ ಒಂದು ಜಾನಪದ ನೃತ್ಯ ಕಲೆ', en: 'A folk dance art form of Karnataka', hi: 'कर्नाटक की एक लोक नृत्य कला' },
      'ಕೇಕೆ': { kn: 'ಜೋರಾದ ಉದ್ಗಾರ, ಆರ್ಭಟ', en: 'Loud exclamation, battle cry', hi: 'जोरदार उद्गार, युद्धघोष' }
    },
    bhavartha: {
      kn: 'ವೀರಗಾಸೆ ಕರ್ನಾಟಕದ ಜಾನಪದ ಕಲೆಗಳಲ್ಲಿ ಒಂದು ಅನನ್ಯ ಕಲೆ. ಶಿವ ಭಕ್ತಿ ಮತ್ತು ವೀರ ಭಾವನೆಯನ್ನು ಒಂದಾಗಿ ವ್ಯಕ್ತಪಡಿಸುವ ಈ ನೃತ್ಯ ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಸಂಕೇತ.',
      en: 'Veeragase is a unique art among Karnataka\'s folk arts. This dance form, which expresses Shiva devotion and warrior spirit together, is a symbol of our cultural heritage.',
      hi: 'वीरगासे कर्नाटक की लोक कलाओं में एक अनोखी कला है। शिव भक्ति और वीर भाव को एक साथ व्यक्त करने वाला यह नृत्य हमारी सांस्कृतिक विरासत का प्रतीक है।'
    },
    summary: {
      kn: 'ಕರ್ನಾಟಕದ ವೀರಗಾಸೆ ಜಾನಪದ ಕಲೆಯ ಹಿರಿಮೆ.',
      en: 'The grandeur of Karnataka\'s Veeragase folk art form.',
      hi: 'कर्नाटक की वीरगासे लोक कला का गौरव।'
    },
    favoriteQuote: 'ಜಾನಪದ ಕಲೆ ಕರ್ನಾಟಕದ ಪ್ರಾಣ',
    category: 'Culture',
    mood: 'Energetic',
    duration: '3:00'
  },
];
