"use client"

import { useState } from 'react';
import ImageSlider from './ImageSlider';

const RightSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const thumbnails = [
    '/alum.png',
    '/alum2.png',
    '/alum3.png',
    '/bg.png',
    '/alum.png',
    '/alum2.png',
    '/alum3.png',
    '/bg.png',
  ];

  const handleChangeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="grid grid-flow-row grid-cols-3">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            className={`w-full h-16 object-cover mr-2 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handleChangeImage(index)}
          />
        ))}
      </div>
      <ImageSlider images={thumbnails} currentIndex={currentImageIndex} onChangeIndex={handleChangeImage} />
    </div>
  );
};

export default RightSection;
