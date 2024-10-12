import React from 'react'
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <hr  className='w-full'/>
       <footer className="w-full py-3 px-14  text-xs relative bottom-0 ">
      <div className="flex justify-between">
        <div className="logo ">Copyright © | reserved &ensp;<sub>2024</sub></div>
        <div>
          <ul className="flex gap-4 md:gap-8 ">
          <li><Link href="/contact"><span className='sm:hidden text-xl'><FaQuestionCircle /></span>
          <span className='hidden sm:block'>FAQs</span></Link></li>
          <li><Link href="/contact"><span className='sm:hidden text-xl'><RiCustomerService2Fill /></span>
          <span className='hidden sm:block'>C-Support</span></Link></li>
            
          </ul>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer
