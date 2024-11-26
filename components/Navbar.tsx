"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent text-white p-4 fixed w-full z-10 top-0 left-0 shadow-md">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          {/* Image logo */}
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 font-mono font-extrabold mr-7 text-xl">
          <Link href="/" className="hover:text-red-600 transition duration-300">
            HOME
          </Link>
          <Link href="/about" className="hover:text-red-600 transition duration-300">
            ABOUT
          </Link>
          <Link href="/stories" className="hover:text-red-600 transition duration-300">
            STORIES
          </Link>
          <Link href="/blogs" className="hover:text-red-600 transition duration-300">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition duration-300">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            <span>{isMobileMenuOpen ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 space-y-4 text-center font-mono font-extrabold text-xl"
          initial={{ opacity: 0, x: 300 }} // Start from the right side
          animate={{ opacity: 1, x: 0 }}   // Animate to original position
          exit={{ opacity: 0, x: 300 }}    // Exit animation
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="block hover:text-red-600 transition duration-300">
            HOME
          </Link>
          <Link href="/about" className="block hover:text-red-600 transition duration-300">
            ABOUT
          </Link>
          <Link href="/stories" className="block hover:text-red-600 transition duration-300">
            STORIES
          </Link>
          <Link href="/blogs" className="block hover:text-red-600 transition duration-300">
            BLOG
          </Link>
          <Link href="/contact" className="block hover:text-red-600 transition duration-300">
            CONTACT
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
