import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

// Image Component với error handling
const ImageWithFallback = ({ src, alt, className }) => {
  const [imageState, setImageState] = useState('loading');
  const [imageSrc, setImageSrc] = useState(src);
  const [imageAspect, setImageAspect] = useState(null);

  const handleImageLoad = (e) => {
    setImageState('loaded');
    const img = e.target;
    const aspect = img.naturalWidth / img.naturalHeight;
    setImageAspect(aspect);
  };

  const handleImageError = () => {
    setImageState('error');
    // Fallback image - có thể thay bằng URL ảnh mặc định
    setImageSrc('https://via.placeholder.com/400x500/e5e7eb/9ca3af?text=Image+Not+Found');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
      {/* Loading skeleton */}
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      
      {/* Main image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`${
          imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 max-w-full max-h-full object-contain`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        style={{
          width: imageAspect && imageAspect > 1 ? '100%' : 'auto',
          height: imageAspect && imageAspect <= 1 ? '100%' : 'auto',
        }}
      />
      
      {/* Error state overlay */}
      {imageState === 'error' && (
        <div className="absolute inset-0 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-red-400 mb-2">⚠️</div>
            <div className="text-xs text-red-600">Image failed to load</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function CardEffect({ list }) {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute -inset-8 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
        
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative"
          style={{ maxHeight: '80vh' }}
          // Tối ưu performance
          spaceBetween={0}
          slidesPerView={1}
          watchSlidesProgress={true}
          preloadImages={false}
          lazy={true}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-white via-gray-50 to-white flex flex-col rounded-3xl shadow-2xl border border-white/50 overflow-hidden relative">
                
                {/* Glassmorphism header */}
                <div className="bg-white/20 backdrop-blur-md border-b border-white/30 p-3 flex-shrink-0">
                  <h3 className="text-base font-bold text-gray-800 truncate text-center">
                    {item.title || `Ảnh ${index + 1}`}
                  </h3>
                </div>
                
                {/* Image container - adjusted for better image display */}
                <div className="flex-1 p-3 min-h-0">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title || `Photo ${index + 1}`}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Bottom info bar */}
                <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 p-3 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow-lg opacity-60"></div>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {index + 1} / {list.length}
                    </div>
                  </div>
                </div>
                
                {/* Card border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 via-transparent to-blue-400/20 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation hint */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
          <p className="text-sm text-gray-600 font-medium">Swipe để xem thêm • {list.length} ảnh</p>
        </div>
      </div>
    </div>
  );
}
