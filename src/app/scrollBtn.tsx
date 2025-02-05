'use client'

const ScrollToTopButton: React.FC = () => {
    // Função que rola suavemente até o topo
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-12 right-10 p-4 bg-gradient-to-t from-[#bf4e83e1] to-[#000a90d4] text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ↑
      </button>
    );
  };

  export default ScrollToTopButton;