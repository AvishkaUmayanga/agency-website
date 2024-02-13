import React from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";

export default function FreeTrailButton() {
  return (
    <div>
      <button type="submit" className='py-1 duration-150 bg-white text-black rounded-full hover:scale-105 w-[170px] flex items-center gap-[6px] text-sm justify-center '>
        <FaCircleChevronRight className='text-base '/>Start Your Free Trail
      </button>
    </div>
  )
}
