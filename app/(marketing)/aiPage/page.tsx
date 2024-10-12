// pages/blog.tsx
import React from 'react';
import Link from 'next/link';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 pt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">

      

        {/* Blog Header */}
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Why AI is Important</h1>
          <p className="mt-2">Understanding the significance of Artificial Intelligence in today&apos;s world</p>
        </div>

        {/* Blog Content */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Artificial Intelligence (AI) is rapidly transforming industries, reshaping the future, and impacting nearly every aspect of modern life. 
              From healthcare and finance to transportation and entertainment, AI has the potential to revolutionize how we live and work.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What is AI?</h2>
            <p className="mb-6">
              AI refers to the simulation of human intelligence in machines. These machines are designed to think, learn, and adapt to new situations 
              in ways similar to how humans do. AI can range from simple algorithms that sort data to complex neural networks that can generate creative ideas.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why is AI Important?</h2>
            <ul className="list-disc list-inside mb-6">
              <li>AI enhances efficiency by automating repetitive tasks, freeing up human labor for more strategic work.</li>
              <li>It improves decision-making through data-driven insights and predictive analytics.</li>
              <li>AI-powered systems can outperform humans in specific tasks, such as image recognition, speech processing, and playing complex games.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Applications of AI</h2>
            <p className="mb-6">
              AI is used across various industries to streamline processes and create innovative solutions:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Healthcare:</strong> AI algorithms can diagnose diseases, recommend treatments, and predict patient outcomes.</li>
              <li><strong>Finance:</strong> AI helps detect fraudulent transactions and make investment decisions.</li>
              <li><strong>Transportation:</strong> Self-driving cars and intelligent traffic management systems are powered by AI.</li>
              <li><strong>Customer Service:</strong> Chatbots and virtual assistants provide instant support to users and improve customer experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">The Future of AI</h2>
            <p className="mb-6">
              As AI continues to evolve, its potential applications are limitless. AI could help address global challenges such as climate change, 
              healthcare accessibility, and education. However, ethical considerations, such as privacy, bias, and job displacement, must be addressed 
              as we move forward.
            </p>

            <p className="italic mb-6">&quot;The rise of AI represents a powerful tool to shape the future, but it also calls for responsibility and governance 
              to ensure it benefits humanity as a whole.&quot;</p>

          </div>
        </div>
      </div>

                 {/* Back Button */}
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

export default Blog;
