/* eslint-disable no-unused-vars */
// Generate logos on logo.com
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets'; 
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  return (
    // Every className has a meaning, visit TailWindCss doc
    <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }} 
          >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='test-[16px] font-medium cursor-pointer'>Eshant Chandak <span className='sm:block hidden text-[14px] text-yellow-400'>Flutter Developer <font color="white">|</font> Front End React <br />Developer <font color="white">|</font> Data Analyst</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} 
                className={`${active === link.title ? "text-[#915eff]" : "text-secondary"} hover:text-yellow-400 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" 
               className='w-[28px] h-[28px] object-contain cursor-pointer'
               onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? "hidden" : "flex"} p-8 absolute black-gradient top-20 right-0 mx-4 my-4 w-[160px] min-h-[160px] z-10 rounded-xl`}>
          <ul className='list-inside justify-end items-start space-y-5 flex-col gap-8'>
          {navLinks.map((link) => (
            <li key={link.id} 
                className={`${active === link.title ? "text-[#915eff]" : "text-secondary"} hover:text-yellow-400 font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar