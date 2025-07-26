import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  // Simulate loading images from the slider-images folder
  useEffect(() => {
    const imageList = [
      '/slider-images/1.jpg',
      '/slider-images/2.jpg', 
      '/slider-images/3.jpg',
      '/slider-images/4.jpg',
      '/slider-images/5.jpg',
      '/slider-images/6.jpg'
    ];
    setImages(imageList);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Left Panel - Thumbnails */}
          <div className="w-24 bg-gray-900 border-r border-gray-700 flex flex-col items-center py-6 space-y-4">
            <div className="text-teal-400 text-xs font-mono tracking-wider mb-4">
              GALLERY
            </div>
            
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                  currentImage === index 
                    ? 'ring-2 ring-teal-400 ring-offset-2 ring-offset-gray-900 shadow-lg shadow-teal-400/20' 
                    : 'ring-1 ring-gray-600 hover:ring-gray-500'
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23374151'/%3E%3Ctext x='32' y='32' font-family='monospace' font-size='12' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${index + 1}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                
                {/* Active indicator */}
                {currentImage === index && (
                  <div className="absolute inset-0 bg-teal-400/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            ))}
            
            {/* Bottom indicator */}
            <div className="mt-auto text-gray-500 text-xs font-mono">
              {currentImage + 1}/{images.length}
            </div>
          </div>

          {/* Right Panel - Main Image */}
          <div className="flex-1 bg-gray-800 p-8 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl">
              {images.length > 0 ? (
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
                  <img
                    src={images[currentImage]}
                    alt={`Main slide ${currentImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231f2937'/%3E%3Ctext x='400' y='300' font-family='monospace' font-size='24' fill='%236b7280' text-anchor='middle' dy='.3em'%3EImage ${currentImage + 1}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                  
                  {/* Image info */}
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
                    <div className="text-teal-400 text-sm font-mono">
                      IMAGE_{String(currentImage + 1).padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {images[currentImage]?.split('/').pop() || 'Unknown'}
                    </div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 text-teal-400 hover:bg-gray-800 hover:border-teal-400 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 text-teal-400 hover:bg-gray-800 hover:border-teal-400 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="w-full h-full rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 text-lg font-mono mb-2">NO IMAGES LOADED</div>
                    <div className="text-gray-600 text-sm">Check slider-images folder</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider; 