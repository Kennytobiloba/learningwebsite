import React from 'react'
import AboutImage from "../../assets/about.png"

const About = () => {
  return (
    <div className=' mt-[4rem] lg:mt-[6rem] bg-[#fff] ' id='Course'>
        <div className='py-20 lg:px-[6rem] px-[2rem]   grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 gap-10 sm:px-[4rem] mx-auto md:gap-12 '>
            <div className='flex flex-1 self-center'>
                <img src={AboutImage} alt="" className='' />

            </div>
            <div className=' flex flex-1 flex-col mx-auto item-center justify-center '>
              <h4 className='text-orange-400 text-base font-bold font-[DM Sans] uppercase tracking-wide mb-6'>About Us</h4>
              <h1 className=' 2xl:w-[68%] w-full md:text-[43px] lg:text-[48px] xl:text-[50px] xl:leading-[60px]  text-zinc-800 xl:text-5xl text-2xl font-bold font-[Helvetica] capitalize lg:leading-[60px] leading-[40px] md:leading-[56px] mb-4  '>Ready to help you learn English in private</h1>
              <p className='2xl:max-w-[56%] w-full  text-zinc-500 md:text-xl text-[16px] font-normal font-[Mulish] leading-8 xl:leading-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dignissim faucibus id sit consequat. Vivamus quam senectus vitae dolor ac.</p>
              <div className='flex gap-8 md:gap-4 '>
                <div className=' lg:w-60 w-40 w-46 h-16 mt-8   lg:px-16 lg:py-6 py-6 px-8 bg-orange-400 rounded shadow justify-start items-start gap-2.5 inline-flex '>
                  <button className=' text-white lg:text-xl  text-[16px] font-bold'> Get Started</button>
                </div>
                <div>
                  <div className='flex gap-2 mt-12'>
                  <i className="fa-regular fa-circle-play lg:text-[42px] text-[30px] text-orange-500"></i>
                    <h5 className='text-neutral-600 lg:text-base text-[12px] font-semibold mt-2'>Watch Video</h5>
                  </div>
                
                </div>
              </div>

            </div>

        </div>


    </div>
  )
}

export default About