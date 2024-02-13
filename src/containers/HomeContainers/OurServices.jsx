import React from 'react'
import { servicesData } from '../../data/ServicesData'
import { motion} from 'framer-motion'

const fadeInAnimation = {
  initial:{
    opacity: 0,
    y: 100
  },
  animate:(index)=>({
    opacity:1,
    y:0,
    transition:{
      duration: 0.25*index
    }
  })
}

export default function OurServices() {
    return (
      <div className='flex flex-col items-center gap-5 px-5 py-10 lg:px-20 md:px-10' >
        <h4 className='text-xl font-semibold text-lightGreen'>Our Services</h4>
        <h2 className='text-3xl font-semibold text-center'>High-impact services<br/> for your business</h2>
        <div className='grid grid-cols-3 gap-5 mt-5 lg:gap-10 lg:gap-y-5 max-md:grid-cols-1'>
          {servicesData.map(({cardIcon, cardTitle, describeText},index)=>(
            <motion.div 
              key={index}
              initial='initial'
              whileInView='animate'
              variants={fadeInAnimation}
              custom={index}
              className='flex flex-col max-w-[250px] bg-darkGray rounded-2xl p-5 gap-3 hover:bg-black hover:text-white group '
            >
              <div className='flex items-center justify-center w-8 h-8 text-white bg-black rounded-full group-hover:bg-white group-hover:text-black' >
                {cardIcon} 
              </div>
              <div className='flex flex-col gap-1 '>
                <h5 className='font-semibold '>{cardTitle}</h5>
                <p className='text-sm '>{describeText}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
}
