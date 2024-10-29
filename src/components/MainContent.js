import React, { useState } from 'react';
import DownloadForm from './DownloadForm';
import ResultSection from './ResultSection';
import LoadingSpinner from './LoadingSpinner';

const MainContent = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (mediaUrl) => {
    setLoading(true);
    setResult(null);

    try {
      let apiUrl;
      if (mediaUrl.includes('instagram.com')) {
        apiUrl = `https://api.nyxs.pw/dl/ig?url=${encodeURIComponent(mediaUrl)}`;
      } else if (mediaUrl.includes('facebook.com')) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/fbdl?url=${encodeURIComponent(mediaUrl)}`;
      } else if (mediaUrl.includes('tiktok.com')) {
        apiUrl = `https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(mediaUrl)}`;
      } else if (mediaUrl.includes('twitter.com') || mediaUrl.includes('x.com')) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/twitter?url=${encodeURIComponent(mediaUrl)}`;
      } else {
        throw new Error('URL tidak didukung.');
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status) {
        setResult({
          type: mediaUrl.includes('instagram.com') ? 'instagram' :
                mediaUrl.includes('facebook.com') ? 'facebook' :
                mediaUrl.includes('tiktok.com') ? 'tiktok' : 'twitter',
          data: data
        });
      } else {
        throw new Error('Gagal mengambil informasi media.');
      }
    } catch (error) {
      alert('Terjadi kesalahan: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
      <section className="max-w-4xl mx-auto bg-dark/80 rounded-3xl shadow-2xl overflow-hidden border-2 border-light/10 card-2d">
        <div className="p-6 sm:p-8">
          <DownloadForm onSubmit={handleSubmit} />
          {loading && <LoadingSpinner />}
          {result && <ResultSection result={result} />}
        </div>
      </section>
    </main>
  );
};

export default MainContent;