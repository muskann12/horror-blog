// /pages/stories/index.tsx
'use client';
import Link from "next/link";
import { motion } from "framer-motion";

const BlogPage = () => {
  const stories = [
    { id: "1", title: "The Haunted House", image: "/images/house2.png", description: "A terrifying journey into a house filled with restless spirits." },
    { id: "2", title: "The Shadow in the Woods", image: "/images/shadoww.png", description: "Unseen eyes lurking in the forest, watching every move." },
    { id: "3", title: "Whispers in the Dark", image: "/images/h3.png", description: "Eerie voices fill the night, leading to unspeakable secrets." },
    { id: "4", title: "The Cursed Doll", image: "/images/doll.png", description: "An ancient doll holds a dreadful curse that haunts anyone who owns it." },
    { id: "5", title: "The Forgotten Cemetery", image: "/images/cc.png", description: "The dead don’t rest in this forsaken graveyard." },
    { id: "6", title: "The Whispering Shadows", image: "/images/ss.png", description: "Mysterious shadows communicate through whispers that chill the soul." },
    { id: "7", title: "The Haunted Mirror", image: "/images/mm.png", description: "A mirror that reflects more than just your image, revealing hidden fears." },
    { id: "8", title: "The Creeping Darkness", image: "/images/dd.png", description: "An unstoppable darkness consumes everything it touches." },
  ];

  return (
    <div
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/images/bg.png')",
      }}
    >
      <br />
      <br />
      <div className="text-center text-white mb-12">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold font-creepster tracking-wide bg-gradient-to-r from-red-600 to-yellow-300 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Horror Stories
        </motion.h1>
      </div>

      {/* Grid Layout for Story Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="relative bg-black bg-opacity-50 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Story Card with Unique Image */}
            <div
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url(${story.image})` }}
            ></div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">{story.title}</h2>
              <p className="text-sm mb-4">{story.description}</p>
              <Link
                href={`/stories/${story.id}`}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all"
              >
                Read Story
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
