import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-black lg:px-20 md:px-10'>
        <img src={logo} alt='compant logo' className=' h-[30px] max-md:h-[20px]'/>
        <ul className='flex gap-5 font-semibold text-white max-lg:text-lg max-md:hidden'>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>Home</NavLink></li>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>About</NavLink></li>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>Contact Us</NavLink></li>
        </ul>
        <button type='button' className='px-2 py-1 duration-300 bg-white rounded-full hover:scale-105 max-md:hidden'>Get In Touch</button>
        <FaBarsStaggered className='text-white cursor-pointer md:hidden' onClick={toggleMenu}/>
      </div>
      <div className={`${isMenuOpen ? 'flex justify-center py-5 bg-black ' : ' -translate-y-full'} duration-500 fixed right-0 left-0 z-40 rounded-b-2xl`}>
        <ul className='flex flex-col items-center gap-5 font-semibold text-white '>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>Home</NavLink></li>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>About</NavLink></li>
          <li className='duration-200 hover:scale-105 hover:text-darkGray'><NavLink to='/'>Contact Us</NavLink></li>
          <li><button type='button' className='px-2 py-1 text-black duration-300 bg-white rounded-full hover:scale-105'>Get In Touch</button></li>
        </ul>
    </div>
     
    </div>
  )
}
