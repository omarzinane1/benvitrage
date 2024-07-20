// components/ImageSlider.tsx

import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  currentIndex: number;
  onChangeIndex: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, currentIndex, onChangeIndex }) => {
  const [currentImage, setCurrentImage] = useState(currentIndex);

  useEffect(() => {
    setCurrentImage(currentIndex);
  }, [currentIndex]);

  const nextSlide = () => {
    const newIndex = (currentImage + 1) % images.length;
    onChangeIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImage - 1 + images.length) % images.length;
    onChangeIndex(newIndex);
  };

  return (
    <div className="relative w-[50%] h-96">
      <img src={images[currentImage]} className="object-cover w-full h-full" alt={`Slide ${currentImage}`} />
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
