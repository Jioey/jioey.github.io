'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ImageGalleryProps {
  images: { src: string; pref?: string; alt: string; caption?: React.ReactNode }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Image Display */}
      <div className="relative w-full h-full group overflow-hidden rounded-xl">
        <picture>
          {/* Preferred source */}
          {images[currentIndex].pref && (
            <source srcSet={images[currentIndex].pref} />
          )} 

          {/* Next.js Image component as the default source */}
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill={true}
            loading="lazy"
            style={{
              objectFit: 'cover',
            }}
          />
        </picture>

        {/* Overlay Text */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 w-full bg-gray-500/50 p-2 pl-4 text-white
            transform translate-y-full opacity-0
            transition-all duration-300 ease-in-out
            group-hover:translate-y-0 group-hover:opacity-100"
          >
            {images[currentIndex].caption}
          </div>
        )}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
      >
        <FaAngleLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ImageGallery;
