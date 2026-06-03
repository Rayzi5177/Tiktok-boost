import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  my: {
    nav: { home: 'ပင်မစာမျက်နှာ', services: 'ဝန်ဆောင်မှုများ', contact: 'အကြောင်းအရာ' },
    hero: {
      title: 'Booster Rayzi - TikTok Boosting ဝန်ဆောင်မှု',
      subtitle: 'သင့် TikTok အကောင့်ကို ပရီမီယံအဆင့် မြှင့်တင်ပေးပါ',
      cta: 'အခုပဲ စတင်ပါ',
    },
    stats: { clients: 'ကျေနပ်သောဖောက်သည်များ', orders: 'အမှာစာများ', growth: 'တိုးတက်မှုနှုန်း' },
    why: {
      title: 'ဘာကြောင့် ကျွန်ုပ်တို့ကို ရွေးချယ်သင့်သလဲ',
      cards: [
        { title: 'မြန်ဆန်သော ဝန်ဆောင်မှု', desc: '၂၄ နာရီအတွင်း စတင်ပေးပို့ပါမည်' },
        { title: 'လုံခြုံစိတ်ချရမှု', desc: 'သင့်အကောင့် လုံခြုံရေးကို ဦးစားပေးပါသည်' },
        { title: '၂၄/၇ ပံ့ပိုးမှု', desc: 'အမြဲတမ်း ဆက်သွယ်နိုင်ပါသည်' },
      ],
    },
    testimonials: {
      title: 'ဖောက်သည်များ၏ အဆိုပြုချက်များ',
      reviews: [
        { name: 'မင်းသား', role: 'Content Creator', text: 'Booster Rayzi ကြောင့် ကျွန်တော့် follower ၁၀၀၀၀ ကျော် တက်သွားပါတယ်!' },
        { name: 'နေကြယ်', role: 'Influencer', text: 'အရမ်းကောင်းတဲ့ ဝန်ဆောင်မှုပါ။ အကြံပြုလိုပါတယ်!' },
        { name: 'ရွှေအိမ်', role: 'Business Owner', text: 'Brand awareness တက်စေဖို့ အရမ်းထိရောက်ပါတယ်' },
      ],
    },
    faq: {
      title: 'မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ',
      items: [
        { q: 'ဝန်ဆောင်မှု စတင်ရန် ဘယ်လောက်ကြာပါသလဲ?', a: 'အများအားဖြင့် ၂၄ နာရီအတွင်း စတင်ပေးပို့ပါသည်။' },
        { q: 'လုံခြုံပါသလား?', a: 'ဟုတ်ကဲ့၊ ၁၀၀% လုံခြုံပြီး သင့် password မလိုအပ်ပါ။' },
        { q: 'ဘယ်လို ဆက်သွယ်နိုင်ပါသလဲ?', a: 'Telegram @Rayzi_710 မှတစ်ဆင့် ဆက်သွယ်နိုင်ပါသည်။' },
      ],
    },
    cta: { title: 'အခုပဲ ဆက်သွယ်ပါ', desc: 'Telegram မှတစ်ဆင့် အမှာစာ ပေးသွင်းပါ', button: 'Telegram တွင် ဆက်သွယ်ပါ' },
    footer: { rights: '© 2024 Booster Rayzi. မူပိုင်ခွင့် အားလုံး ထိန်းသိမ်းထားသည်။' },
    services: {
      followers: { title: 'TikTok Followers', desc: 'အရည်အသွေးမြင့် Followers များ ရယူပါ' },
      likes: { title: 'TikTok Likes', desc: 'သင့် Post များကို Like များစွာ ရရှိစေပါ' },
      views: { title: 'TikTok Views', desc: 'View အရေအတွက် မြင့်တက်စေပါ' },
      shares: { title: 'TikTok Shares', desc: 'Share များစွာဖြင့် Viral ဖြစ်စေပါ' },
      liveViews: { title: 'TikTok Live Views', desc: 'Live streaming တွင် Viewer များစွာ ရရှိစေပါ' },
      orderNow: 'အခုပဲ အမှာစာ ပေးပါ',
    },
    contact: {
      title: 'ဆက်သွယ်ရန်',
      name: 'အမည်',
      email: 'အီးမေးလ်',
      message: 'စာ',
      send: 'ပို့ပါ',
      telegram: 'Telegram တွင် ဆက်သွယ်ပါ',
      followUs: 'ကျွန်ုပ်တို့ကို Follow လုပ်ပါ',
    },
  },
  en: {
    nav: { home: 'Home', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Booster Rayzi - Premium TikTok Boosting',
      subtitle: 'Elevate Your TikTok Presence to Premium Levels',
      cta: 'Get Started Now',
    },
    stats: { clients: 'Happy Clients', orders: 'Orders Completed', growth: 'Growth Rate' },
    why: {
      title: 'Why Choose Us',
      cards: [
        { title: 'Fast Delivery', desc: 'Start receiving within 24 hours' },
        { title: 'Secure & Safe', desc: 'Your account security is our priority' },
        { title: '24/7 Support', desc: 'Always available to assist you' },
      ],
    },
    testimonials: {
      title: 'Client Testimonials',
      reviews: [
        { name: 'Min Thar', role: 'Content Creator', text: 'Thanks to Booster Rayzi, I gained over 10,000 followers!' },
        { name: 'Nay Kyaw', role: 'Influencer', text: 'Excellent service! Highly recommended!' },
        { name: 'Shwe Eain', role: 'Business Owner', text: 'Very effective for brand awareness' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How long does it take to start?', a: 'Usually starts within 24 hours.' },
        { q: 'Is it safe?', a: 'Yes, 100% safe and no password required.' },
        { q: 'How can I contact?', a: 'Contact us via Telegram @Rayzi_710' },
      ],
    },
    cta: { title: 'Contact Us Now', desc: 'Place your order through Telegram', button: 'Contact on Telegram' },
    footer: { rights: '© 2024 Booster Rayzi. All rights reserved.' },
    services: {
      followers: { title: 'TikTok Followers', desc: 'Get high-quality followers' },
      likes: { title: 'TikTok Likes', desc: 'Boost your posts with likes' },
      views: { title: 'TikTok Views', desc: 'Increase your view count' },
      shares: { title: 'TikTok Shares', desc: 'Go viral with more shares' },
      liveViews: { title: 'TikTok Live Views', desc: 'Get more viewers on live streams' },
      orderNow: 'Order Now',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      telegram: 'Contact on Telegram',
      followUs: 'Follow Us',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('booster-rayzi-lang');
    return saved || 'my';
  });

  useEffect(() => {
    localStorage.setItem('booster-rayzi-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'my' ? 'en' : 'my');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
