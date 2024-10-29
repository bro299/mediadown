import React from 'react';

const FacebookResult = ({ data }) => {
  const videoData = Array.isArray(data) ? data[0] : data;

  return (
    <div>
      <div id="videoInfo">
        <div className="flex items-center bg-light/5 rounded-2xl overflow-hidden border-2 border-light/10 p-6 card-2d">
          <img 
            src={videoData.thumbnail} 
            alt="Thumbnail video" 
            className="w-32 h-32 object-cover rounded-xl mr-6" 
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-primary floating">
              <i className="fab fa-facebook social-icon"></i> Facebook Video 📱
            </h2>
            <p className="text-light/75">Resolusi: {videoData.resolution}</p>
          </div>
        </div>
      </div>
      <div id="downloadOptions">
        <div className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
          <a 
            href={videoData.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
          >
            Unduh Video <i className="fas fa-play-circle bouncing"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookResult;