import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faUser, faCode, faGamepad, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/avatar.jpg';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const scrollToSection = useScrollToSection();

    const togglePanel = () => setIsOpen(!isOpen);

    // Theo dõi scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', id: 'about', icon: faUser },
        { name: 'Projects', id: 'projects', icon: faCode },
        { name: 'Contact', id: 'contact', icon: faEnvelope }
    ];

    const sidebarLinks = [
        { name: 'Project Linux', to: '/project-linux', icon: faCode, color: 'from-[#DE741C] to-[#FEA837]' },
        { name: 'Mini Games', to: '/games', icon: faGamepad, color: 'from-[#84495F] to-[#B85B56]' },
        { name: 'Secret Page', to: '/secret', icon: faUser, color: 'from-[#593E67] to-[#84495F]' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-[#593E67]/90 backdrop-blur-md py-2 shadow-lg'
                        : 'bg-[#593E67] py-4'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center relative">
                        {/* Desktop Navigation - Left */}
                        <div className="hidden md:flex items-center space-x-8 flex-1">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-white hover:text-[#FEA837] transition-colors flex items-center space-x-2"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                    <span>{link.name}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Logo - Absolute Center */}
                        <Link 
                            to="/" 
                            className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
                        >
                            <motion.img
                                src={avatar}
                                alt="Logo"
                                className="w-10 h-10 rounded-full border-2 border-[#FEA837]"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="text-xl font-bold text-white">AndyAnh</span>
                        </Link>

                        {/* Right Section - For Balance */}
                        <div className="flex items-center justify-end space-x-4 flex-1">
                            <motion.button
                                onClick={togglePanel}
                                className="text-white hover:text-[#FEA837] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={faBars} className="text-xl" />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-white"
                            onClick={togglePanel}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FontAwesomeIcon icon={faBars} className="text-xl" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Sidebar Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={togglePanel}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-[#593E67] to-[#84495F] shadow-2xl z-50"
                        >
                            <div className="p-6 h-full flex flex-col">
                                {/* Close Button */}
                                <motion.button
                                    onClick={togglePanel}
                                    className="absolute top-4 right-4 text-white hover:text-[#FEA837]"
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                                </motion.button>

                                {/* Profile Section */}
                                <div className="text-center mb-8">
                                    <motion.img
                                        src={avatar}
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full border-4 border-[#FEA837] mx-auto mb-4"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        Hồ Việt Anh (AndyAnh)
                                    </h2>
                                    <div className="text-gray-300 space-y-1">
                                        <p className="flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                            0949000030
                                        </p>
                                        <p className="flex items-center justify-center">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                            hovietanh147@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <div className="space-y-4">
                                    {sidebarLinks.map((link) => (
                                        <motion.div
                                            key={link.to}
                                            whileHover={{ x: 10 }}
                                            className="relative group"
                                        >
                                            <Link
                                                to={link.to}
                                                onClick={togglePanel}
                                                className={`block p-4 rounded-lg bg-gradient-to-r ${link.color} 
                                                    text-white font-medium transition-transform transform
                                                    hover:shadow-lg`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <FontAwesomeIcon icon={link.icon} />
                                                    <span>{link.name}</span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-auto text-center">
                                    <a
                                        href="https://andyanh-contact.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FEA837] hover:underline text-sm"
                                    >
                                        Visit My Contact Page
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
