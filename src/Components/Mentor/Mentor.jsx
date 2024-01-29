import React from 'react'
import imageone from "../../assets/imageone.png"
import imagetwo from "../../assets/imagetwo.png"
import imagethree from "../../assets/imagethree.png"
const Mentor = () => {
  return (
    <div className='mt-[4rem] lg:mt-[6rem] bg-[#fff] '>
        <div className='py-20 lg:px-[6rem]   px-[2rem] sm:px-[4rem]   '>
            <div className='mx-auto text-center mb-[4rem]'>
                <h4 className='text-orange-400 text-base font-bold font-[DM Sans] uppercase tracking-wide mb-4'>Mentor</h4>
                <h2 className='text-center text-zinc-800 lg:text-4xl leading-8 text-2xl font-bold font-[Helvetica] capitalize lg:leading-10'>Our Top Mentor At tutorify</h2>
                <p className='text-zinc-500 lg:text-xl text-[16px] mt-4  font-normal font-[Muli] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>

            <div className=' grid sm:grid-cols-2   gap-8 lg:grid-cols-3  mx-auto 2xl:mx-[8rem] mt-[4rem]  '>
                <div className=' w-full bg-white rounded-3xl shadow  '>
                    <div className=''>
                        <img src={imageone} alt="" className=' rounded-2xl shadow w-full h-full' />
                        </div>         
                      <div className='px-6 py-4'>
                      <h4 className=' text-zinc-800 mb-2 lg:text-3xl text-2xl font-medium font-[Poppin]'>Rizqi Assegaf</h4>
                        <h5 className='text-zinc-500 mb-2 text-xl font-normal'>SD-SMA Mentor</h5>
                        <div className='flex gap-4 items-center mb-2'>
                        <i className="fa-regular fa-clock text-[20px]"></i>
                            <h6>10 Years</h6>
                        </div>
                        <div className='flex gap-6'>
                            <div  className='space-x-2'>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            </div>
                            <h4 className='text-zinc-500 text-xl font-normal'>(200)</h4>
                        </div>
                      </div>   
                </div>
                 

                <div className=' w-full bg-white rounded-3xl shadow p-2'>
                    <div className=''>
                        <img src={imagetwo} alt="" className=' rounded-2xl shadow w-full h-full' />
                        </div>         
                      <div className='px-6 py-4'>
                      <h4 className=' text-zinc-800 mb-2 lg:text-3xl text-2xl font-medium font-[Poppin]'>Rizqi Assegaf</h4>
                        <h5 className='text-zinc-500 mb-2 text-xl font-normal'>SD-SMA Mentor</h5>
                        <div className='flex gap-4 items-center mb-2'>
                        <i className="fa-regular fa-clock text-[20px]"></i>
                            <h6>10 Years</h6>
                        </div>
                        <div className='flex gap-6'>
                            <div  className='space-x-2'>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            </div>
                            <h4 className='text-zinc-500 text-xl font-normal'>(200)</h4>
                        </div>
                      </div>   
                </div>

                <div className=' w-full bg-white rounded-3xl shadow p-2'>
                    <div className=''>
                        <img src={imagethree} alt="" className=' rounded-2xl shadow w-full h-full' />
                        </div>         
                      <div className='px-6 py-4'>
                      <h4 className=' text-zinc-800 mb-2 lg:text-3xl text-2xl font-medium font-[Poppin]'>Rizqi Assegaf</h4>
                        <h5 className='text-zinc-500 mb-2 text-xl font-normal'>SD-SMA Mentor</h5>
                        <div className='flex gap-4 items-center mb-2'>
                        <i className="fa-regular fa-clock text-[20px]"></i>
                            <h6>10 Years</h6>
                        </div>
                        <div className='flex gap-6'>
                            <div  className='space-x-2'>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            <i className="fa-regular fa-star md:text-[20px] text-[14px] text-orange-500"></i>
                            </div>
                            <h4 className='text-zinc-500 text-xl md:text-[14px] font-normal'>(200)</h4>
                        </div>
                      </div>   
                </div>






            </div>

        </div>


    </div>
  )
}

export default Mentor