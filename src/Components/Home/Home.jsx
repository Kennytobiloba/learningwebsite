import React from 'react';
import man from "../../assets/man.png";

const Home = () => {
  return (
    <div className='flex justify-center items-center relative' id='Home'>
      <div className='lg:px-[6rem] px-[2rem] py-20 grid    grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gap-2 gap-10 sm:px-[4rem] mx-auto'>
        <div className=' order-2 md:order-1 flex flex-1 flex-col 2xl:mt-[10rem] xl:mt-[8rem] lg:mt-[5rem] mt-[3rem] md:mt-[6rem]'>
          <h1 className='text-zinc-800 2xl:text-8xl xl:text-7xl lg:text-[59px] text-[52px] font-normal font-[Bebas Neue] 2xl:leading-[90px] xl:leading-[80px] md:text-5xl lg:leading-[70px] leading-[60px] md:leading-[50px] 2xl:mb-6 '>start become your best <span className='text-orange-400 font-normal font-[Bebas Neue]'>self</span></h1>
          <p className='text-zinc-500 mt-6 text-base font-normal font-[Mulish] w-[100%]   2xl:w-[56%] min:[1682px]-w-[100%] leading-loose md:leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dignissim faucibus id sit consequat. Vivamus quam senectus vitae dolor ac.</p>

          <div className='grid grid-cols-3 lg:gap-2 gap-8 md:gap-8 mt-8 md:mt-4 lg:mt-8 '>
            <div>
              <h1 className='text-zinc-800 2xl:text-5xl xl:text-4xl text-3xl font-bold font-[DM Sans] leading-10 mb-4 md:mb-2 lg:mb-4 '>100+</h1>
              <p className='text-orange-400 lg:text-sm text-[12px] font-bold font-[Mulish] uppercase xl:leading-none leading-4 '>Mentor at tutorify</p>
            </div>
            <div>
              <h1 className='text-zinc-800 2xl:text-5xl xl:text-4xl text-3xl font-bold font-[DM Sans] leading-10 mb-4 md:mb-2 lg:mb-4 '>10K+</h1>
              <p className='text-orange-400 lg:text-sm text-[12px] font-bold font-[Mulish] uppercase xl:leading-none leading-2'>Student Trusted us</p>
            </div>
            <div>
              <h1 className='text-zinc-800 2xl:text-5xl xl:text-4xl text-3xl font-bold font-[DM Sans] leading-10 mb-4 md:mb-2 lg:mb-4 '>100+</h1>
              <p className='text-orange-400 lg:text-sm text-[12px] lg:font-bold font-bold font-[Mulish] uppercase xl:leading-none leading-2'>Student success</p>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow mt-10 md:mt-6 lg:mt-10 2xl:w-[80%] w-[100%] h-20 flex justify-between relative overflow-hidden'>
            <div
              className='absolute top-0 right-0 bottom-0 left-0 bg-white opacity-10'
              style={{
                backdropFilter: 'blur(82.875px)',
              }}
            ></div>
            <div className='flex flex-row gap-4 p-2 ml-6 mt-6 '>
              <i className="fa-solid fa-magnifying-glass lg:text-[24px] text-[18px]"></i>
              <div className="text-zinc-500 lg:text-base text-[12px] font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">Search for a mentor</div>
            </div>
            <div className='lg:w-24 w-18 h-10 px-6 py-1.5 bg-orange-400 rounded mr-[2rem] mt-6 '>
              <button className='text-center text-white lg:text-base text-[12px] font-semibold font-[Mulish] leading-normal'>Search</button>
            </div>
          </div>
        </div>

        <div className=' order-1 md:order-2 flex flex-1 self-center relative'>
          {/* <div
            className='w-[361px] h-[361px] absolute bg-orange-500 top-[10%] right-[20%] backdrop-blur-2xl opacity-40 overflow-hidden rounded-full shadow-2xl'
            style={{
              
              
              borderRadius: '361px',
            }}
          ></div> */}
          <img src={man} alt="" className='w-[100%] h-[100%] '/>
        </div>
      </div>
    </div>
  );
}

export default Home;
