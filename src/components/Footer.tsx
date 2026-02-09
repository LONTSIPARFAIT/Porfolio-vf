import { motion } from 'framer-motion';
import { Heart, Coffee, ArrowUp } from 'lucide-react';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: <SiGithub />, href: 'https://github.com/LONTSIPARFAIT', label: 'GitHub' },
    { icon: <SiLinkedin />, href: 'https://linkedin.com/in/lontsi-parfait', label: 'LinkedIn' },
    // { icon: <SiTwitter />, href: 'https://twitter.com/ton-username', label: 'Twitter' },
    { icon: <SiInstagram />, href: 'https://instagram.com/ton-username', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À Propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">
              Perfecto<span className="text-accent">Dev</span>
            </h2>
            <p className="text-gray-400">
              Créateur d&apos;expériences web exceptionnelles et de solutions digitales innovantes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Développement Web',
                'Applications Mobile',
                'UI/UX Design',
                'Consulting Tech',
                'Maintenance & Support'
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6">Restez informé</h3>
            <p className="text-gray-400 mb-4">
              Recevez les dernières mises à jour et projets.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-accent outline-none"
              />
              <button
                type="submit"
                className="w-full btn btn-accent btn-sm"
              >
                S&apos;abonner
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0"
          >
            © {currentYear} Lontsi Parfait. Tous droits réservés.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <span className="text-gray-400 flex items-center">
              Fait avec <Heart className="w-4 h-4 mx-1 text-red-500" /> et <Coffee className="w-4 h-4 mx-1 text-yellow-500" />
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-1 text-gray-400 hover:text-accent transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Haut de page</span>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;