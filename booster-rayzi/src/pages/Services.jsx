import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Users, Heart, Eye, Share2, UsersRound, ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      key: 'followers',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Heart,
      key: 'likes',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Eye,
      key: 'views',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Share2,
      key: 'shares',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: UsersRound,
      key: 'liveViews',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Our Premium Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Boost your TikTok presence with our professional services. Contact us on Telegram for custom packages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-all overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {t.services[service.key].title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {t.services[service.key].desc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-8">
                      {[...Array(3)].map((_, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full mr-3`} />
                          Premium Quality
                        </li>
                      ))}
                    </ul>

                    {/* Order Button */}
                    <a
                      href="https://t.me/Rayzi_710"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all group/btn"
                    >
                      {t.services.orderNow}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-950/50 to-purple-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Ready to Boost Your TikTok?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us now for custom packages and special offers
            </p>
            <motion.a
              href="https://t.me/Rayzi_710"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
            >
              Contact on Telegram
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
