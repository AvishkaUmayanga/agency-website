import React from 'react'

const ImageStack = ({imageOne, imageTwo, imageThree}) => {
  return (
    <div className=' lg:w-[350px] lg:h-[300px] relative xl:w-[450px] xl:h-[400px] w-[300px] h-250px]'>
      <img src={imageThree} alt='test' className='absolute md:w-[350px] md:h-[300px]  rounded-md opacity-40  xl:w-[450px] xl:h-[400px]  w-[250px] h-[200px]'/>
      <img src={imageTwo} alt='test' className='absolute md:w-[350px] md:h-[300px] translate-x-[25px] translate-y-[20px] rounded-md opacity-60  xl:w-[450px] xl:h-[400px]  w-[250px] h-[200px]'/>
      <img src={imageOne} alt='test' className='absolute md:w-[350px] md:h-[300px] translate-x-[50px] translate-y-[40px] rounded-md opacity-100 xl:w-[450px] xl:h-[400px]  w-[250px] h-[200px]'/>
    </div>
  )
}

export default ImageStack
