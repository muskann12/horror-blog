"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div 
      className="relative w-full bg-cover bg-center flex flex-col backdrop-blur-lg" 
      style={{ backgroundImage: "url('/images/bg.png')" }} // Add your image path here
    >
      {/* Overlay Container */}
      <div className="flex flex-col items-center px-6 py-20 text-center w-full bg-black bg-opacity-50">
        <br />
        <br />
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold font-creepster mb-8 tracking-wide bg-gradient-to-r from-red-600 to-yellow-300 text-transparent bg-clip-text"
        >
          Creatures Studio
        </motion.h1>

        {/* Content Section */}
        <div className="max-w-3xl text-white opacity-80 font-thin">
          {/* Animated Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-2xl font-thin opacity-5 leading-relaxed mb-6"
          >
            Fear is one of the most profound emotions we experience. It is raw,
            unfiltered, and deeply rooted in the human psyche. At creATURES
            Studio, we embrace this sacred emotion, exploring its depths
            through stories that intrigue and terrify. Our platform is a haven
            for those who find beauty in the eerie and fascination in the
            unexplained.
          </motion.p>

          {/* Animated Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-2xl font-light leading-relaxed mb-6"
          >
            My journey with horror began early. Growing up, I was surrounded by
            countless ghost stories and urban legends that stirred my
            imagination. Every shadow seemed alive, every creak of the floor a
            whisper from the beyond. What started as fear soon transformed into
            fascination—a passion for the dark and the unknown.
          </motion.p>

          {/* Animated Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-lg sm:text-2xl font-light leading-relaxed mb-6"
          >
            creatures Studio is more than just a blog—it’s a journey into the
            shadows of the human mind. Our stories, interviews, and articles
            aim to captivate and terrify, offering a glimpse into the world of
            the unknown. Here, we preserve the lost art of storytelling, giving
            life to forgotten folklore and chilling experiences that deserve to
            be heard.
          </motion.p>

          {/* Animated Paragraph 4 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="text-lg sm:text-2xl font-light leading-relaxed"
          >
            Join us as we dive into the realms of fear and fascination. Let the
            tales we share haunt your nights and stir your imagination. For in
            every story, there lies a spark of truth—and perhaps a shadow that
            lingers.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
