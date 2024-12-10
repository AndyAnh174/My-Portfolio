import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode, faMusic, faBook, faGamepad, faCoffee, faLaptopCode, faMoon, faUserTie, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/avatar.jpg';

function SecretPage() {
    const [showContent, setShowContent] = useState(false);
    const [activeTab, setActiveTab] = useState('personality');

    useEffect(() => {
        setTimeout(() => setShowContent(true), 500);
    }, []);

    const personalityTraits = [
        "Yêu thích công nghệ và lập trình",
        "Thích khám phá những điều mới",
        "Có tinh thần trách nhiệm cao",
        "Luôn học hỏi và phát triển bản thân"
    ];

    const hobbies = [
        { icon: faMusic, text: "Nghe nhạc" },
        { icon: faGamepad, text: "Chơi game" },
        { icon: faBook, text: "Đọc sách" },
        { icon: faCoffee, text: "Thưởng thức cà phê" },
        { icon: faLaptopCode, text: "Coding" },
        { 
            icon: faLinux,
            text: "Linux System",
            description: "Tìm hiểu và tùy biến Linux" 
        }
    ];

    const funFacts = [
        "Tôi bắt đầu học lập trình từ năm nhất đại học",
        "Linux là hệ điều hành yêu thích của tôi",
        "Tôi thích làm việc vào ban đêm",
        "Tôi có thể code liên tục 6 tiếng không nghỉ"
    ];

    const mentors = [
        { 
            name: 'Bùi Thanh Liêm',
            image: avatar,
            role: 'Senior Developer',
            description: 'Người thầy đầu tiên hướng dẫn tôi về con đường lập trình',
            skills: ['Frontend', 'Backend', 'System Design']
        },
        { 
            name: 'Đỗ Thành Đạt',
            image: avatar,
            role: 'Technical Lead',
            description: 'Người anh dạy tôi nhiều về kiến trúc và clean code',
            skills: ['Architecture', 'DevOps', 'Mentoring']
        },
        { 
            name: 'Trần Công Toản',
            image: avatar,
            role: 'Full Stack Developer',
            description: 'Người bạn đồng hành trong nhiều dự án quan trọng',
            skills: ['React', 'Node.js', 'Database']
        }
    ];

    const linusQuotes = [
        {
            quote: "Talk is cheap. Show me the code.",
            meaning: "Nói thì dễ lắm. Cho tôi xem code đi.",
            explanation: "Thể hiện rõ quan điểm thực dụng của Linus Torvalds. Ông đề cao hành động và kết quả thực tế hơn là những lời nói suông hay tranh luận vô bổ."
        },
        {
            quote: "Software is like sex: it's better when it's free.",
            meaning: "Phần mềm giống như tình dục: miễn phí thì càng tốt.",
            explanation: "Câu này thể hiện quan điểm ủng hộ phần mềm mã nguồn mở của ông."
        },
        {
            quote: "If Microsoft ever does applications for Linux it means I've won.",
            meaning: "Nếu Microsoft phát triển ứng dụng cho Linux, điều đó có nghĩa là tôi đã thắng.",
            explanation: "Cho thấy sự tự tin của Linus vào hệ điều hành Linux."
        },
        {
            quote: "I'm not a visionary, I'm an engineer.",
            meaning: "Tôi không phải là một người có tầm nhìn xa, tôi là một kỹ sư.",
            explanation: "Linus tự nhận mình là người thực tế, tập trung vào giải quyết vấn đề."
        },
        {
            quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
            meaning: "Hầu hết các lập trình viên giỏi lập trình không phải vì họ mong đợi được trả tiền hoặc được công chúng tung hô, mà bởi vì lập trình rất thú vị.",
            explanation: "Thể hiện niềm đam mê lập trình của Linus."
        }
    ];

    const tabs = [
        { id: 'personality', label: 'Tính Cách', icon: faHeart },
        { id: 'hobbies', label: 'Sở Thích', icon: faGamepad },
        { id: 'funfacts', label: 'Fun Facts', icon: faMoon },
        { id: 'mentors', label: 'Sư Phụ', icon: faUserTie },
        { id: 'quotes', label: 'Linux Quotes', icon: faQuoteLeft }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#593E67] to-[#84495F] pt-24 px-6">
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="container mx-auto max-w-4xl"
                    >
                        {/* Header */}
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Secret About Me
                            </h1>
                            <div className="w-24 h-1 bg-[#FEA837] mx-auto rounded-full" />
                        </motion.div>

                        {/* Tabs */}
                        <div className="flex justify-center mb-8 space-x-4">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 rounded-full flex items-center space-x-2
                                        ${activeTab === tab.id 
                                            ? 'bg-[#FEA837] text-white' 
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        } transition-all duration-300`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={tab.icon} />
                                    <span>{tab.label}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
                        >
                            {activeTab === 'personality' && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {personalityTraits.map((trait, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/5 p-6 rounded-xl"
                                        >
                                            <p className="text-white text-lg">{trait}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'hobbies' && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {hobbies.map((hobby, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/5 p-6 rounded-xl text-center"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FontAwesomeIcon 
                                                icon={hobby.icon} 
                                                className="text-3xl text-[#FEA837] mb-3"
                                            />
                                            <p className="text-white font-medium mb-2">{hobby.text}</p>
                                            {hobby.description && (
                                                <p className="text-gray-300 text-sm">
                                                    {hobby.description}
                                                </p>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'funfacts' && (
                                <div className="space-y-4">
                                    {funFacts.map((fact, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/5 p-6 rounded-xl"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="text-[#FEA837] text-xl font-bold">
                                                    #{index + 1}
                                                </div>
                                                <p className="text-white">{fact}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'mentors' && (
                                <div className="space-y-8">
                                    {mentors.map((mentor, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="bg-white/5 rounded-xl overflow-hidden"
                                        >
                                            <div className="flex flex-col md:flex-row">
                                                {/* Mentor Image */}
                                                <div className="relative w-full md:w-48 h-48">
                                                    <motion.img
                                                        src={mentor.image}
                                                        alt={mentor.name}
                                                        className="w-full h-full object-cover"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                </div>

                                                {/* Mentor Info */}
                                                <div className="p-6 flex-1">
                                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-white mb-1">
                                                                {mentor.name}
                                                            </h3>
                                                            <p className="text-[#FEA837]">{mentor.role}</p>
                                                        </div>
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: 0.5 + index * 0.2 }}
                                                            className="mt-2 md:mt-0"
                                                        >
                                                            <span className="px-3 py-1 bg-[#FEA837]/20 rounded-full text-[#FEA837] text-sm">
                                                                Mentor #{index + 1}
                                                            </span>
                                                        </motion.div>
                                                    </div>

                                                    <p className="text-gray-300 mb-4">
                                                        {mentor.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {mentor.skills.map((skill, skillIndex) => (
                                                            <motion.span
                                                                key={skillIndex}
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 0.7 + skillIndex * 0.1 }}
                                                                className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                                                            >
                                                                {skill}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Appreciation Message */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="text-center text-white/80 mt-8 p-6 bg-white/5 rounded-xl"
                                    >
                                        <p className="italic">
                                            "Tri thức là một hành trình, và tôi rất may mắn có những người thầy tuyệt vời đồng hành"
                                        </p>
                                    </motion.div>
                                </div>
                            )}

                            {activeTab === 'quotes' && (
                                <div className="space-y-6">
                                    {linusQuotes.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="bg-white/5 p-6 rounded-xl space-y-4"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <FontAwesomeIcon 
                                                    icon={faQuoteLeft} 
                                                    className="text-2xl text-[#FEA837] flex-shrink-0 mt-1"
                                                />
                                                <div>
                                                    <p className="text-xl font-bold text-white mb-2">
                                                        "{item.quote}"
                                                    </p>
                                                    <p className="text-gray-300 italic mb-4">
                                                        {item.meaning}
                                                    </p>
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.5 + index * 0.2 }}
                                                        className="bg-white/5 p-4 rounded-lg"
                                                    >
                                                        <p className="text-gray-300 text-sm">
                                                            {item.explanation}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Footer Quote */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="text-center text-white/80 mt-8 p-6 bg-white/5 rounded-xl"
                                    >
                                        <p className="italic">
                                            "Những câu nói này là nguồn cảm hứng cho tôi trong hành trình học tập và phát triển"
                                        </p>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-12 text-white/80 italic"
                        >
                            "Code is like humor. When you have to explain it, it's bad." 
                            <span className="block mt-2 text-sm">- Cory House</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SecretPage;
