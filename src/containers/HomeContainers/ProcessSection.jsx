import React from 'react'
import { processData } from '../../data/ProcessSectionData';
import { motion } from 'framer-motion';

const fadeInAnimation = {
  initial:{
    opacity: 0,
    y: 100
  },
  animate:(index)=>({
    opacity:1,
    y:0,
    transition:{
      duration: 0.3*index
    }
  })
}

export default function ProcessSection() {
  return (
    <div className='flex flex-col items-center gap-5 px-5 py-10 lg:px-20 md:px-10' >
      <h4 className='text-xl font-semibold text-lightGreen'>Our Services</h4>
      <h2 className='text-3xl font-semibold text-center'>High-impact services<br/> for your business</h2>
      <div className='flex flex-wrap gap-10 lg:justify-between 2xl:gap-10 max-lg:justify-center mt-[50px]'>
        {processData.map(({processIcon:ProcessIcon, processTitle, processDescription},index)=>(
          <motion.div
            key={index}
            initial='initial'
            whileInView='animate'
            variants={fadeInAnimation}
            custom={index}
            className=' max-w-[250px] border-2 p-3 rounded-xl gap-4 flex flex-col bg-lightGray border-darkGray'
          >
            <div className='flex items-center self-end gap-2 translate-x-8 bg-white rounded-full -translate-y-3/4 max-w-min'>
              <div className='flex items-center p-3 text-white bg-black rounded-full '>
                {ProcessIcon}
              </div>
              <h4 className='text-xl font-bold '>{processTitle}</h4>
            </div>
            <p className='-translate-y-1/4 '>{processDescription}</p>
            </motion.div>
        ))}
      </div>
    </div>
  )
}
