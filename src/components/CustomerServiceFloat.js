import React from 'react';

const CustomerServiceFloat = () => {
  return (
    <aside className="cs-float">
      <a
        href="https://wa.link/41izz6"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
        aria-label="Hubungi customer service"
      >
        <img
  src="/help-desk.png"  // Tambahkan forward slash di depan
  alt="Customer Service"
  className="w-[60px] h-[60px] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
/>
        
      </a>
    </aside>
  );
};

export default CustomerServiceFloat;