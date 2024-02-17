import React, { useEffect } from 'react'
import LocationMap from '../containers/ContactContainers/LocationMap'
import LetsTalk from '../containers/ContactContainers/LetsTalk'

export default function ContactPage() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div className=' flex flex-col overflow-hidden gap-[140px] max-md:gap-[100px] px-5  lg:px-20 md:px-10'>
      <LetsTalk />
      <LocationMap />
    </div>
  )
}
