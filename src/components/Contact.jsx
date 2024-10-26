import React, { useState } from 'react';
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 

    const submitForm = (e) => {
        e.preventDefault();

        saveMessages(name, email, message);

        setName('');
        setEmail('');
        setMessage('');

        setSuccessMessage("Bạn đã gửi thành công!");
        
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const saveMessages = (name, email, message) => {
        const newContactFormDB = contactFormDB.push();
        newContactFormDB.set({
            name: name,
            email: email,
            msgContent: message,
        });
    };

    return (
        <section id="contact" className="py-16 bg-gray-100 text-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                
                {/* Thông báo thành công */}
                {successMessage && (
                    <p className="text-green-500 mb-4">{successMessage}</p>
                )}

                <form id="contactForm" onSubmit={submitForm} className="max-w-lg mx-auto">
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full mb-4 p-3 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full mb-4 p-3 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        id="msgContent"
                        placeholder="Your Message"
                        className="w-full mb-4 p-3 border border-gray-300 rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-6 rounded shadow-lg font-medium hover:bg-blue-500 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
