import React from 'react'

const TeamCard = ({memberDetails}) => {
  return (
    <div className='flex flex-col max-w-[250px] gap-5 max-lg:w-[200px] '>
      <div className='relative max-w-[250px] h-[280px]  max-lg:w-[200px]'>
        <img src={memberDetails.memberImg} alt='team member' className='max-w-[250px] h-[280px]  max-lg:w-[200px] rounded-xl '/>
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-2 duration-500 opacity-0 group rounded-xl hover:opacity-100 bg-lightBlack bg-opacity-60'>
          <p className='text-white translate-y-[100px] group-hover:translate-y-0 duration-300'>{memberDetails.hoverText}</p>
        </div>
      </div>
      <div>
        <h4 className='font-semibold '>{memberDetails.memberName}</h4>
        <p className='text-sm '>{memberDetails.memberPosition}</p>
      </div>
    </div>
  )
}

export default TeamCard
