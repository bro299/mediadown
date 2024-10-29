import React from 'react';

const Header = () => {
  return (
    <header className="py-6 sm:py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <section className="floating" aria-labelledby="main-heading">
          <h1 id="main-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
            <i className="fas fa-download download-icon" aria-hidden="true"></i> MediaDown
          </h1>
          <p className="text-center mt-4 text-lg sm:text-xl md:text-2xl text-light/90 bouncing">
            Unduh video dan gambar media sosial dengan mudah! ✨
          </p>
        </section>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-32 text-primary/20 transform -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <i className="fas fa-square text-8xl wiggling"></i>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 text-secondary/20 transform translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <i className="fas fa-circle text-8xl floating"></i>
      </div>
    </header>
  );
};

export default Header;