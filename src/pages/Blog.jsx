import React from "react";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Blog
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 text-lg leading-relaxed">
            Read our latest articles on fitness, nutrition, and healthy
            lifestyle tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
