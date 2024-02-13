import React from 'react'
import { motion } from 'framer-motion'

const leftToRightMotion = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    }
}

const rightToLeftMotion = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate:{
        opacity: 1,
        x: 0
    }
}
const ShowCaseCard = ({id, imgUrl, cardTitle, cardDetails}) => {
    
  const animationVariants = id%2 ===1 ? leftToRightMotion : rightToLeftMotion
  return (
    <motion.div 
      initial='initial'
      whileInView='animate'
      variants={animationVariants}
      transition={{duration:0.75}}
      className={`${id % 2 === 1 ? '' : ' md:mt-[100px]'} flex flex-col w-[300px] gap-2 h-[300px]`}
    >
      <img src={imgUrl} alt={imgUrl} className=' rounded-xl'/>
        <div>
          <h4 className= 'font-semibold'>{cardTitle}</h4>
          <p className='text-sm '>{cardDetails}</p>
        </div>
    </motion.div>
  )
}

export default ShowCaseCard
