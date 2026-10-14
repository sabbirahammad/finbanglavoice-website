import fallbackImage from '../assets/t.webp';
import { COURSE_PRICE, BEGINNER_ENROLLMENT_URL } from './courses.js';

// 1. YKI Exam Preparation Course Syllabus
export const YKI_SYLLABUS = {
  id: '10',
  slug: 'course-yki',
  title: 'YKI পরীক্ষা প্রস্তুতি কোর্স',
  englishTitle: 'YKI Finnish Language Exam Preparation Course',
  level: 'Intermediate / YKI Exam Prep (Level B1 – B2)',
  tagline:
    'এই কোর্সে YKI পরীক্ষার চারটি অংশ—Reading, Writing, Speaking ও Listening—এর লক্ষ্যভিত্তিক অনুশীলন করানো হয়। পাশাপাশি এসব কাজে প্রয়োজনীয় ব্যাকরণের নিয়ম সহজভাবে ব্যাখ্যা করা হয়।',
  duration: '২ মাস',
  schedule: '১৬টি অনলাইন ক্লাস, প্রতি সপ্তাহে ২টি',
  fee: '৬০ € Total',
  enrollUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdrclrGbU5eXeChTkKD-wpjP2dbQwHjv6rt5idoP7_SjDamjg/viewform?usp=publish-editor',
  instructor: {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor, Senior Researcher & Finnish Education Ambassador',
    bio: 'দীর্ঘদিন ধরে ফিনল্যান্ডে বসবাস ও গবেষণার অভিজ্ঞতা। গত তিন বছরেরও বেশি সময় ধরে বাংলায় অনলাইনে ফিনিশ ভাষা ও YKI প্রস্তুতি কোর্স পরিচালনা করছেন।',
    image: fallbackImage,
  },
  features: [
    'কোর্সের মেয়াদ: ২ মাস | মোট ১৬টি অনলাইন ক্লাস, প্রতি সপ্তাহে ২টি',
    'YKI পরীক্ষার চারটি অংশ: Reading, Writing, Speaking ও Listening লক্ষ্যভিত্তিক প্রস্তুতি',
    'Speaking ও Writing-এর উত্তরে শিক্ষকের ব্যক্তিগত ও গঠনমূলক ফিডব্যাক',
    'পরীক্ষার আদলে মডেল প্রশ্ন ও সময় ব্যবস্থাপনার কৌশল অনুশীলন',
    'প্রয়োজনীয় ব্যাকরণ, শব্দভাণ্ডার ও বাস্তবমুখী বাক্যাংশের সহজ সমাধান',
    'প্রতিটি ক্লাসের ভিডিও রেকর্ডিং ও লেকচার নোটস ২৪/৭ রিভিশনের সুবিধা',
  ],
  modules: [
    {
      title: '১. YKI পরীক্ষার কাঠামো ও প্রস্তুতি',
      topics: [
        'পরীক্ষার চারটি অংশের পরিচিতি ও প্রশ্নের ধরন।',
        'প্রশ্নের নির্দেশনা বুঝে যথাযথ উত্তর দেওয়ার অনুশীলন।',
        'মূল্যায়নের ধারণা ও সময় ব্যবস্থাপনার কৌশল।',
      ],
    },
    {
      title: '২. Reading — পড়ে বোঝার অনুশীলন',
      topics: [
        'বিভিন্ন ধরনের লেখা, বার্তা, বিজ্ঞপ্তি ও নির্দেশনা পড়া।',
        'মূল বক্তব্য ও প্রয়োজনীয় তথ্য শনাক্ত করা।',
        'প্রশ্ন অনুযায়ী উত্তর খুঁজে বের করা এবং প্রসঙ্গ থেকে শব্দের অর্থ বোঝা।',
      ],
    },
    {
      title: '৩. Writing — লেখার অনুশীলন',
      topics: [
        'বার্তা, ইমেইল, অনুরোধ, অভিযোগ ও মতামতমূলক লেখা।',
        'নিজের অভিজ্ঞতা, মতামত ও যুক্তি স্পষ্টভাবে প্রকাশ করা।',
        'প্রশ্নের সব নির্দেশনা অনুসরণ করে সুসংগঠিত উত্তর লেখা।',
        'প্রয়োজনীয় শব্দ, বাক্যাংশ ও সংযোগকারী শব্দের ব্যবহার।',
      ],
    },
    {
      title: '৪. Speaking — বলার অনুশীলন',
      topics: [
        'দৈনন্দিন পরিস্থিতিতে কথোপকথন ও প্রশ্নের উত্তর দেওয়া।',
        'নিজের অভিজ্ঞতা বর্ণনা এবং মতামত যুক্তিসহ প্রকাশ করা।',
        'পরিস্থিতি অনুযায়ী অনুরোধ, পরামর্শ ও অভিযোগ জানানো।',
        'নির্ধারিত সময়ে স্পষ্ট ও ধারাবাহিকভাবে উত্তর দেওয়ার অনুশীলন।',
      ],
    },
    {
      title: '৫. Listening — শুনে বোঝার অনুশীলন',
      topics: [
        'কথোপকথন, ঘোষণা, নির্দেশনা ও বিভিন্ন অডিও শোনা।',
        'মূল বক্তব্য, প্রয়োজনীয় তথ্য ও বিস্তারিত বিষয় বোঝা।',
        'শুনে প্রশ্নের উত্তর দেওয়ার কৌশল ও নিয়মিত অনুশীলন।',
      ],
    },
    {
      title: '৬. প্রয়োজনীয় ব্যাকরণ, শব্দভান্ডার ও বাক্যগঠন',
      topics: [
        'অনুশীলনে প্রয়োজনীয় ব্যাকরণের নিয়ম পরিষ্কার করা।',
        'কাল, বিভক্তি, ক্রিয়ার রূপ, নেতিবাচক ও প্রশ্নবোধক বাক্যের ব্যবহার।',
        'সঠিক বাক্যগঠন ও বাক্যের মধ্যে সংযোগ তৈরি করা।',
        'বহুল ব্যবহৃত শব্দ ও বাক্যাংশের প্রয়োগ এবং সাধারণ ভুল সংশোধন।',
      ],
    },
    {
      title: '৭. মডেল অনুশীলন ও ফিডব্যাক',
      topics: [
        'পরীক্ষার আদলে চারটি অংশের অনুশীলন।',
        'Speaking ও Writing-এর উত্তরে ফিডব্যাক।',
        'ব্যক্তিগত দুর্বলতা চিহ্নিত করে উন্নতির পরামর্শ।',
        'পরীক্ষার আগে প্রয়োজনীয় পুনরালোচনা ও প্রস্তুতির নির্দেশনা।',
      ],
    },
  ],
  summaryInfo: {
    durationText: '২ মাস',
    classCount: '১৬টি অনলাইন ক্লাস, প্রতি সপ্তাহে ২টি',
    note: 'ক্লাসের দিন ও সময় অংশগ্রহণকারী শিক্ষার্থীদের মতামত ও সুবিধা বিবেচনা করে নির্ধারণ করা হবে।',
  },
};

// 2. Everyday Finnish Conversation Practice Course Syllabus
export const CONVERSATION_SYLLABUS = {
  id: '12',
  slug: 'course-everyday-finnish',
  title: 'দৈনন্দিন ফিনিশ কথোপকথন অনুশীলন / Everyday Finnish Conversation Practice course',
  englishTitle: 'Everyday Finnish Conversation Practice Course',
  level: 'Spoken Finnish (All Levels)',
  tagline:
    '৮টি অনলাইন সেশনে বাস্তব জীবন, কেনাকাটা, যাতায়াত, স্বাস্থ্য, বাসস্থান, কাজ ও পড়াশোনা নিয়ে নিয়মিত কথা বলার অভ্যাস ও আত্মবিশ্বাস বাড়ানোর বিশেষ কোর্স।',
  duration: '২ মাস',
  schedule: 'মোট ক্লাস: ৮টি, প্রতি সপ্তাহে ১টি',
  fee: '৬০ ইউরো (মাসে ৩০ ইউরো)',
  enrollUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScSClOiUyLEU7Zw4GDEIJBDdaI8ddMorlv1E_dH4Qm_XD4EYQ/viewform?usp=publish-editor',
  instructor: {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor & Senior Researcher (16+ years in Finland)',
    bio: 'Dr SM Shafiqul Alam has lived in Finland for approximately 16 years. He has taught Finnish in Bangla for over three years, helping learners build practical communication skills and confidence.',
    image: fallbackImage,
  },
  features: [
    'জোড়ায় ও ছোট দলে বাস্তবভিত্তিক লাইভ কথোপকথন অনুশীলন',
    'বাস্তব পরিস্থিতি অনুযায়ী বিভিন্ন ভূমিকায় কথা বলা (Role-play Drills)',
    'প্রয়োজনীয় শব্দ, প্রশ্ন ও ব্যবহারিক বাক্যাংশের প্রয়োগ',
    'ছোট কথোপকথন শুনে তাৎক্ষণিক উত্তর দেওয়ার ড্রিল',
    'উচ্চারণ ও প্রয়োজনীয় ব্যাকরণের সহজ ব্যাখ্যা ও সাধারণ ভুল সংশোধন',
    'প্রতি সপ্তাহে ছোট Speaking টাস্ক ও ভয়েস রেকর্ডিং ফিডব্যাক',
  ],
  modules: [
    {
      title: 'ক্লাস ১: পরিচয় ও কথোপকথন শুরু',
      topics: [
        'নিজের পরিচয়, পরিবার ও পেশা সম্পর্কে বলা।',
        'অন্যের পরিচয় জানতে প্রশ্ন করা এবং সহজ কথোপকথন শুরু করা।',
        'প্রাথমিক অনুশীলনের মাধ্যমে নিজের Speaking-এর প্রয়োজন চিহ্নিত করা।',
      ],
    },
    {
      title: 'ক্লাস ২: দৈনন্দিন জীবন ও সামাজিক যোগাযোগ',
      topics: [
        'দৈনন্দিন রুটিন, শখ ও পছন্দ নিয়ে কথা বলা।',
        'কাউকে আমন্ত্রণ জানানো, আমন্ত্রণ গ্রহণ বা বিনয়ের সঙ্গে প্রত্যাখ্যান করা এবং দেখা করার সময় ঠিক করা।',
      ],
    },
    {
      title: 'ক্লাস ৩: দোকান ও রেস্তোরাঁয় কথোপকথন',
      topics: [
        'পণ্য কোথায় আছে জানতে চাওয়া, দাম জিজ্ঞেস করা এবং খাবার অর্ডার দেওয়া।',
        'নিজের প্রয়োজন বোঝানো ও পণ্য বা সেবা নিয়ে সহজ সমস্যা জানানো।',
      ],
    },
    {
      title: 'ক্লাস ৪: যাতায়াত ও পথনির্দেশ',
      topics: [
        'রাস্তা জিজ্ঞেস করা ও সহজভাবে পথ দেখানো।',
        'বাস–ট্রেনের সময়, টিকিট ও গন্তব্য সম্পর্কে তথ্য জানতে চাওয়া।',
      ],
    },
    {
      title: 'ক্লাস ৫: স্বাস্থ্য, অ্যাপয়েন্টমেন্ট ও ফোনে কথা বলা',
      topics: [
        'সাধারণ অসুস্থতা বা উপসর্গ ব্যাখ্যা করা।',
        'অ্যাপয়েন্টমেন্ট নেওয়া, পরিবর্তন বা বাতিল করা এবং ফোনে প্রয়োজনীয় তথ্য দেওয়া ও জানতে চাওয়া।',
      ],
    },
    {
      title: 'ক্লাস ৬: বাসস্থান ও প্রয়োজনীয় সেবা',
      topics: [
        'বাসা ও প্রতিবেশী সম্পর্কে কথা বলা।',
        'বাসার সমস্যা জানানো, মেরামত বা সাহায্য চাওয়া এবং সেবাদাতার সঙ্গে সহজ কথোপকথন করা।',
      ],
    },
    {
      title: 'ক্লাস ৭: কাজ ও পড়াশোনার কথোপকথন',
      topics: [
        'নিজের কাজ, পড়াশোনা ও অভিজ্ঞতা সম্পর্কে বলা।',
        'সাহায্য চাওয়া, নির্দেশনা না বুঝলে ব্যাখ্যা করতে বলা এবং সময়সূচি নিয়ে আলোচনা করা।',
      ],
    },
    {
      title: 'ক্লাস ৮: সমন্বিত অনুশীলন ও ফিডব্যাক',
      topics: [
        'বিভিন্ন দৈনন্দিন পরিস্থিতিতে কথোপকথন করা।',
        'নিজের মতামত, পছন্দের কারণ ও ভবিষ্যৎ পরিকল্পনা বলা।',
        'শেষ Speaking অনুশীলনের মাধ্যমে অগ্রগতি পর্যালোচনা এবং পরবর্তী অনুশীলনের পরামর্শ নেওয়া।',
      ],
    },
  ],
  practiceDetails: {
    inClass: [
      'জোড়ায় ও ছোট দলে কথোপকথন।',
      'বাস্তব পরিস্থিতি অনুযায়ী বিভিন্ন ভূমিকায় কথা বলা।',
      'প্রয়োজনীয় শব্দ, প্রশ্ন ও বাক্যাংশ ব্যবহার।',
      'ছোট কথোপকথন শুনে উত্তর দেওয়া।',
      'উচ্চারণ ও প্রয়োজনীয় ব্যাকরণের সহজ ব্যাখ্যা।',
      'সাধারণ ভুল সংশোধন ও শিক্ষকের ফিডব্যাক।',
    ],
    outsideClass:
      'প্রতি সপ্তাহে ছোট Speaking কাজ দেওয়া হবে। এর মধ্যে থাকবে ভয়েস রেকর্ডিং, শেখা বাক্যাংশ দিয়ে কথোপকথন তৈরি এবং সুযোগ অনুযায়ী বাস্তব জীবনে ফিনিশ ব্যবহার। প্রতিদিন ১০–১৫ মিনিট অনুশীলন করার পরামর্শ দেওয়া হবে।',
    objective:
      'পরিচিত দৈনন্দিন পরিস্থিতিতে সহজ কথোপকথন শুরু ও চালিয়ে যাওয়া, প্রশ্ন করা, উত্তর দেওয়া এবং নিজের প্রয়োজন প্রকাশের আত্মবিশ্বাস বাড়ানো। না বুঝলে আবার বলতে, ধীরে বলতে বা ব্যাখ্যা করতে অনুরোধ করার অনুশীলনও থাকবে।',
    note: 'শিক্ষার্থীদের প্রয়োজন ও অগ্রগতি অনুযায়ী অনুশীলনের বিষয় ও গুরুত্ব সামঞ্জস্য করা হবে।',
  },
};

// 3. Beginner Finnish Language Course (A0–A2)
export const BEGINNER_A1_SYLLABUS = {
  id: '3',
  slug: 'course-finnish-a1',
  title: 'বাংলায় ফিনিশ ভাষা শিক্ষা (A0–A2) / Practical Finnish Language Course',
  englishTitle: 'Practical Finnish Language Course in Bangla (Level 0 – A1/A2)',
  level: 'Beginner (Level 0 – A2)',
  tagline:
    'বাংলাভাষী শিক্ষার্থীদের দ্রুত ও কার্যকরভাবে ফিনিশ ভাষার মৌলিক ব্যবহার ও বাস্তব যোগাযোগ শেখানোর বিশেষ কোর্স।',
  duration: '৩ মাস (24 Live Zoom Classes)',
  schedule: 'প্রতি সপ্তাহে ২টি ক্লাস (শুক্র/শনিবার) • রাত ৮:০০ টা',
  fee: COURSE_PRICE.display,
  enrollUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScngT1MTcKR8B5106ZJ6a4Fe_D7XuGMfbWOHJPD2-K--MsaQg/viewform?usp=header',
  instructor: {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor, Senior Researcher & Finnish Education Ambassador',
    bio: 'Over 7 years of Finnish language teaching experience and 20+ years of academic research and policy advisory.',
    image: fallbackImage,
  },
  features: [
    '২৪টি ইন্টারঅ্যাক্টিভ লাইভ জুম সেশন ও প্রশ্নোত্তরের সুযোগ',
    'ক্লাসের ভিডিও রেকর্ডিং ২৪/৭ অ্যাক্সেসের সুবিধা',
    'পূর্ণাঙ্গ লেকচার নোটস, ওয়ার্কশিট ও ভোকাবুলারি প্যাক (PDF)',
    'সাপ্তাহিক হোমওয়ার্ক অ্যাসাইনমেন্ট এবং ব্যক্তিগত ফিডব্যাক',
    'দৈনন্দিন অনুশীলনের জন্য নিবেদিত হোয়াটসঅ্যাপ কমিউনিটি গ্রুপ',
    'কোর্স সফলভাবে সমাপ্তিতে FinBangla Voice সার্টিফিকেট',
  ],
  modules: [
    {
      title: 'Module 1: Alphabets, Phonetics & Vowel Harmony (বর্ণমালা ও উচ্চারণ বিধি)',
      topics: [
        'The Finnish alphabet and special vowels (ä, ö, y)',
        'Vowel harmony (Vokaalisointu) principles in Bangla',
        'Double vowels & double consonants (Pitkät vokaalit ja konsonantit)',
        'Basic greetings & everyday courtesy phrases (Hei, Tervetuloa, Kiitos)',
      ],
    },
    {
      title: 'Module 2: Daily Life Vocabulary & Numbers (দৈনন্দিন শব্দভাণ্ডার ও সংখ্যা)',
      topics: [
        'Cardinal and ordinal numbers, counting, and telling time',
        'Days of the week, months, seasons, and Finnish weather terms',
        'Shopping at markets, grocery stores, and asking for prices (Paljonko maksaa?)',
        'Food, dining, and restaurant ordering expressions',
      ],
    },
    {
      title: 'Module 3: Core Grammar & Verb Conjugation (ব্যাকরণ ও ক্রিয়াপদ)',
      topics: [
        'The 6 Finnish verb types (Verbityypit) with clear Bangla breakdown',
        'Consonant gradation (K-P-T vaihtelu) simplified rules',
        'Personal pronouns and present tense sentence construction (Minä puhun...)',
        'Forming positive and negative sentences in daily speech',
      ],
    },
    {
      title: 'Module 4: Essential Everyday Dialogues (বাস্তব জীবনের কথোপকথন)',
      topics: [
        'Introducing yourself, family, profession, and hometown',
        'Public transport, asking for directions, and finding locations in Finnish cities',
        'Doctor visits, pharmacy conversations, and health terms',
        'Basic administrative communication (Posti, Kela, City services)',
      ],
    },
  ],
};

// 4. Intermediate Finnish & Workplace Spoken (Level A1 – A2)
export const WORKPLACE_A2_SYLLABUS = {
  id: 'course-finnish-a2',
  slug: 'course-finnish-a2',
  title: 'Intermediate Finnish & Workplace Spoken (Level A1 – A2)',
  englishTitle: 'Intermediate Finnish & Workplace Spoken (Level A1 – A2)',
  level: 'Intermediate (Level A1 – A2)',
  tagline:
    'Elevate your Finnish for employment interviews, public authority interactions, and YKI test foundation.',
  duration: '3 Months (24 Live Zoom Classes)',
  schedule: 'Monday & Wednesday • 08:30 PM (Helsinki Time)',
  fee: COURSE_PRICE.display,
  enrollUrl: `https://wa.me/358409369708?text=${encodeURIComponent(
    'Hello Dr. SM Shafiqul Alam, I would like to enroll in Intermediate Finnish & Workplace Spoken.'
  )}`,
  instructor: {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor, Senior Researcher & Finnish Education Ambassador',
    bio: 'Specialist in immigrant linguistic integration and career settlement in Finland.',
    image: fallbackImage,
  },
  features: [
    '24 In-depth Zoom sessions focused on active speaking',
    'Workplace dialogue role-plays & realistic simulations',
    'Advanced grammar PDF drills & audio exercise collections',
    'Mock YKI test practice modules and assessment',
    '1-on-1 feedback on Finnish job applications',
  ],
  modules: [
    {
      title: 'Module 1: Workplace & Professional Communication (কর্মক্ষেত্রের ভাষা)',
      topics: [
        'CV writing and job interview preparation in Finnish',
        'Workplace instructions, colleague conversations, and email etiquette',
        'Industry-specific vocabulary (Services, Tech, Healthcare, Logistics)',
      ],
    },
    {
      title: 'Module 2: Interacting with Official Authorities (সরকারি অফিসের যোগাযোগ)',
      topics: [
        'Navigating TE-palvelut employment plans and Kela benefit forms',
        'Police (Poliisi) and Migri residence permit inquiries',
        'Apartment rental contracts, housing company (Isännöitsijä) communication',
      ],
    },
    {
      title: 'Module 3: Advanced Grammar & Complex Cases (উন্নত ব্যাকরণ)',
      topics: [
        'Locative cases (Missä, Mistä, Mihin - Sisa- ja Ulkopaikallissijat)',
        'Partitive case (Partitiivi) usage in objects and quantities',
        'Past tense (Imperfekti) and perfect tense storytelling',
      ],
    },
    {
      title: 'Module 4: Foundation for National YKI Language Exam (YKI পরীক্ষার প্রস্তুতি)',
      topics: [
        'Reading comprehension and fast skimming strategies',
        'Writing formal letters, complaints, and opinion paragraphs',
        'Listening drills with diverse Finnish regional accents (Puhekieli)',
      ],
    },
  ],
};

// 5. Higher Education Masterclass
export const STUDY_FINLAND_SYLLABUS = {
  id: 'course-study-finland',
  slug: 'course-study-finland',
  title: 'Higher Education in Finland: University & AMK Admission Masterclass',
  englishTitle: 'Higher Education in Finland: Admission Masterclass',
  level: 'All Educational Levels',
  tagline:
    'Your complete roadmap to studying in Finland with scholarship acquisition and residence permit guidance.',
  duration: '4 Weeks (8 Comprehensive Masterclasses + 1-on-1 Consultation)',
  schedule: 'Sunday Masterclasses • 07:30 PM (Helsinki Time)',
  fee: COURSE_PRICE.display,
  enrollUrl: `https://wa.me/358409369708?text=${encodeURIComponent(
    'Hello Dr. SM Shafiqul Alam, I would like to enroll in Higher Education in Finland Masterclass.'
  )}`,
  instructor: {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor, Senior Researcher & Finnish Education Ambassador',
    bio: 'Official ambassador of Finnish education agencies. Has guided hundreds of students to Finnish university admissions.',
    image: fallbackImage,
  },
  features: [
    '8 Comprehensive live masterclasses with slide decks',
    'Personal 1-on-1 SOP & CV review session with Dr. SM Shafiqul Alam',
    'Complete checklist for university application & visa paperwork',
    'Direct connection with current Bangladeshi students in Finnish universities',
  ],
  modules: [
    {
      title: 'Module 1: Finnish Higher Education Ecosystem Overview',
      topics: [
        'Academic Universities vs Applied Sciences (AMK) vs Vocational (Ammattiopisto)',
        'Degree programs taught in English: Bachelors & Masters',
        'Eligibility requirements, grade conversions, and language waivers',
      ],
    },
    {
      title: 'Module 2: Studyinfo.fi Joint Application Masterclass',
      topics: [
        'Navigating Opintopolku / Studyinfo.fi step-by-step',
        'Understanding Entrance Examinations (International UAS Exam)',
        'Crafting high-impact Statement of Purpose (SOP) & Motivation Letters',
      ],
    },
    {
      title: 'Module 3: Tuition Fee Scholarships & Financial Planning',
      topics: [
        'Securing 50% - 100% tuition waivers and Finland Scholarships',
        'Proof of funds calculation and bank documentation rules',
        'Part-time work opportunities, student housing (HOAS/TOAS), and living costs',
      ],
    },
    {
      title: 'Module 4: Student Residence Permit (D-Visa) & Settlement',
      topics: [
        'EnterFinland online application guide & VFS Global appointment prep',
        'Health insurance requirements and biometric submission',
        'Family reunification visas for spouse and children',
        'Post-study 2-year job search visa & PR path',
      ],
    },
  ],
};

// Map of all syllabuses indexed by ID and alias keys
export const ALL_SYLLABUSES = {
  // YKI
  '10': YKI_SYLLABUS,
  'course-yki': YKI_SYLLABUS,
  'yki': YKI_SYLLABUS,

  // Conversation
  '12': CONVERSATION_SYLLABUS,
  'course-everyday-finnish': CONVERSATION_SYLLABUS,
  'course-conversation': CONVERSATION_SYLLABUS,
  'conversation': CONVERSATION_SYLLABUS,

  // Beginner A0-A2 / A1
  '3': BEGINNER_A1_SYLLABUS,
  'course-finnish-a1': BEGINNER_A1_SYLLABUS,

  // Intermediate A2
  'course-finnish-a2': WORKPLACE_A2_SYLLABUS,

  // Higher Education
  'course-study-finland': STUDY_FINLAND_SYLLABUS,
};

/**
 * Intelligent syllabus resolver function.
 * Matches by ID, slug, or content inspection of course name/title.
 */
export const getCourseSyllabus = (courseOrId) => {
  if (!courseOrId) return BEGINNER_A1_SYLLABUS;

  // If a string or number was passed directly
  if (typeof courseOrId === 'string' || typeof courseOrId === 'number') {
    const key = String(courseOrId).trim().toLowerCase();
    if (ALL_SYLLABUSES[key]) {
      return ALL_SYLLABUSES[key];
    }
    // Pattern check on key
    if (/yki/i.test(key)) return YKI_SYLLABUS;
    if (/everyday|conversation|কথোপকথন/i.test(key)) return CONVERSATION_SYLLABUS;
    if (/admission|university|study/i.test(key)) return STUDY_FINLAND_SYLLABUS;
    if (/a2|workplace|intermediate/i.test(key)) return WORKPLACE_A2_SYLLABUS;
    if (/a1|a0|beginner|মৌলিক/i.test(key)) return BEGINNER_A1_SYLLABUS;
    return BEGINNER_A1_SYLLABUS;
  }

  // If an object was passed
  const id = String(courseOrId.id || courseOrId.course_id || '').trim().toLowerCase();
  if (id && ALL_SYLLABUSES[id]) {
    return ALL_SYLLABUSES[id];
  }

  const title = (courseOrId.title || courseOrId.course_name || '').toLowerCase();
  const overview = (courseOrId.course_details?.session_overview || courseOrId.description || '').toLowerCase();
  const haystack = `${title} ${overview} ${id}`;

  if (/yki/i.test(haystack)) {
    return YKI_SYLLABUS;
  }
  if (/everyday|conversation|কথোপকথন/i.test(haystack)) {
    return CONVERSATION_SYLLABUS;
  }
  if (/admission|university|higher education|studyinfo|masterclass/i.test(haystack)) {
    return STUDY_FINLAND_SYLLABUS;
  }
  if (/workplace|intermediate|a1\s*–\s*a2/i.test(haystack)) {
    return WORKPLACE_A2_SYLLABUS;
  }
  if (/a0|a1|beginner|মৌলিক/i.test(haystack)) {
    return BEGINNER_A1_SYLLABUS;
  }

  return BEGINNER_A1_SYLLABUS;
};
