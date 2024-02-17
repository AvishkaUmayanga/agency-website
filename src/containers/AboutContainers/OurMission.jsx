import React from 'react'
import { MdVerified } from "react-icons/md";
import missionImgOne from '../../assets/missionImg1.png'
import missionImgTwo from '../../assets/missionImg2.png'
import teamMembers from '../../assets/teamMembers.png' 
import { motion } from 'framer-motion';

const missionDetails = ['Moonlight newspaper up its enjoyment', 'Rooms oh fully taken by worse.', 'She new course gets living.', 'Perceived end certainly day.', 'She new course gets living.', 'Preference any astonished unreserved Mrs.']

const fadeInAnimation = {
    initial:{
        opacity:0,
        y:100
    },
    animate:(index)=> ({
      opacity: 1,
      y: 0,
      transition:{
        delay: 0.15*index
      }
    })
  }
  
export default function OurMission() {
  return (
    <div className='text-white bg-black'>
      <div className='flex items-center justify-center gap-5 px-5 py-10 xl:gap-20 lg:px-20 md:px-10 max-lg:flex-col-reverse'>
        <div className='flex flex-col gap-5  w-[520px] max-md:w-[300px]'>
          <h4 className='text-lg text-lightGreen'>Our Mission</h4>
          <h2 className='text-4xl font-bold max-md:text-3xl'>Boost your with your business.</h2>
          <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
          <div className='grid grid-cols-2 gap-2 max-xl:grid-cols-1 max-md:gap-3'>
            {missionDetails.map((missionText,index)=>(
              <motion.div key={index}
                initial='initial'  whileInView='animate'  variants={fadeInAnimation}  custom={index}
                className='flex gap-1 '>
                  <MdVerified className='h-6 text-lightGreen'/>
                  <p>{missionText}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='flex max-md:flex-col'>
          <motion.div 
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:0.75}}
            className='flex flex-col gap-4'>
            <div className=' w-[320px] h-[400px] '>
              <img src={missionImgOne} alt='mission' className='object-fill w-full h-full opacity-75 rounded-xl'/>
            </div>
            <div className='flex justify-between text-center  h-[110px] text-sm'>
              <div className=' w-[180px] self-start'>
                <h4 className='text-lg font-semibold'>10k</h4>
                <p>Great conversations per month</p>
              </div>
              <div className='border-r-2 h-[60px] self-center'/>
              <div className=' w-[100px] self-end'>
              <h4 className='text-lg font-semibold'>95+</h4>
                <p>Project Complete </p>
              </div>
            </div>
          </motion.div>  
          <motion.div 
            whileInView={{x:[100,0], opacity:[0,1]}}
            transition={{duration:0.75}}
            className='flex flex-col justify-between '>
            <div className='flex justify-center p-3 bg-white rounded-xl w-[180px] text-black flex-col text-center -translate-x-3 translate-y-10 max-md:z-10'>
              <p>Team Members</p>
              <img src={teamMembers} alt='team members' className='h-[30px] '/>
            </div>
            <div className=' w-[230px] h-[280px] translate-x-[80px] '>
              <img src={missionImgTwo} alt='mission' className='w-full h-full rounded-xl'/>  
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

