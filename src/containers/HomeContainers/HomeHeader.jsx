import React from 'react'
import headerImg from '../../assets/home_header.jpg'
import greenishImg from  '../../assets/greenish.png'
import automationImg from '../../assets/automation.png'
import leafeImg from '../../assets/leafe.png'
import mindfulnessImg from '../../assets/mindfulness.png'
import FreeTrailButton from '../../components/FreeTrailButton';

export default function HomeHeader() {
  return (
    <div className='text-white bg-black mt-[50px] bg-homeHeaderBg bg-contain lg:px-20 md:px-10 px-5 flex  py-10 flex-col gap-5 max-md:mt-[30px]'>
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-8'>
        <div className='flex flex-col gap-8 max-lg:max-w-[350px] max-w-[450px]'>
          <h1 className='xl:text-5xl font-semibold xl:leading-[54px] text-3xl'>Ready to take your <br/><span className=' text-lightGreen'>Business Growth </span><br/>to the next level?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et utmassa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
          <FreeTrailButton />
        </div>
        <div className='border-2 rounded-full p-7 border-lightGreen max-md:p-5'>
          <div className='border rounded-full p-7 border-lightGray max-md:p-5'>
            <img src={headerImg} alt='header' className=' xl:w-[350px] xl:h-[350px] rounded-full lg:h-[300px] lg:w-[300px] h-[180px] w-[180px] md:h-[200px] md:w-[200px] '/>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-xl text-lightGreen'>Trusted By Leading Brands</h3> 
        <div className='flex flex-wrap gap-2'>
          <img src={greenishImg} alt="greenish" className=' h-[50px]' />
          <img src={automationImg} alt="automation" className=' h-[50px]' />
          <img src={leafeImg} alt="leafe" className=' h-[50px]' />
          <img src={mindfulnessImg} alt="mindfulness" className=' h-[50px]' />
        </div>
      </div>
    </div>
  )
}
