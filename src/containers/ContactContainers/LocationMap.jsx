import React from 'react'
import locationImg from '../../assets/passara.PNG'
import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <motion.div 
      whileInView={{y:[100,0]}}
      transition={{duration:0.75}}
      className='flex h-[300px]  bg-black max-md:h-[150px] rounded-2xl  mb-[150px] max-md:mb-[100px]'>
      <img src={locationImg} alt='location - passara' className='object-cover opacity-75 rounded-2xl'/>
    </motion.div>
  )
}
