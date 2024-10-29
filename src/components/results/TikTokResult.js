import React from 'react';

const TikTokResult = ({ data }) => {
  return (
    <div>
      <div id="videoInfo">
        <div className="flex items-center bg-light/5 rounded-2xl overflow-hidden border-2 border-light/10 p-6 card-2d">
          <img 
            src={data.cover} 
            alt="Thumbnail video" 
            className="w-32 h-32 object-cover rounded-xl mr-6" 
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-primary floating">
              <i className="fab fa-tiktok social-icon"></i> {data.title || 'TikTok Video'} 🎵
            </h2>
            <p className="text-light/75">
              Durasi: {data.duration > 0 ? `${data.duration} detik` : 'N/A'}
            </p>
          </div>
        </div>
      </div>
      <div id="downloadOptions">
        {data.hdplay && (
          <div className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
            <div>
              <span className="font-bold text-xl text-secondary">Video HD ✨</span>
              <p className="text-light/75 text-sm">
                Size: {data.hd_size ? data.hd_size.format : 'N/A'}
              </p>
            </div>
            <a 
              href={data.hdplay} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
            >
              Unduh HD <i className="fas fa-download bouncing"></i>
            </a>
          </div>
        )}
        
        {data.play && (
          <div className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
            <div>
              <span className="font-bold text-xl text-secondary">Video 🎥</span>
              <p className="text-light/75 text-sm">
                Size: {data.size ? data.size.format : 'N/A'}
              </p>
            </div>
            <a 
              href={data.play} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
            >
              Unduh Video <i className="fas fa-download bouncing"></i>
            </a>
          </div>
        )}
        
        {data.music && (
          <div className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
            <div>
              <span className="font-bold text-xl text-secondary">Musik 🎵</span>
            </div>
            <a 
              href={data.music} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
            >
              Unduh Musik <i className="fas fa-music bouncing"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TikTokResult;