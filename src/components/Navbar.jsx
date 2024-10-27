import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/avatar.jpg';

function Navbar({ scrollToSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-full bg-[#593E67] text-white py-4 shadow-md z-10"
            >
                <div className="container mx-auto flex justify-between items-center px-6">
                    <a href="/" className="text-2xl font-bold">
                        My Portfolio
                    </a>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about" className="hover:text-gray-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-200">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-200">
                                Contact
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                className="cursor-pointer text-xxl"
                                onClick={togglePanel}
                            >
                                ☰
                            </span>
                        </li>
                    </ul>
                </div>
            </motion.nav>

            {isOpen && (
                <>
                    {/* Overlay để đóng sidebar khi nhấn bên ngoài */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-20"
                        onClick={togglePanel}
                    />

                    {/* Sidebar Menu */}
                    <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#84495F] to-[#B85B56] shadow-2xl z-30 p-6 text-white rounded-tr-lg rounded-br-lg flex flex-col justify-between"
                    >
                        <div>
                            <button onClick={togglePanel} className="text-white text-lg font-bold mb-6">Close</button>
                            <div className="text-center">
                                {/* Avatar */}
                                <div className="w-24 h-24 mx-auto mb-4">
                                    <img
                                        src={avatar}
                                        alt="Avatar"
                                        className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
                                    />
                                </div>

                                {/* Personal Info */}
                                <h2 className="text-xl font-semibold text-white mb-1">Hồ Việt Anh (AndyAnh)</h2>
                                <p className="text-[#FEA837]">
                                    <FontAwesomeIcon icon={faPhone} /> 0949000030
                                </p>
                                <p className="text-[#FEA837]">
                                    <FontAwesomeIcon icon={faPhone} /> 0915223292
                                </p>
                                <p className="text-[#FEA837] mb-6">
                                    <FontAwesomeIcon icon={faEnvelope} /> hovietanh147@gmail.com
                                </p>

                                {/* Links to Other Projects */}
                                <div className="space-y-3">
                                    <Link to="/project-linux" className="text-white font-medium bg-[#DE741C] hover:bg-[#FEA837] py-2 px-4 rounded-lg shadow-md block">Project Linux</Link>
                                    <Link to="/project-future" className="text-white font-medium bg-[#84495F] hover:bg-[#B85B56] py-2 px-4 rounded-lg shadow-md block">Project Future</Link>
                                    <Link to="/secret" className="text-white font-medium bg-[#593E67] hover:bg-[#84495F] py-2 px-4 rounded-lg shadow-md block">
                                        Anything You Know Me
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Footer - Copyright */}
                        <div className="text-center mt-6">
                            <hr className="border-t border-gray-200 my-4" />
                            <a
                                href="https://andyanh-contact.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FEA837] text-sm hover:underline"
                            >
                                by AndyAnh174
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
}

export default Navbar;
