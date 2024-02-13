import React from 'react'
import HomeHeader from '../containers/HomeContainers/HomeHeader'
import OurServices from '../containers/HomeContainers/OurServices'
import AboutUs from '../containers/HomeContainers/AboutUs'
import ProcessSection from '../containers/HomeContainers/ProcessSection'
import RecentShowcase from '../containers/HomeContainers/RecentShowcase'

export default function HomePage() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <HomeHeader />
      <OurServices />
      <AboutUs />
      <ProcessSection />
      <RecentShowcase />
    </div>
  )
}
