import React from 'react'
import teamPerson1 from '../../assets/team1.jpg'
import teamPerson2 from '../../assets/team2.jpg'
import teamPerson3 from '../../assets/team3.jpg'
import TeamCard from '../../components/TeamCard'
import { motion } from 'framer-motion'

const firstMember = {memberName:'Esther Howards', memberPosition:'Founder & CEO',memberImg:teamPerson1, hoverText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.'}
const secondMember = {memberName:'Cameron Williamson', memberPosition:'Marketing Head',memberImg:teamPerson2, hoverText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.'}
const thirdMember = {memberName:'Liam Cooper', memberPosition:'Marketing Head',memberImg:teamPerson3, hoverText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.'}

export default function OurTeam() {
  return (
    <div className='flex flex-col gap-10 px-5 py-10 lg:px-20 md:px-10' >
      <h2 className='text-3xl font-semibold text-center'>Our Team</h2>
      <div className='relative flex flex-wrap justify-between px-5 lg:px-20 md:px-10 max-md:justify-center max-md:gap-10'>
        <motion.div
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{duration:0.7}}
        >
          <TeamCard memberDetails={firstMember} />
        </motion.div>
        <motion.div
          whileInView={{y:[100,0], opacity:[0,1], x:[0,0]}}
          transition={{duration:0.7}}
        >
          <TeamCard memberDetails={secondMember} />
        </motion.div>
        <motion.div
          whileInView={{x:[100,0], opacity:[0,1]}}
          transition={{duration:0.7}}
        >
          <TeamCard memberDetails={thirdMember} />
        </motion.div>
      </div>
      <motion.div 
        whileInView={{opacity:[0,1], scale:[0,1]}}
        transition={{duration:0.7, ease: 'easeInOut'}}
        className='flex flex-col items-center justify-center gap-5 p-10 text-center text-white bg-cover bg-garyStyledBg rounded-xl max-lg:p-6'>
          <p className='text-3xl font-semibold max-lg:text-2xl'>Enough talk, let’s get to work</p>
          <button className='px-2 py-1 text-sm text-black duration-300 bg-white rounded-full hover:scale-105'>Get in touch</button>
      </motion.div>
    </div>
  )
}
