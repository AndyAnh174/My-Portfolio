import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        // Kiểm tra xem có đang ở trang chủ không
        if (window.location.pathname !== '/') {
            // Nếu không ở trang chủ, navigate về trang chủ với state
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            // Nếu đã ở trang chủ, scroll đến section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return scrollToSection;
}; 