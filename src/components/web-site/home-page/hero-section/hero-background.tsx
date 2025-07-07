"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// External background images
const slideImages = [
  "https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-commercial-banking-scaled.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
];

export default function HeroBackground() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      {slideImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          sizes="100vw"
          className={`object-cover bg_cover transition-opacity duration-1000 ease-in-out absolute ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          priority={index === 0}
        />
      ))}
      {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" /> */}
    </div>
  );
}
