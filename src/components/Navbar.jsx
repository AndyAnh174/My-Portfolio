import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaGamepad, FaBlog, FaTrophy, FaTerminal, FaLayerGroup, FaLock, FaFile } from 'react-icons/fa';
import { useLanguage, translations } from '../context/LanguageContext';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Thêm kiểm tra lỗi cho useLanguage
    let language = 'en';
    let toggleLanguage = () => {};
    let t = translations['en'];
    
    try {
        const languageContext = useLanguage();
        if (languageContext) {
            language = languageContext.language;
            toggleLanguage = languageContext.toggleLanguage;
            t = translations[language];
        }
    } catch (error) {
        console.error('Lỗi khi sử dụng language context:', error);
    }
    
    const location = useLocation();
    
    // Thêm kiểm tra lỗi cho useScrollToSection
    let scrollToSection = (id) => {
        console.warn('ScrollToSection fallback được sử dụng');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.pathname !== '/') {
            window.location.href = '/#' + id;
        }
    };
    
    try {
        const scrollFn = useScrollToSection();
        if (typeof scrollFn === 'function') {
            scrollToSection = scrollFn;
        }
    } catch (error) {
        console.error('Lỗi khi sử dụng scrollToSection:', error);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mainNavLinks = [
        { title: t.about, id: 'about', icon: FaUser },
        { title: t.projects, id: 'projects', icon: FaCode },
        { title: t.contact, id: 'contact', icon: FaUser }
    ];

    const dropdownLinks = [
        { title: t.games, path: '/games', icon: FaGamepad },
        { title: t.blog, path: '/blog', icon: FaBlog },
        { title: t.achievements, path: '/achievements', icon: FaTrophy },
        { title: t.tutorials, path: '/tutorials', icon: FaTerminal },
        { title: t.techStack, path: '/tech-stack', icon: FaLayerGroup },
        { title: t.secretPage, path: '/secret', icon: FaLock },
        { title: t.cv, path: '/cv', icon: FaFile }
    ];

    const handleNavClick = (id) => {
        if (location.pathname !== '/') {
            // Nếu không ở trang chủ, chuyển về trang chủ trước
            window.location.href = '/#' + id;
        } else {
            // Nếu đang ở trang chủ, cuộn đến section
            scrollToSection(id);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#0f0f1a]/98 shadow-lg' : 'bg-[#0f0f1a]/80'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-3 group relative z-50 pl-2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                            <FaHome className="text-3xl text-white hover:text-[#4ade80] transition-colors duration-300 relative" />
                        </div>
                        <div className="hidden md:block relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] rounded-lg opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                            <span className="text-2xl font-bold relative">
                                <span className="bg-gradient-to-r from-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent group-hover:from-[#3b82f6] group-hover:to-[#4ade80] transition-all duration-300">
                                    Portfolio
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Main Links */}
                        {mainNavLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="text-gray-300 hover:text-[#4ade80] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-1">
                                    <link.icon className="text-[#4ade80]" />
                                    <span>{link.title}</span>
                                </div>
                            </button>
                        ))}

                        {/* More Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-[#4ade80] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                More
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-[#1a1a2e] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                {dropdownLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#4ade80]/10 hover:text-[#4ade80] transition-colors duration-200"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <link.icon />
                                            <span>{link.title}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Language Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-gray-300 hover:text-[#4ade80] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                <span>{language === 'en' ? 'English' : 'Tiếng Việt'}</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-40 bg-[#1a1a2e] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <button
                                    onClick={() => language !== 'en' && toggleLanguage()}
                                    className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-[#4ade80] bg-[#4ade80]/10' : 'text-gray-300 hover:bg-[#4ade80]/10 hover:text-[#4ade80]'} transition-colors duration-200`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => language !== 'vi' && toggleLanguage()}
                                    className={`w-full text-left px-4 py-2 text-sm ${language === 'vi' ? 'text-[#4ade80] bg-[#4ade80]/10' : 'text-gray-300 hover:bg-[#4ade80]/10 hover:text-[#4ade80]'} transition-colors duration-200`}
                                >
                                    Tiếng Việt
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 text-gray-300 hover:text-[#4ade80] p-2 rounded-lg transition-colors duration-200"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between items-center">
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 left-0 w-full h-screen bg-[#0f0f1a]/98 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="px-4 py-20 space-y-1">
                    {/* Language Options */}
                    <div className="mb-4 px-4">
                        <div className="text-sm font-medium text-gray-400 mb-2">Ngôn ngữ</div>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => {
                                    if (language !== 'en') toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                    language === 'en' 
                                    ? 'bg-[#4ade80]/20 text-[#4ade80] border border-[#4ade80]/30' 
                                    : 'text-gray-300 border border-gray-700 hover:border-[#4ade80]/30 hover:text-[#4ade80] hover:bg-[#4ade80]/10'
                                } transition-all duration-200`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => {
                                    if (language !== 'vi') toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                    language === 'vi'
                                    ? 'bg-[#4ade80]/20 text-[#4ade80] border border-[#4ade80]/30'
                                    : 'text-gray-300 border border-gray-700 hover:border-[#4ade80]/30 hover:text-[#4ade80] hover:bg-[#4ade80]/10'
                                } transition-all duration-200`}
                            >
                                Tiếng Việt
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1">
                        {mainNavLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    handleNavClick(link.id);
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-[#4ade80] hover:bg-[#4ade80]/10 transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <link.icon className="text-xl text-[#4ade80]" />
                                    <span>{link.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* More Links */}
                    <div className="pt-4 space-y-1">
                        <div className="px-4 text-sm font-medium text-gray-400 mb-2">More</div>
                        {dropdownLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-[#4ade80] hover:bg-[#4ade80]/10 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex items-center space-x-3">
                                    <link.icon className="text-xl text-[#4ade80]" />
                                    <span>{link.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
