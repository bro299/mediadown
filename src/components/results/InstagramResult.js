import React from 'react';

const InstagramResult = ({ data }) => {
  const mediaUrlList = data.url;
  const isSingleVideo = mediaUrlList.length === 1 && mediaUrlList[0].includes('.mp4');

  const VideoInfo = () => (
    <div className="flex items-center bg-light/5 rounded-2xl overflow-hidden border-2 border-light/10 p-6 card-2d">
      <video controls className="w-32 h-32 rounded-xl mr-6 object-cover">
        <source src={mediaUrlList[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-primary floating">
          <i className="fab fa-instagram social-icon"></i> Instagram Reels ✨
        </h2>
      </div>
    </div>
  );

  const SlidesInfo = () => (
    <div className="flex items-center bg-light/5 rounded-2xl overflow-hidden border-2 border-light/10 p-6 card-2d">
      <h2 className="text-2xl font-bold mb-2 text-primary floating">
        <i className="fab fa-instagram social-icon"></i> Instagram Post (Slides) 📷
      </h2>
    </div>
  );

  const VideoDownloadOption = () => (
    <div className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
      <a 
        href={mediaUrlList[0]} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
      >
        Unduh Video <i className="fas fa-video bouncing"></i>
      </a>
    </div>
  );

  const ImageDownloadOptions = () => (
    <>
      {mediaUrlList.map((url, index) => (
        <div key={index} className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
          <img src={url} alt={`Slide ${index + 1}`} className="w-32 h-32 object-cover rounded-xl mr-6" />
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
          >
            Unduh Gambar {index + 1} <i className="fas fa-image bouncing"></i>
          </a>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div id="videoInfo">
        {isSingleVideo ? <VideoInfo /> : <SlidesInfo />}
      </div>
      <div id="downloadOptions">
        {isSingleVideo ? <VideoDownloadOption /> : <ImageDownloadOptions />}
      </div>
    </div>
  );
};

export default InstagramResult;