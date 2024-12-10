import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUKEuyKQM342RcEkyytIqcHJ9aLV7S3dU",
    authDomain: "portfolio-myself-6d972.firebaseapp.com",
    databaseURL: "https://portfolio-myself-6d972-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-myself-6d972",
    storageBucket: "portfolio-myself-6d972.appspot.com",
    messagingSenderId: "971398235761",
    appId: "1:971398235761:web:63da84916928b9330ffdd0"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const contactFormDB = firebase.database().ref("contactForm");

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: faPhone,
      title: "Phone",
      details: ["0949000030", "0915223292"],
      color: "from-[#FEA837] to-[#DE741C]"
    },
    {
      icon: faEnvelope,
      title: "Email",
      details: ["hovietanh147@gmail.com"],
      color: "from-[#DE741C] to-[#B85B56]"
    },
    {
      icon: faLocationDot,
      title: "Location",
      details: ["Ho Chi Minh City, Vietnam"],
      color: "from-[#B85B56] to-[#84495F]"
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/AndyAnh174",
      color: "hover:text-[#FEA837]"
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/việt-anh-hồ-b61489245/",
      color: "hover:text-[#DE741C]"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Lưu vào Firebase
      const newContactForm = contactFormDB.push();
      await newContactForm.set({
        name: formData.name,
        email: formData.email,
        msgContent: formData.message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-[#593E67] to-[#84495F] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-10 pattern-grid-lg" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEA837]/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DE741C]/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Contact</h2>
          <div className="w-24 h-1 bg-[#FEA837] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-r ${info.color} p-6 rounded-xl shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <FontAwesomeIcon icon={info.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-white/80">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white text-2xl transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FEA837] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FEA837] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FEA837] transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white 
                  ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-[#FEA837] to-[#DE741C]'}
                  hover:opacity-90 transition-opacity disabled:cursor-not-allowed`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg text-center ${
                  submitStatus === 'success' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
                }`}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
