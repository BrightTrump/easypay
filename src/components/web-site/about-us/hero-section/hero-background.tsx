"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// External background images
const slideImages = [
  "https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-commercial-banking-scaled.jpg",
  "https://neu.edu.tr/wp-content/uploads/2018/06/06/foto.jpg?ver=fb8fe0d16257a110ef5d188fc272ecd1",
  "https://www.shutterstock.com/image-photo/smiling-senior-couple-sitting-around-600nw-2198394045.jpg",
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black" />
    </div>
  );
}
