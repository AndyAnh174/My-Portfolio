// src/components/About.jsx
import React from 'react';
import about from '../assets/about.jpg';

function About() {
    return (
        <section id="about" className="py-16 bg-[#B85B56] text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4 text-[#FEA837]">About Me</h2>

                {/* Image Section */}
                <div className="flex justify-center mb-6">
                    <img
                        src={about} 
                        alt="Your Name"
                        className="w-60 h-60 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>

                {/* Description Section */}
                <p className="text-lg max-w-2xl mx-auto">
                    Hello! I'm a passionate Linux enthusiast and freelance front-end developer. My journey with Linux drives me to support and connect with users across the open-source community. In my freelance work, I create efficient, user-centered web solutions using modern front-end technologies. Always eager to expand my knowledge, I strive to bridge my love for Linux with open-source development to make a real impact.
                </p>
            </div>
        </section>
    );
}

export default About;
