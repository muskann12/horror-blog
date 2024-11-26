'use client'
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server.
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-cover bg-center p-10 pt-24" style={{ backgroundImage: "url('/images/bg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text contrast */}
      <div className="max-w-4xl mx-auto text-white relative z-10">
        
        {/* Title with motion effect */}
        <motion.h1
          className="text-4xl font-extrabold font-creepster text-red-500 text-center mb-6 py-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tell Us Your Story
        </motion.h1>

        <p className="text-lg mb-3 text-center font-bold">
          Have a spooky story to share or want to reach out? We'd love to hear from you!
        </p>

        {/* Form with motion effect */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 max-w-lg mx-auto transform transition-all duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-lg font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-lg font-semibold">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full p-2 bg-gray-700 text-white rounded-lg"
              placeholder="Share your story or message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Media Section with motion effect */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold font-creepster text-red-500 mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
