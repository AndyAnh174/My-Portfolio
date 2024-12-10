import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faUbuntu, faFedora } from '@fortawesome/free-brands-svg-icons';
import { faServer, faTerminal, faCode, faNetworkWired, faDesktop, faCubes } from '@fortawesome/free-solid-svg-icons';
import archLogo from '../assets/arch-linux.svg';
import gnomeLogo from '../assets/DE/gnome.png';
import kdeLogo from '../assets/DE/image.png';
import xfceLogo from '../assets/DE/Xfce.png';

function ProjectLinux() {
    const projects = [
        {
            title: "Linux System Administration",
            icon: faServer,
            description: "Quản trị hệ thống Linux Server, bao gồm cài đặt, cấu hình và bảo mật",
            skills: ["Ubuntu Server", "CentOS", "Security", "Monitoring"],
            details: [
                "Deploy and manage web servers",
                "Configuring firewalls and security",
                "Managing users and permissions",
                "Monitoring system resources"
            ]
        },
        {
            title: "Shell Scripting",
            icon: faTerminal,
            description: "Phát triển các script tự động hóa công việc quản trị hệ thống",
            skills: ["Bash", "Shell Script", "Automation", "Cron Jobs"],
            details: [
                "Backup automation scripts",
                "System maintenance tools",
                "Log analysis scripts",
                "Task automation tools"
            ]
        },
        {
            title: "Network Configuration",
            icon: faNetworkWired,
            description: "Thiết lập và quản lý mạng trên Linux",
            skills: ["Networking", "IP Configuration", "DNS", "DHCP"],
            details: [
                "Network interface configuration",
                "DNS server setup",
                "DHCP server management",
                "Network security implementation"
            ]
        },
        {
            title: "Desktop Environment",
            icon: faDesktop,
            description: "Tùy chỉnh và quản lý môi trường desktop Linux",
            skills: ["GNOME", "KDE Plasma", "XFCE", "Customization"],
            details: [
                "GNOME Shell Extensions & Tweaks",
                "KDE Plasma Widgets & Effects",
                "XFCE Panel & Window Management",
                "Theme & Icon Customization"
            ]
        }
    ];

    const distributions = [
        { 
            name: "Ubuntu", 
            icon: faUbuntu, 
            color: "text-[#E95420]",
            description: "User-friendly Linux distribution",
            type: 'icon'
        },
        { 
            name: "Fedora", 
            icon: faFedora, 
            color: "text-[#294172]",
            description: "Leading-edge Linux distribution",
            type: 'icon'
        },
        { 
            name: "Arch Linux", 
            icon: archLogo,
            color: "text-[#1793D1]",
            description: "Lightweight and flexible Linux distribution",
            type: 'image'
        }
    ];

    const desktopEnvironments = [
        {
            title: "GNOME",
            icon: gnomeLogo,
            description: "Modern, user-friendly desktop environment",
            features: [
                "Activities Overview",
                "GNOME Shell Extensions",
                "GNOME Tweaks",
                "GTK Themes"
            ],
            customizations: [
                "Custom Shell Theme",
                "Dash to Dock",
                "System Monitor",
                "Workspace Grid"
            ]
        },
        {
            title: "KDE Plasma",
            icon: kdeLogo,
            description: "Highly customizable and feature-rich desktop",
            features: [
                "Plasma Widgets",
                "KWin Effects",
                "Activities",
                "KDE Connect"
            ],
            customizations: [
                "Custom Themes",
                "Window Decorations",
                "Panel Configuration",
                "Desktop Effects"
            ]
        },
        {
            title: "XFCE",
            icon: xfceLogo,
            description: "Lightweight and traditional desktop experience",
            features: [
                "Panel Customization",
                "Window Management",
                "Thunar File Manager",
                "Session Management"
            ],
            customizations: [
                "Panel Layout",
                "Compositor Settings",
                "Theme Configuration",
                "Keyboard Shortcuts"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#593E67] to-[#84495F] pt-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon 
                            icon={faLinux} 
                            className="text-6xl text-white"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Linux Projects
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Khám phá và phát triển với hệ điều hành mã nguồn mở
                    </p>
                </motion.div>

                {/* Distributions Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-3 gap-6 mb-16"
                >
                    {distributions.map((distro, index) => (
                        <motion.div
                            key={distro.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            {distro.type === 'icon' ? (
                                <FontAwesomeIcon 
                                    icon={distro.icon} 
                                    className={`text-4xl mb-4 ${distro.color}`}
                                />
                            ) : (
                                <img 
                                    src={distro.icon} 
                                    alt={distro.name}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                            )}
                            <h3 className="text-white font-bold">{distro.name}</h3>
                            <p className="text-gray-300 text-sm mt-2">{distro.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Desktop Environments Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Desktop Environments
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {desktopEnvironments.map((de, index) => (
                            <motion.div
                                key={de.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                            >
                                <div className="p-6">
                                    {/* DE Header */}
                                    <div className="text-center mb-6">
                                        <img 
                                            src={de.icon} 
                                            alt={de.title}
                                            className="w-16 h-16 mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-bold text-white">
                                            {de.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mt-2">
                                            {de.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="text-[#FEA837] font-medium mb-2">
                                            Key Features
                                        </h4>
                                        <ul className="text-gray-300 text-sm space-y-1">
                                            {de.features.map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Customizations */}
                                    <div>
                                        <h4 className="text-[#FEA837] font-medium mb-2">
                                            Customizations
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {de.customizations.map((custom, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                                                >
                                                    {custom}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon 
                                        icon={project.icon} 
                                        className="text-3xl text-[#FEA837] mr-4"
                                    />
                                    <h3 className="text-xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-white font-medium mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {project.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[#FEA837]/20 text-[#FEA837] rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectLinux;
