import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ici tu peux intégrer avec EmailJS, Formspree ou une API
    // Pour l'instant, on simule l'envoi
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser après 3 secondes
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'lontsiparfait12@gmail.com',
      link: 'mailto:lontsiparfait12@gmail.comm'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '+237 679324517', // Remplace par ton numéro
      link: 'tel:+237679324517'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localisation',
      value: 'Yaoundé, Cameroun',
      link: 'https://maps.google.com/?q=Yaounde,Cameroun'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Travaillons <span className="text-accent">Ensemble</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Discutons de votre projet et voyons comment je peux vous aider à le concrétiser
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Prenons contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Vous avez un projet en tête ? Discutons-en ! Je suis toujours ouvert à de nouvelles opportunités
              et collaborations intéressantes.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-accent/10 transition-colors group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold">{info.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl">
            <h4 className="font-bold mb-2">Disponibilité</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Je suis disponible pour des projets freelance et des opportunités à temps plein.
              Réponse garantie sous 24h.
            </p>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Je vous répondrai dans les plus brefs délais.
              </p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-6">Envoyez un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Sujet</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full btn btn-accent"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;