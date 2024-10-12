import React from 'react'
import Link from 'next/link'
import { TbHome } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { TiBookmark } from "react-icons/ti";
import { TbMoodSearch } from "react-icons/tb";
import DropdownMenu from './menu,navigationbs';
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { LuRectangleHorizontal } from "react-icons/lu";
const Navbar = () => {
  return (
    <div>
       <nav className="w-full bg-black  bg-opacity-10 backdrop-filter backdrop-blur-lg fixed z-30 ">
      <div className="flex justify-between px-9 py-4">
        <div className="logo font-extrabold font-kanit cursor-pointer"><Link href={'./'}><span className='text-[#0400ff] '>{'</>'}</span>CWU</Link></div>
        <div>
          <ul className="flex gap-6 font-bold">
          <li className='inline-block   no-underline relative after:absolute after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-left transform hover:-translate-y-1 transition'><Link href="/">
          {/* icon sirf mobile ke ley */} <span className='sm:hidden text-2xl'><TbHome /></span>
          <span className='hidden sm:block hover:text-[#0400ff]'>Home</span>
          </Link></li>
          
              <li className='inline-block  font-sans no-underline relative after:absolute after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-left transform hover:-translate-y-1 transition'><Link href="/contact"><span className='sm:hidden text-2xl'><TiBookmark /></span>
              <span className='hidden sm:block hover:text-[#0400ff]'>Saved</span></Link></li>
              <li className='inline-block   no-underline relative after:absolute after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-left transform hover:-translate-y-1 transition'><Link href="/contact"><span className='sm:hidden text-2xl'><TbMoodSearch /></span>
              <span className='hidden  sm:block hover:text-[#0400ff]'>Search</span></Link></li>
              <li>
              <DropdownMenu />
              </li>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
