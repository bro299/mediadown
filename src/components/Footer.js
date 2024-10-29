import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  // Handle click outside modal
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);

  const styles = {
    scrollingText: {
      animation: 'scroll 30s linear infinite',
    },
  };

  return (
    <footer className="py-6 sm:py-8 bg-dark/80 border-t-2 border-light/10">
      {/* Announcement Bar */}
      <div className="scrolling-text-container py-3 overflow-hidden w-full bg-dark/80" role="marquee">
        <div 
          className="scrolling-text text-base text-light/75 inline-block whitespace-nowrap pl-full"
          style={styles.scrollingText}
        >
          Hallo! untuk fitur fitur yang sebelumnya ada dan saat ini tidak ada akan tersedia kembali jika ada update pada server • Terimakasih telah menggunakan website ini! ✨
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-light/75 text-lg">&copy; 2024 MediaDown</p>
        
        {/* Footer Links */}
        <nav className="mt-4 space-x-6 text-base" aria-label="Footer navigation">
          <Link to="/privacy-policy" className="text-light/75 hover:text-primary transition duration-300">
            Kebijakan Privasi
          </Link>
          <Link to="/terms-conditions" className="text-light/75 hover:text-primary transition duration-300">
            Syarat dan Ketentuan
          </Link>
        </nav>
        
        {/* Social Links */}
        <nav className="mt-6 flex justify-center space-x-6" aria-label="Social media links">
          <a
            href="https://www.instagram.com/beginneer.noob/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/75 hover:text-primary transition duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="https://github.com/Beginneernoob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/75 hover:text-primary transition duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <button
            onClick={openModal}
            className="text-light/75 hover:text-primary transition duration-300 transform hover:scale-110"
            aria-label="Informasi Media yang Didukung"
          >
            <i className="fas fa-exclamation-circle text-3xl"></i>
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100 flex' : 'opacity-0 hidden'
        }`}
        role="dialog"
        aria-labelledby="modalTitle"
        onClick={handleModalClick}
      >
        <div className="bg-gradient-to-br from-dark to-dark/90 border-2 border-light/10 rounded-2xl p-8 m-auto w-[90%] max-w-[600px] relative transform transition-transform duration-300">
          <button
            className="absolute top-4 right-4 text-light/75 hover:text-primary transition-colors duration-300"
            onClick={closeModal}
            aria-label="Tutup modal"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          
          <h2 id="modalTitle" className="text-2xl font-bold text-primary mb-4">
            Media yang Didukung ✨
          </h2>
          <p className="text-light/75 mb-6">
            Berikut adalah platform media sosial yang dapat Anda unduh menggunakan MediaDown:
          </p>
          
          <div className="grid gap-4">
            {[
              {
                icon: "fab fa-instagram",
                name: 'Instagram',
                features: 'Post, Reels',
                color: 'text-[#E1306C]'
              },
              {
                icon: "fab fa-tiktok",
                name: 'TikTok',
                features: 'Video, Musik, Photo',
                color: 'text-[#00f2ea]'
              },
              {
                icon: "fab fa-facebook",
                name: 'Facebook',
                features: 'Video, Post with Media',
                color: 'text-[#1877f2]'
              },
              {
                icon: "fab fa-twitter",
                name: 'Twitter',
                features: 'Video',
                color: 'text-[#1DA1F2]'
              }
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-light/5 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 hover:bg-light/10 hover:-translate-y-0.5"
              >
                <div className={`w-10 h-10 flex items-center justify-center bg-light/10 rounded-lg ${platform.color}`}>
                  <i className={`${platform.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-light">{platform.name}</h3>
                  <p className="text-light/75 text-sm">{platform.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;