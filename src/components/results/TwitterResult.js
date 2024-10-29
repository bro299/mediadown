import React from 'react';

const TwitterResult = ({ data }) => {
  return (
    <div>
      <div id="videoInfo">
        <div className="flex items-center bg-light/5 rounded-2xl overflow-hidden border-2 border-light/10 p-6 card-2d">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-primary floating">
              <i className="fab fa-twitter social-icon"></i> Twitter {data.type.charAt(0).toUpperCase() + data.type.slice(1)} 🐦
            </h2>
            <p className="text-light/75">
              {data.media.length} {data.type}{data.media.length > 1 ? 's' : ''} tersedia
            </p>
          </div>
        </div>
      </div>
      <div id="downloadOptions">
        {data.type === 'video' ? (
          data.media.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
              <div>
                <span className="font-bold text-xl text-secondary">
                  Video - Kualitas {item.quality} 🎥
                </span>
              </div>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
              >
                Unduh Video <i className="fas fa-download bouncing"></i>
              </a>
            </div>
          ))
        ) : (
          data.media.map((url, index) => (
            <div key={index} className="flex items-center justify-between bg-light/5 p-6 rounded-2xl hover:bg-light/10 transition duration-300 border-2 border-light/10 card-2d">
              <img 
                src={url} 
                alt={`Twitter Image ${index + 1}`} 
                className="w-32 h-32 object-cover rounded-xl mr-6" 
              />
              <div>
                <span className="font-bold text-xl text-secondary">
                  Gambar {index + 1} 📷
                </span>
              </div>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-2d px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition duration-300 font-bold text-lg flex items-center gap-2"
              >
                Unduh Gambar <i className="fas fa-download bouncing"></i>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TwitterResult;