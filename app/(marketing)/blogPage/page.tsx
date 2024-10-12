// pages/blog-list.tsx
import React from 'react';
import Link from 'next/link';

const BlogList: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 pt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Page Header */}
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">AI Blog</h1>
          <p className="mt-2">Explore articles about the importance of AI, its applications, and the future of technology.</p>
        </div>

        {/* Blog List Content */}
        <div className="p-8 space-y-8">
          {/* Blog Post 1 */}
          <Link href="#">
            <div className="border-b pb-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Why AI is Important</h2>
              <p className="text-gray-700 mb-4">
                Discover how Artificial Intelligence is transforming industries, reshaping the future, and impacting modern life.
              </p>
              <div className="text-blue-600 font-semibold hover:underline">
                Read More &rarr;
              </div>
            </div>
          </Link>

          {/* Blog Post 2 */}
          <Link href="#">
            <div className="border-b pb-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">AI in Healthcare</h2>
              <p className="text-gray-700 mb-4">
                Learn about how AI is revolutionizing healthcare, from diagnosing diseases to predicting patient outcomes.
              </p>
              <div className="text-blue-600 font-semibold hover:underline">
                Read More &rarr;
              </div>
            </div>
          </Link>

          {/* Blog Post 3 */}
          <Link href="#">
            <div className="border-b pb-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">The Future of AI</h2>
              <p className="text-gray-700 mb-4">
                Explore how AI will shape the future, from self-driving cars to intelligent virtual assistants.
              </p>
              <div className="text-blue-600 font-semibold hover:underline">
                Read More &rarr;
              </div>
            </div>
          </Link>

          {/* Add more blog posts as needed */}
          
        </div>
      </div>

      {/* back btn */}
      <div className="p-4 flex justify-center">
          <Link href="/">
            <div className="text-blue-600 font-semibold hover:underline">
              &larr; Go Back
            </div>
          </Link>
        </div>
    </div>
  );
};

export default BlogList;
