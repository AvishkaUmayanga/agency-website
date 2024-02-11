import React from 'react'
import logo from '../assets/logo.png'
import FooterItemList from './FooterItemList'
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const list1 = ['Home', 'Home2', 'About', 'Contact Us', 'Portfolio', 'Portfolio Single']
const list2 = ['Style Guide', 'Instruction','License', 'changelog', 'Error 404', 'Password Protected']

export default function Footer() {
  return (
    <div className='flex flex-col px-5 py-10 bg-black lg:px-20 md:px-10 mt-[50px] text-white gap-6 '>
      <div className='flex flex-wrap justify-between max-md:gap-y-10'>
        <div className=' max-w-[300px]'>
          <img src={logo} alt='logo' className='h-[25px] mb-3'/> 
          <p className='text-sm '>We're a team of strategic creator and digital innoverot, united focus in our pursult of mastery and joyful.</p>
        </div>
        <FooterItemList title='Pages' listItems={list1}/>
        <FooterItemList title='Utility Pages' listItems={list2}/>
        <div>
          <p className='mb-2 font-semibold'>Subscribe</p>
          <div className='flex px-[6px] py-1 text-sm bg-white border rounded-full max-w[150px]'>
            <input type="email" name="youeEmail" placeholder='Enter your email here' className='text-black focus:outline-none'/>
            <button type="submit" className='p-1 duration-150 bg-black rounded-full hover:scale-105'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className='h-[1px] bg-white border-none '/>
      <div className='flex flex-wrap items-center justify-between max-md:gap-y-10'>
        <FooterItemList title='Copyright By' listItems={['Created by avishka']}/>
        <FooterItemList title='Contatct Us' listItems={['+94 764009627']}/>
        <FooterItemList title='Address' listItems={['Passara, Badulla, Sri lanka']}/>
        <div className='flex flex-wrap items-center gap-3 max-md:mx-5 lg:mx-16 md:mx-10'>
          <div className='p-2 bg-white border rounded-full'>
            <FaFacebook className='w-5 h-5 text-black'/>
          </div>
          <div className='p-2 bg-white border rounded-full '>
            <FaInstagram className='w-5 h-5 text-black'/>
          </div>
          <div className='p-2 bg-white border rounded-full'>
            <FaGithub className='w-5 h-5 text-black'/>
          </div>
        </div>
      </div>
    </div>
  )
}
