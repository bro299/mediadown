import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-12" role="alert" aria-busy="true">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
      <p className="mt-6 text-xl text-light/90 floating">Sedang memproses link Anda...</p>
    </div>
  );
};

export default LoadingSpinner;