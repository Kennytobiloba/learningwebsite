import React from 'react'
import service from "../../assets/service.png"

const Service = () => {
  return (
    <div className='mt-[4rem] lg:mt-[6rem] bg-[#fff]'>
        <div className='py-20 lg:px-[6rem] px-[2rem]     grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gap-[6rem] gap-10 sm:px-[4rem] mx-auto md:gap-12 '>
          <div className='flex flex-1 justify-center items-start flex-col md:order-1 order-2 mt-[4rem] md:mt-2'>
                <h4 className=' text-orange-400 text-base mb-4 font-bold font-[DM Sans] uppercase tracking-wide'>Why US</h4>
                <h4 className=' text-zinc-800 mb-6 lg:text-5xl  text-4xl font-bold font-[Helvetica] capitalize leading-10'>Why Choose Tutorify</h4>
                <div className='flex flex-col gap-2'>
                <div className='flex gap-4 mt-4 mb-2'>
                <i className="fa-regular fa-circle-check text-orange-500 text-[30px]"></i>
             <p className=' text-zinc-800 xl:w-[66%] sm:w-[66%] md:w-[90%] lg:w-full w-full text-base font-normal font-[Mulish] tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed</p>
                </div>
            
                <div className='flex gap-4 mt-4 mb-2'>
                <i className="fa-regular fa-circle-check text-orange-500 text-[30px]"></i>
             <p className=' text-zinc-800 xl:w-[66%] lg:w-full sm:w-[66%] md:w-[90%] w-full text-base font-normal font-[Mulish] tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed</p>
                </div>
                <div className='flex gap-4 mt-4 mb-2'>
                <i className="fa-regular fa-circle-check text-orange-500 text-[30px]"></i>
             <p className=' text-zinc-800 xl:w-[66%] lg:w-full sm:w-[66%] md:w-[90%] w-full text-base font-normal font-[Mulish] tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed</p>
                </div>
                </div>

            </div>




            <div className='flex flex-1 self-center md:order-2 order-1'>
                <img src={service} alt="" className='' />
            </div>

        </div>

    </div>
  )
}

export default Service