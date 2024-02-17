import React from 'react'
import { motion } from 'framer-motion'
import { aboutDetails } from '../../data/AboutData'

const fadeInAnimation = {
    initial:{
      opacity: 0,
      y: 100
    },
    animate:(index)=> ({
      opacity: 1,
      y: 0,
      transition:{
        delay: 0.15*index
      }
    })
  }

export default function AboutDetails() {
  return (
    <div className='flex flex-wrap justify-between px-5 text-center lg:px-20 md:px-10 max-md:justify-center gap-y-10'>
      {aboutDetails.map((details, index)=>(  
        <motion.div 
        key={index}
          initial='initial'
          whileInView='animate'
          variants={fadeInAnimation}
          custom={index}
          className='flex flex-col w-[260px]'>
            <h4 className='text-2xl font-bold'>{details.aboutNumber}</h4>
            <h5 className='font-semibold '>{details.aboutTitle}</h5>
            <p className='text-sm '>{details.aboutDescribe}</p>
        </motion.div>
      ))}
    </div>  
  )
}