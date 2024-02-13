import React from 'react'
import HomeHeader from '../containers/HomeContainers/HomeHeader'
import OurServices from '../containers/HomeContainers/OurServices'
import AboutUs from '../containers/HomeContainers/AboutUs'
import ProcessSection from '../containers/HomeContainers/ProcessSection'
import RecentShowcase from '../containers/HomeContainers/RecentShowcase'
import CarouselSection from '../containers/HomeContainers/CarouselSection'

export default function HomePage() {
  return (
    <div className='flex flex-col overflow-hidden gap-[140px] max-md:gap-[100px]'>
      <HomeHeader />
      <OurServices />
      <AboutUs />
      <ProcessSection />
      <RecentShowcase />
      <CarouselSection />
    </div>
  )
}
