"use client";
import React, { useState } from 'react';

const HeroSection = () => {
  const [isJumpScareVisible, setIsJumpScareVisible] = useState(false);

  // Show the jump scare modal
  const handleJumpScare = () => {
    setIsJumpScareVisible(true);
  };

  // Close the jump scare modal
  const closeJumpScare = () => {
    setIsJumpScareVisible(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/h1.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false} // Hides the video controls
      ></video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center text-center text-white">
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-creepster leading-tight mb-5 bg-gradient-to-r from-red-600 to-yellow-300 text-transparent bg-clip-text">
            Tales That Will Keep You Up at Night
          </h1>
          <p className="text-lg opacity-40 md:text-2xl font-thin mb-8">
            Dare to dive into the darkest corners of fear and mystery.
            <br />
            Can you handle the terror that lies within?
          </p>
          <br />
          <button
            onClick={handleJumpScare}
            className="bg-gradient-to-r from-red-800 to-gray-950 text-white font-extralight py-2 px-10 rounded-md text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-gradient-to-l"
          >
            Click At Your Own Risk
          </button>
        </div>
      </div>

      {/* Jump Scare Modal */}
      {isJumpScareVisible && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className="relative w-full h-full">
            {/* Jump Scare Video */}
            <video
              src="/images/jm.mp4" // Add your jump scare video path here
              autoPlay
              onEnded={closeJumpScare} // Automatically close after video ends
              className="w-full h-full object-cover"
              controls={false}
            ></video>

            {/* Close Button */}
            <button
              onClick={closeJumpScare}
              className="absolute top-4 right-4 text-red-500 text-3xl font-bold hover:text-red-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
