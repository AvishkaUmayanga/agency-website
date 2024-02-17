import React, { useEffect } from 'react'
import AboutHeader from '../containers/AboutContainers/AboutHeader'
import AboutDetails from '../containers/AboutContainers/AboutDetails'
import OurTeam from '../containers/AboutContainers/OurTeam'
import OurMission from '../containers/AboutContainers/OurMission'

export default function AboutPage() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  
  return (
    <div className=' flex flex-col overflow-hidden gap-[140px] max-md:gap-[100px]'>
      <AboutHeader />
      <AboutDetails />
      <OurMission />
      <OurTeam />
    </div>
  )
}
