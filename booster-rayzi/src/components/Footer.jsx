import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, CircleDashed, Globe, Video } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Send, href: 'https://t.me/Rayzi_710', label: 'Telegram' },
    { icon: CircleDashed, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'Facebook' },
    { icon: Video, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate-950/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Booster Rayzi
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium TikTok Boosting Services. Elevate your social media presence with our professional solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact.followUs}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-indigo-500/50 rounded-lg flex items-center justify-center transition-colors border border-white/10"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
