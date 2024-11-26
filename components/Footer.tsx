"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center flex flex-col items-center px-6 py-10 text-center bg-black"
       // Add your image path here
    >
      {/* Semi-Transparent Overlay with Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      
      <div className="relative z-10 text-white font-light opacity-80">
        <p className="text-lg sm:text-xl mb-4">
          &copy; 2024 Creatures Studio. All rights reserved.
        </p>
        <p className="text-sm">
          Fear is just the beginning—explore the unknown with us.
        </p>
      </div>
    </div>
  );
};

export default Footer;
