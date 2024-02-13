import React from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";

export default function FreeTrailButton({bgColor, textColor}) {
  return (
    <div>
      <button type="submit" className={`py-1 duration-150   rounded-full hover:scale-105 w-[170px] flex items-center gap-[6px] text-sm justify-center ${bgColor} ${textColor}`}>
        <FaCircleChevronRight className='text-base '/>Start Your Free Trail
      </button>
    </div>
  )
}
