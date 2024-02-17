import React from 'react'
import { CiMail, CiLinkedin } from "react-icons/ci";
import { IoCallOutline, IoLocationOutline} from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import UserInputFields from '../../components/UserInputFields';
import { motion } from 'framer-motion';

export default function LetsTalk() {
  return (
    <div className='flex justify-between max-2xl:gap-10 max-md:flex-col max-md:mt-[100px] mt-[150px]'>
      <motion.div 
        whileInView={{x:[-100,0]}}
        transition={{duration:0.75}}
        className='flex flex-col gap-6'>
        <h2 className='text-4xl font-bold max-md:text-3xl'>Let’s talk</h2>
        <p>We collaborate with thousands of creators, entrepreneurs and complete legends.</p>
        <div className='flex flex-col gap-3 py-4 border-y-2 border-y-darkGray'>
          <div className='flex items-center gap-2'>
            <div className='p-[6px] text-white bg-black  rounded-full h-[40px] w-[40px] flex items-center justify-center'>
             <CiMail/>  
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Our email</h3>
              <p className='text-sm'>avishkas97@gmail.com</p> 
            </div>
          </div> 
          <div className='flex items-center gap-2'>
            <div className='p-[6px] text-white bg-black  rounded-full h-[40px] w-[40px] flex items-center justify-center'>
             <IoCallOutline/>  
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Call Us</h3>
              <p className='text-sm'>+94 764009627</p> 
            </div>
          </div> 
          <div className='flex items-center gap-2'>
            <div className='p-[6px] text-white bg-black  rounded-full h-[40px] w-[40px] flex items-center justify-center'>
             <IoLocationOutline/>  
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Find us</h3>
              <p className='text-sm'>Open Google Maps</p> 
            </div>
          </div> 
        </div>
        <div className='flex gap-5 '>
          <FiFacebook  className=' h-[25px] w-[25px]'/> <FaInstagram  className=' h-[25px] w-[25px]'/> <CiLinkedin  className=' h-[25px] w-[25px]'/>
        </div>
      </motion.div>
      <motion.div 
        whileInView={{x:[100,0]}}
        transition={{duration:0.75}}
        className=' bg-lightGray w-[600px] rounded-2xl flex flex-col gap-10 justify-center p-5 max-md:w-full shadow-lg'>
        <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
          <UserInputFields inputType='text' labelText='First name' inputName='firstName' />
          <UserInputFields inputType='text' labelText='Last name' inputName='lastName' />
          <UserInputFields inputType='email' labelText='Email' inputName='userEmail' />
          <UserInputFields inputType='text' labelText='Phone' inputName='userPhone' />
        </div>
        <div className='flex flex-col'>
          <label>Message</label>
          <textarea name="userMessage"  rows="1" className='border-b-2 bg-lightGray focus:outline-none border-b-darkGray'/>
        </div> 
        <button type="button" className=' py-1 text-sm font-semibold text-white rounded-full bg-lightBlack w-[100px] hover:scale-110 duration-300'>Submit Now</button>
      </motion.div>
    </div>
  )
}
