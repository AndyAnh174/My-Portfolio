import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' hoặc 'vi'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'vi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations
export const translations = {
  en: {
    // Navbar
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    games: 'Games',
    blog: 'Blog',
    achievements: 'Achievements',
    tutorials: 'Linux Tutorials',
    techStack: 'Tech Stack',
    secretPage: 'Secret Page',
    cv: 'CV',

    // Hero
    greeting: 'Hi, I\'m',
    roles: {
      linux: 'Linux Enthusiast',
      frontend: 'Frontend Developer',
      opensource: 'Open Source Contributor'
    },
    description: 'Linux enthusiast and freelance front-end developer, focused on crafting user-centered web solutions and driven by a passion for open-source development.',
    viewProjects: 'View Projects',

    // About
    aboutMe: 'About Me',
    aboutDescription: 'I\'m a passionate full-stack developer with a strong focus on creating beautiful and functional web applications. With expertise in both frontend and backend technologies, I strive to deliver high-quality solutions that make a difference.',
    skills: 'Skills',
    education: 'Education',
    experience: 'Experience',
    certifications: 'Certifications',

    // Projects
    projectsTitle: 'Projects',
    viewProject: 'View Project',
    categories: {
      all: 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Fullstack'
    },

    // Contact
    contactTitle: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Failed to send message. Please try again.'
  },
  vi: {
    // Navbar
    about: 'Giới Thiệu',
    projects: 'Dự Án',
    contact: 'Liên Hệ',
    games: 'Trò Chơi',
    blog: 'Blog',
    achievements: 'Thành Tựu',
    tutorials: 'Hướng Dẫn Linux',
    techStack: 'Công Nghệ',
    secretPage: 'Trang Bí Mật',
    cv: 'CV',

    // Hero
    greeting: 'Xin chào, tôi là',
    roles: {
      linux: 'Chuyên Gia Linux',
      frontend: 'Lập Trình Viên Frontend',
      opensource: 'Người Đóng Góp Mã Nguồn Mở'
    },
    description: 'Chuyên gia Linux và lập trình viên frontend tự do, tập trung vào việc tạo ra các giải pháp web lấy người dùng làm trung tâm và đam mê phát triển mã nguồn mở.',
    viewProjects: 'Xem Dự Án',

    // About
    aboutMe: 'Giới Thiệu',
    aboutDescription: 'Tôi là một lập trình viên full-stack đam mê với trọng tâm là tạo ra các ứng dụng web đẹp và chức năng. Với chuyên môn trong cả công nghệ frontend và backend, tôi luôn cố gắng mang đến những giải pháp chất lượng cao tạo nên sự khác biệt.',
    skills: 'Kỹ Năng',
    education: 'Học Vấn',
    experience: 'Kinh Nghiệm',
    certifications: 'Chứng Chỉ',

    // Skills Categories
    frontendDev: 'Phát Triển Frontend',
    backendDev: 'Phát Triển Backend',
    toolsTech: 'Công Cụ & Công Nghệ',

    // Education
    university: 'Trường Đại học Sư phạm Kỹ thuật TP.HCM',
    degree: 'Cử nhân Công nghệ Thông tin',
    eduDescription: 'Chuyên ngành Kỹ thuật Phần mềm với trọng tâm về phát triển web và hệ thống phân tán.',
    achievements: [
        'Thành tựu & hoạt động',
    ],

    // Experience
    frontendRole: 'Lập Trình Viên Frontend',
    dscClub: 'CLB HCMUTE-DSC',
    dscDescription: 'Dẫn dắt phát triển frontend cho các dự án của câu lạc bộ, áp dụng các nguyên tắc UI/UX hiện đại và thiết kế responsive.',
    dscAchievements: [
      'Phát triển và bảo trì website chính thức của câu lạc bộ',
      'Dẫn dắt nhóm 5 lập trình viên cho các dự án',
      'Triển khai CI/CD pipeline cho việc tự động hóa deploy'
    ],

    freelanceRole: 'Lập Trình Viên Tự Do',
    selfEmployed: 'Tự Do',
    freelanceDescription: 'Làm việc với khách hàng để phát triển các ứng dụng web và giải pháp tùy chỉnh, tập trung vào trải nghiệm người dùng và tối ưu hiệu suất.',
    freelanceAchievements: [
      'Hoàn thành hơn 10 dự án thành công',
      'Duy trì đánh giá 5 sao từ khách hàng',
      'Chuyên môn về giải pháp React.js và Node.js'
    ],

    // Certifications
    reactCert: 'Chứng Chỉ React Developer',
    fullstackCert: 'Chứng Chỉ Full Stack Development',
    pythonCert: 'Chứng Chỉ Lập Trình Python',
    issuedBy: 'Cấp bởi',

    // Projects
    projectsTitle: 'Dự Án',
    viewProject: 'Xem Dự Án',
    categories: {
      all: 'Tất Cả',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Fullstack'
    },

    // Contact
    contactTitle: 'Liên Hệ',
    name: 'Họ Tên',
    email: 'Email',
    message: 'Tin Nhắn',
    send: 'Gửi Tin Nhắn',
    sending: 'Đang Gửi...',
    success: 'Gửi tin nhắn thành công!',
    error: 'Gửi tin nhắn thất bại. Vui lòng thử lại.'
  }
}; 