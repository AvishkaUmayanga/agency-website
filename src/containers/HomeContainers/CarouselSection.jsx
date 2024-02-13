import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from '../../data/CarouselData';

const responsive = {
    allScreens: {
      breakpoint: { max: 5000, min: 0 },
      items: 1
    },}

export default function CarouselSection() {
  return (
    <div>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        className='mb-[200px] max-md:mb-[100px]'
      >
        {carouselData.map((details, index)=>(
          <div key={index} className='flex flex-col items-center mx-5 bg-darkGray lg:mx-20 md:mx-10 xl:px-[150px] text-center gap-8 py-10 rounded-xl px-5 max-md:gap-5'>
            <img src={details.userImg} alt={details.userImg} className='w-[80px] h-[80px] rounded-full'/>
            <p className='font-semibold md:text-lg'>{details.userComment}</p>
            <div>
              <h4 className='font-semibold '>{details.userName}</h4>
              <p className='text-sm '>{details.userPosition}</p>
            </div>
          </div> 
        ))}
      </Carousel>
    </div>
  )
}


