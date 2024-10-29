import React, { useState } from 'react';

const DownloadForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [isPasted, setIsPasted] = useState(false);

  const handlePaste = async () => {
    if (!isPasted) {
      try {
        const text = await navigator.clipboard.readText();
        setUrl(text);
        setIsPasted(true);
      } catch (error) {
        console.error('Failed to paste:', error);
      }
    } else {
      setUrl('');
      setIsPasted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow relative">
          <label htmlFor="videoUrl" className="sr-only">URL Media</label>
          <input
            type="url"
            id="videoUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Tempel URL media di sini"
            required
            className="w-full px-6 py-4 rounded-2xl bg-light/10 border-2 border-light/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-light placeholder-light/50 text-base sm:text-lg transition-all duration-300"
          />
          <button
            type="button"
            onClick={handlePaste}
            aria-label="Tempel URL"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-light/50 hover:text-light focus:outline-none transition-colors duration-300"
          >
            <i className={`fas fa-${isPasted ? 'times' : 'paste'} text-2xl`} aria-hidden="true"></i>
          </button>
        </div>
        <button
          type="submit"
          className="btn-2d px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition duration-300 ease-in-out font-bold text-lg sm:text-xl flex items-center justify-center gap-2"
        >
          Unduh <i className="fas fa-download bouncing" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default DownloadForm;
