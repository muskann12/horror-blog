'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageSrc }) => {
  const [likes, setLikes] = useState<number>(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden p-2 bg-gray-800 text-white shadow-lg transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(255,69,0,0.8)]"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-orange-400">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Views: 188k</span>
        <div className="flex items-center space-x-2">
          <button onClick={handleLike} className="text-yellow-400">
            👍 {likes}
          </button>
          <button className="text-red-500 hover:text-red-700">Read More</button>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewSection: React.FC = () => {
  const [review, setReview] = useState<string>('');

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    alert(`Review Submitted: ${review}`);
    setReview('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg mt-12">
      <h4 className="text-lg font-semibold font-creepster text-red-500">Add Your Review</h4>
      <input 
        type="text" 
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here..." 
        className="w-full p-2 border border-gray-300 rounded mt-2"
      />
      <button
        onClick={handleReviewSubmit}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-900 transition-colors"
      >
        Submit Review
      </button>
    </div>
  );
};

const CommentsSection: React.FC = () => {
  const [comment, setComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    alert(`Comment Submitted: ${comment}`);
    setComment('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg mt-8  ">
      <h4 className="text-lg font-semibold font-creepster text-red-500">Add a Comment</h4>
      <input 
        type="text" 
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment here..." 
        className="w-full p-2 border border-gray-300 rounded mt-2"
      />
      <button
        onClick={handleCommentSubmit}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-900 transition-colors"
      >
        Submit Comment
      </button>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-6 text-white">
      <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
        <FaInstagram size={24} />
      </a>
      <a href="https://www.linkedin.com" className="text-blue-600 hover:text-blue-800">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen p-8">
      <div className="container mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-center mb-8 font-creepster  text-red-500 py-5">Horror Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard 
              title="Horror Doll: My House Has a Witch" 
              description="A haunted doll that's believed to harbor an ancient witch's spirit has caused terrifying events in my house..." 
              imageSrc="/images/doll.png" 
            />
            <BlogCard 
              title="Strange Man in the Mirror" 
              description="I witnessed a figure appear in my mirror, but I live alone... A creepy encounter that has haunted me forever." 
              imageSrc="/images/m1.png" 
            />
            <BlogCard 
              title="The Haunted Forest Behind My House" 
              description="There's a forest behind my house that no one dares to enter after dark... Strange noises and sightings keep people away." 
              imageSrc="/images/forest.png" 
            />
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <ReviewSection />
          <CommentsSection />
        </div>
      </div>

      <div className="bg-gray-900 text-white p-6 mt-10 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">How to Survive Myths about Ghosts</h2>
        <p className="text-gray-300">
          Are you afraid of the dark or hearing strange noises? Myths about ghosts have terrified generations, 
          but remember to stay calm. Knowledge can be your armor against fear. Learn the origins of these myths 
          and equip yourself to brave the unknown.
        </p>
        <p className="text-gray-300 mt-4">
          Our blog explores real horror stories, survival tips, and psychological insights into the paranormal, aimed at both thrilling and educating our readers. Dive deep into tales of the supernatural and gain a new perspective on what may lie beyond the ordinary. Stay with us for a unique blend of suspense, facts, and survival guidance.
        </p>
      </div>

      <div className="bg-gray-900 text-white p-6 mt-8 rounded shadow-lg">
        <h2 className="text-xl font-semibold text-orange-500">Books, Movies & More</h2>
        <p className="text-gray-300 mt-2">
          Explore our top recommendations for horror books, thrilling movies, and exclusive content on our channel. 
          Connect with us and join our community to stay updated on the latest in the horror genre. Subscribe, comment, and share your own horror stories!
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold font-creepster text-red-500 mb-4">Follow Us on Social Media</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default BlogPage;
