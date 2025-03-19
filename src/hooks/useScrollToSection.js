import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
    // Thêm kiểm tra để tránh lỗi khi useNavigate trả về null
    let navigate;
    try {
        navigate = useNavigate();
    } catch (error) {
        // Fallback function nếu không thể sử dụng useNavigate
        navigate = (path, options) => {
            console.warn('Navigation không khả dụng, đang chuyển hướng bằng window.location');
            if (path === '/') {
                window.location.href = `/${options?.state?.scrollTo ? '#' + options.state.scrollTo : ''}`;
            } else {
                window.location.href = path;
            }
        };
    }

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