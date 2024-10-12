'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when the component is unmounted or the menu is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      {/* Button to toggle the menu */}
      <button onClick={toggleMenu}>
        <span className='sm:hidden text-2xl'><PiDotsThreeOutlineVertical /></span>
        <span className='hidden sm:block  hover:text-[#0400ff] ml-2 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out transform hover:-translate-y-1 hover:after:scale-x-100 after:origin-left'>Menu</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-[100] right-0 mt-2 w-36 sm:w-48 bg-[#d2d2d2] rounded-md shadow-lg">
          <ul className="py-1 cursor-pointer text-[#0400ff] ">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer active:bg-[#0400ff] active:text-white       ">
         <Link href='/courses'>     <span className='sm:hidden inline-block  no-underline transform hover:-translate-y-1 transition'>Courses</span>
         <span className='hidden sm:block'>Courses</span></Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer active:bg-[#0400ff] active:text-white">
              <span className='sm:hidden inline-block  no-underline transform hover:-translate-y-1 transition'>Blog</span>
              <span className='hidden sm:block'>Blog</span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer active:bg-[#0400ff] active:text-white">
              <span className='sm:hidden inline-block  no-underline transform hover:-translate-y-1 transition'>My-Portfolio</span>
              <span className='hidden sm:block'><Link href='https://portfolio-tayyab-ilyas.netlify.app/'
              target='_blank'>My-Portfolio</Link></span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
