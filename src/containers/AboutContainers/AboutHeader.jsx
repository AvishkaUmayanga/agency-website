import React from 'react'
import ratedUser from '../../assets/rated_user.jpg'
import ratingStars from '../../assets/stars.png'
import ImageStack from '../../components/ImageStack'
import aboutHeader1 from '../../assets/aboutHeader1.png'
import aboutHeader2 from  '../../assets/aboutHeader2.jpg'
import aboutHeader3 from '../../assets/aboutHeader3.jpg'
import { motion } from 'framer-motion'

export default function AboutHeader() {
  return (
    <div className='flex md:justify-between  text-white rounded-xl bg-black max-md:items-center lg:mx-20 md:mx-10 max-md:flex-col-reverse lg:mt-[100px] py-5 md:mt-[100px] px-8'>
      <motion.div
        whileInView={{x:[-100,0], opacity:[0,1]}}
        transition={{duration:0.5}} className='flex flex-col lg:max-w-[400px] gap-4 xl:max-w-[500px] max-lg:w-[250px] max-md:mt-[300px] ' 
      >
        <div>
          <p className='mb-2 text-sm'>Pleasure and so read the was hope.</p> 
          <h1 className='xl:text-5xl font-semibold xl:leading-[54px] text-3xl'>Ready to take  <br/><span className=' text-lightGreen'>your business   </span><br/>to the next level?</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
        <div className='flex items-center gap-2'>
          <img src={ratedUser} alt='rated user' className=' w-[45px] h-[45px] rounded-full'/>
          <div>
            <p>Rated 4.5/5 stars</p>  
            <img src={ratingStars} alt='rating stars' className=' h-[15px]'/>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{x:[100,0], opacity:[0,1]}}
        transition={{duration:0.5}}
      >
        <ImageStack imageOne={aboutHeader1} imageTwo={aboutHeader2} imageThree={aboutHeader3}/>
      </motion.div>
    </div>
  )
}
      
      