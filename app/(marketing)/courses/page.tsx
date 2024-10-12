"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js"; // Import Typed.js
import { FaBrain } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";


export default function Home() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Javascript",
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
      ],
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
    <main className="flex  flex-col items-center justify-between  py-2 px-20 pt-20">
      <div className=" flex z-10 w-full max-w-5xl items-center justify-center  text-sm  flex-col">
        <h1 className=" text-center font-bold text-[#0400ff] text-3xl md:text-4xl lg:text-5xl pt-8 ">
          {" "}
          <span className="text-black ">
            Welcome Our
            <br />
          </span>
          Courses Section
        </h1>
        <p className="py-5  text-center"><span className="animate-color-change">Build Your future</span> <span className="animate-color-change2">as a Coder.</span></p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h2 className="text-2xl font-bold text-center">
          Learn <span className="auto-type text-[#0400ff]"></span>
        </h2>
      </div>

      <div className="mb-32 mt-20 lg:mt-20 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          


        <Link
          href="#"
          className="group rounded-lg border border-transparent border-gray-200 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl text-center font-semibold animate-color-change">
            Artificial Intelligence{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 h-20">
            Learn AI with an interactive course with&nbsp;quizzes!
          </p>
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-3 animate-color-change3  ">Enroll now</button>
        
        </Link>

        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change2">
            Machine Learning{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 h-20">
            Find in-depth information about Machines,LLMs and APIs.
          </p>
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-3 animate-color-change3">Enroll now</button>
        </Link>

        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change">
           Modren Python{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 h-20">
            Start python if U are a Beginners.
          </p>
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-3 animate-color-change3">Enroll now</button>

          
        </Link>

        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
     
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold animate-color-change2">
            Javascript{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 h-28">
            JS can be able to handle Frontend & Backend in Next.js.
          </p>
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-3 animate-color-change3">Enroll now</button>


        </Link>

       
      </div>
      <div className="m-4 mt-0 sm:m-14 flex justify-center  gap-5  sm:gap-16 lg:gap-52  ">
              <div className="Ai-icon  text-4xl ">
               <FaBrain/>
              </div>
                 <div className="robot-icon text-4xl ">
                   <FaRobot/>
                 </div>
                 <div className="python-icon text-4xl ">
                   <FaPython/>
                 </div>
                 <div className="js-icon text-4xl ">
                   <FaJs/>
                 </div>
      </div>
    </main>
  );
}
