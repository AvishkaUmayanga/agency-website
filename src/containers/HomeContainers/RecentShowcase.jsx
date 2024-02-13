import React from 'react'
import ShowCaseCard from '../../components/ShowCaseCard'
import { showCaseData } from '../../data/ShowCaseData'
import FreeTrailButton from '../../components/FreeTrailButton'

export default function RecentShowcase() {
  return (
    <div className='flex flex-col items-center gap-5 px-5 py-10 lg:px-20 md:px-10' >
      <h2 className='text-3xl font-semibold text-center'>Recent Showcase</h2>
      <div className='md:translate-x-[250px] md:translate-y-[80px] max-md:-translate-x-[60px]'>
        <FreeTrailButton bgColor='bg-black' textColor='text-white'/>
      </div>
      <div className='grid grid-cols-2 lg:gap-x-20 md:gap-x-16 max-md:grid-cols-1 max-md:gap-y-8'>
        {showCaseData.map(({id,showCaseImg, showCaseTitle, showCaseDescription})=>(
          <ShowCaseCard key={id} id={id} imgUrl={showCaseImg} cardTitle={showCaseTitle} cardDetails={showCaseDescription}/>
        ))}
      </div>
    </div>
  )
}
