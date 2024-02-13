import React from 'react'
import aboutImgOne from '../../assets/aboutOne.jpg'
import aboutImgTwo from '../../assets/aboutTwo.jpg'
import aboutImgThree from '../../assets/aboutThree.jpg'
import ImageStack from '../../components/ImageStack'
import FreeTrailButton from '../../components/FreeTrailButton'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <div className='flex justify-between px-5 py-16 text-white bg-black max-md:items-center lg:px-20 md:px-10 max-md:flex-col'>
      <motion.div
        whileInView={{x:[-100,0], opacity:[0,1]}}
        transition={{duration:1}}
      >
        <ImageStack imageOne={aboutImgOne} imageTwo={aboutImgTwo} imageThree={aboutImgThree}/>
      </motion.div>
      <motion.div
        whileInView={{x:[100,0], opacity:[0,1]}}
        transition={{duration:1}} className='flex flex-col lg:max-w-[400px] gap-4 xl:max-w-[500px] max-lg:w-[300px] max-md:mt-[300px]' 
      >
        <h4 className='text-xl font-semibold text-lightGreen'>About Us</h4>
        <h2 className='text-3xl font-semibold lg:text-4xl'>The core mission behind all our work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
        <div className='flex gap-10 '>
         <div className='flex flex-col '>
           <h3 className='text-2xl font-semibold text-lightGreen'>330 <sup className='text-lg '>+</sup></h3>
           <p className='text-xs '>Companies helped</p>
         </div>
         <div className='flex flex-col '>
           <h3 className='text-2xl font-semibold text-lightGreen'>230 <sup className='text-lg '>+</sup></h3>
           <p className='text-sm '>Revenue generated</p>
         </div>
        </div>
        <FreeTrailButton bgColor='bg-white' textColor='text-black'/>
      </motion.div>
    </div>
  )
}
