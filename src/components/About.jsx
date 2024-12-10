import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import about from '../assets/about.jpg';

function About() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <section id="about" className="relative py-20 pt-24 bg-gradient-to-b from-[#B85B56] to-[#84495F] text-white overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEA837] rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DE741C] rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative group cursor-pointer" onClick={() => setIsFullscreen(true)}>
                            {/* Main Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={about}
                                    alt="About Me"
                                    className="w-full h-[400px] object-cover"
                                />
                                {/* Overlay with text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-medium">Click to view full image</p>
                                </div>
                            </motion.div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-2xl opacity-50 group-hover:opacity-70 blur transition-opacity" />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="mb-6">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FEA837] to-[#DE741C] bg-clip-text text-transparent inline-block">
                                My Journey
                            </h2>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                { title: 'Linux System', level: '90%' },
                                { title: 'Frontend Dev', level: '80%' },
                                { title: 'UI/UX Design', level: '45%' },
                                { title: 'Open Source', level: '70%' }
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                                >
                                    <div className="text-sm font-medium mb-2">{skill.title}</div>
                                    <div className="h-2 bg-white/20 rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Experience Cards */}
                        <div className="space-y-4">
                            {[
                                {
                                    year: '2023-Present',
                                    title: 'Freelance Developer',
                                    description: 'Specializing in frontend development and Linux system administration.'
                                },
                                {
                                    year: '2021-Present',
                                    title: 'Open Source Contributor',
                                    description: 'Active contributor to various Linux and web development projects.'
                                }
                            ].map((exp, index) => (
                                <motion.div
                                    key={exp.year}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                                >
                                    <div className="text-[#FEA837] text-sm">{exp.year}</div>
                                    <div className="font-medium mb-1">{exp.title}</div>
                                    <div className="text-sm text-gray-300">{exp.description}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Personal Interests */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-6 text-gray-300"
                        >
                            <h3 className="text-white font-medium mb-2">Personal Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Open Source', 'Linux', 'Web Development', 'UI Design', 'Gaming', 'Customer DE'].map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                        onClick={() => setIsFullscreen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            className="relative max-w-[90vw] max-h-[90vh]"
                        >
                            <motion.img
                                src={about}
                                alt="About Me"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                layoutId="about-image"
                            />
                            {/* Close button */}
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200"
                            >
                                ×
                            </button>
                            {/* Image navigation buttons */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                                    Previous
                                </button>
                                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                        {/* Image info */}
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-xl font-bold mb-2">About Me Image</h3>
                            <p className="text-sm text-gray-300">Click anywhere to close</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default About;
