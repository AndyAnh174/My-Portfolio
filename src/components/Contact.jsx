import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useLanguage, translations } from '../context/LanguageContext';

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

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#3b82f6]">
            {t.contactTitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                {t.message}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? t.sending : t.send}
              </button>
            </div>

            {status === 'success' && (
              <div className="text-center text-[#4ade80]">{t.success}</div>
            )}
            {status === 'error' && (
              <div className="text-center text-red-500">{t.error}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
