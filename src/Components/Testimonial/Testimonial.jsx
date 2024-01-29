import React from 'react'
import TestimonialImage from "../../assets/testimonial.png"

const Testimonial = () => {
  return (
    <div className=' mt-[2rem] lg:mt-[6rem]'>
        <div className='py-20 lg:px-[6rem] px-[2rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gap-[6rem] gap-[4rem] sm:px-[4rem] mx-auto md:gap-12 2xl:gap-[14rem]'>
            <div className='flex flex-col flex-1  justify-center items-start'>
                <h4 className='text-orange-400 text-base font-bold mb-4 font-[DM Sans] uppercase tracking-wide'>Testimonial</h4>
                <h1 className='text-zinc-800 xl:text-5xl lg:text-4xl text-3xl mb-6 font-bold font-[Helvetica] capitalize leading-10'>What They Say About US</h1>
                <p className='text-zinc-500 mb-8 lg:w-[90%] w-ful text-lg font-normal font-[Poppins]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere mor ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere morb!”</p>
                <h5 className='text-black text-sm mb-4 font-semibold font-[Poppins]'>Rizqi Assegaf</h5>
                <h6 className=' text-zinc-500 text-sm font-normal font-[Poppins]'>Student At Tutorify</h6>
            </div>
            <div className='flex flex-1 self-center items-center'>
            <img src={TestimonialImage} alt="" />
            </div>
            

        </div>


    </div>
  )
}

export default Testimonial