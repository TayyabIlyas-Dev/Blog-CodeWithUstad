'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js"; // Import Typed.js
import SubscriptionCard from "./components/SubscriptionCard";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Javascript", "Python", "Artificial Intelligence", "Machine Learning"],
      typeSpeed: 32,
      backSpeed: 19,
      loop: true,
    });

    // Cleanup function to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-between pt-20 py-2 px-4">
      <div className="flex z-10 w-full max-w-5xl items-center justify-center text-sm flex-col cursor-pointer">
        <h1 className="text-center font-bold text-[#0400ff] text-3xl md:text-4xl lg:text-5xl pt-8">
          <span className="text-black">Welcome to <br /></span>CodeWithUstaad
        </h1>
        <p className="py-5 text-center">
          <span className="animate-color-change">A Blog For Coders</span>{" "}
          <span className="animate-color-change2">Created by Coder.</span>
        </p>
        <p className="pb-8">for</p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h2 className="text-2xl font-bold text-center">
          Learn <span className="auto-type text-[#0400ff]"></span>
        </h2>
      </div>

      <div className="mb-32 mt-20 lg:mt-20 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left gap-9">
        <Link
          href="/courses"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change">
            Courses{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn with an interactive courses with&nbsp;quizzes!
          </p>
        </Link>

        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change2">
            My Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Languages, New features and APIs.
          </p>
        </Link>

        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change2">
            My Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            &quot;Unlocking the Future: Dive Deep into Programming, AI, ML, and the Latest Tech Innovations.&quot;
          </p>
        </Link>
      </div>

      {/* Top Programming Blogs */}
      <section>
        <div className="pt-16 sm:px-16">
          <h2 className="p-1 sm:p-4 text-center font-extrabold text-3xl sm:text-5xl">
            Top Programming Blogs In 2024
          </h2>

          {/* Hashtags Section */}
          <div className="flex flex-wrap text-xs sm:text-sm justify-center text-[#0400ff] gap-2 p-4 sm:gap-10 md:gap-20">
            <div>#Programming</div>
            <div>#Productivity</div>
            <div>#TopBlogging</div>
            <div>#OpenSource</div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-3 py-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Link href="/aiPage">
                <Image
                  src="/Blog dev img-2.png" // image path (public folder)
                  alt="Blog Image Of Dev"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Why We Use Ai </h3>
                  <p className="font-medium py-6">
                    <b>AI</b> automates tasks, boosts efficiency, and improves decision-making.
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Link href="/blogPage">
                <Image
                  src="/Blog dev img-3.png"
                  alt="Blog Image Of Dev"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">What is Blogs</h3>
                  <p className="font-medium py-6">
                    A <b>Blog</b> is a platform to share ideas and knowledge. It&apos;s used to inform, engage, or promote.
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Link href="/programmingPage">
                <Image
                  src="/Blog dev img-1.png"
                  alt="Blog Image Of Dev"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Why Follow Programming Blogs</h3>
                  <p className="font-medium py-6">
                    To succeed as a developer, dive into <b>coding</b>. The field is vast with endless knowledge to gain.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Cards Section */}
      <section>
        <div className="m-6 py-8">
          <h3 className="text-center font-bold text-4xl text-[#0400ff] m-6 pb-8">
            Subscriptions
          </h3>
          <div className="Cards flex gap-10 flex-wrap justify-center items-center">
            <SubscriptionCard
              plan="Basic Plan"
              price="$9.99/month"
              features={[
                "3 Specific Courses",
                "10 Projects",
                "Basic Certification",
                "1 Account Access",
              ]}
            />
            <SubscriptionCard
              plan="Standard Plan"
              price="$29.99/month"
              features={[
                "10 Choiced Courses",
                "25+ Projects",
                "Platinum Certification",
                "5 Account Access",
              ]}
            />
            <SubscriptionCard
              plan="Premium Plan"
              price="$49.99/month"
              features={[
                "100+ Courses",
                "100 Projects",
                "Premium Certification",
                "Unlimited Access",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
