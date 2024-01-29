import React from 'react';

const Payment = () => {
  return (
    <div className='mt-[4rem] lg:mt-[6rem] bg-[#fff]'>
      <div className='py-20  lg:px-[6rem] px-[2rem] sm:px-[4rem] mx-auto'>
        <div className=''>
          <h4 className='text-orange-400 mb-4 text-base font-bold font-[DM Sans] uppercase tracking-wide'>Pricing</h4>
          <h1 className='text-zinc-800 mb-4 lg:text-5xl sm:text-3xl text-2xl font-bold font-[Helvetica] capitalize leading-10'>How much Do I Have To Pay</h1>
          <p className='text-zinc-500 text-xl font-normal font-[Mulish] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='mt-[4rem] grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 2zl:gap-[4rem]  md:gap-[4rem]   sm:gap-10 '>
          <div className='w-full flex flex-col  hover:text-white  hover:bg-orange-400  2xl:px-4  p-2 2xl:py-8 py-8  my-2 rounded-3xl bg-stone-50 shadow-sm '>
          <div className='2xl:ml-[3rem] ml-[2rem]'>
          <h4 className='text-zinc-800  hover:text-white lg:text-2xl md:text-[20px]  font-semibold mb-4 mt-4 font-[Poppins]'>Beginner</h4>
                    <p className='text-slate-500 hover:text-white text-sm mb-2 font-medium 2xl:w-[70%] font-[Poppins] w-[90%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className='flex gap-2  items-center mt-4 '>
                    <i className="fa-regular fa-circle-check  hover:text-white  text-[18px]"></i>
                    <p className='text-slate-500 text-sm  hover:text-white font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular  hover:text-white fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500  hover:text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular  hover:text-white fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500  hover:text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular  hover:text-white fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500  hover:text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-4 items-center mt-6 mb-4'>
                        <h4 className=' text-zinc-800  hover:text-white lg:text-3xl text-2xl font-semibold font-[Poppins] leading-10'>$20</h4>
                        <h6 className='text-slate-500  hover:text-white text-sm font-medium font-[Poppins]'>/month</h6>
                    </div>
                    </div>

                    <div className=' px-8 w-[70%] ml-8 mt-8 text-center bg-purple-500 bg-opacity-10 rounded-3xl'>
                        <button className=' p-4 text-orange-400 hover:text-white text-xs text-center  font-medium font-[Poppins]'>Select Plan</button>

                    </div>
          </div>

          <div className='w-full flex flex-col     2xl:px-4  p-2 2xl:py-8 py-8   my-2 rounded-3xl bg-orange-400 shadow-sm'>
          <div className='2xl:ml-[3rem] ml-[2rem]'>
          <h4 className='hover:text-zinc-800 text-white lg:text-2xl md:text-[20px] font-semibold mb-4 mt-4 font-[Poppins]'>Intermediate</h4>
                    <p className='hover:text-slate-500 text-white text-sm mb-2 font-medium 2xl:w-[70%] font-[Poppins] w-[90%] '>For most businesses that want to otpimize web queries </p>
                    <div className='flex gap-2  items-center mt-4 '>
                    <i className="fa-regular fa-circle-check hover:text-slate-500 text-white  text-[18px]"></i>
                    <p className='hover:text-slate-500 text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  hover:text-slate-500 text-white  text-[18px]"></i>
                    <p className=' hover:text-slate-500 text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check hover:text-slate-500 text-white  text-[18px]"></i>
                    <p className='hover:text-slate-500 text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  hover:text-slate-500 text-white  text-[18px]"></i>
                    <p className='hover:text-slate-500 text-white text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-4 items-center mt-6 mb-4'>
                        <h4 className=' hover:text-slate-800 text-white lg:text-3xl text-2xl font-semibold font-[Poppins] leading-10'>$20</h4>
                        <h6 className='hover:text-slate-500 text-white text-sm font-medium font-[Poppins]'>/month</h6>
                    </div>
                    </div>

                    <div className=' px-8 w-[70%] ml-8 mt-8 text-center bg-white  hover:bg-purple-500 bg-opacity-10 rounded-3xl'>
                        <button className=' p-4 hover:text-orange-400  text-black text-xs text-center  font-medium font-[Poppins]'>Select Plan</button>

                    </div>
          </div>

          <div className='w-full flex flex-col    2xl:px-4  p-2 2xl:py-8 py-8   my-2 rounded-3xl bg-stone-50 shadow-sm'>
          <div className='2xl:ml-[3rem] ml-[2rem]'>
          <h4 className='text-zinc-800 lg:text-2xl md:text-[20px] font-semibold mb-4 mt-4 font-[Poppins]'>Pro</h4>
                    <p className='text-slate-500 text-sm mb-2 font-medium 2xl:w-[70%] font-[Poppins] w-[90%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className='flex gap-2  items-center mt-4 '>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-4 items-center mt-6 mb-4'>
                        <h4 className=' text-zinc-800lg:text-3xl text-2xl  font-semibold font-[Poppins] leading-10'>$20</h4>
                        <h6 className='text-slate-500 text-sm font-medium font-[Poppins]'>/month</h6>
                    </div>
                    </div>

                    <div className=' px-8 w-[70%] ml-8 mt-8 text-center bg-purple-500 bg-opacity-10 rounded-3xl'>
                        <button className=' p-4 text-orange-400 text-xs text-center  font-medium font-[Poppins]'>Select Plan</button>

                    </div>
          </div>

          <div className='w-full flex flex-col  mt-6 hover:bg-orange-400  2xl:px-4  p-2 2xl:py-8 py-8   my-2 rounded-3xl bg-stone-50 shadow-sm'>
          <div className='2xl:ml-[3rem] ml-[2rem]'>
          <h4 className='text-zinc-800 lg:text-2xl md:text-[20px] font-semibold mb-4 mt-4 font-[Poppins]'>Expert</h4>
                    <p className='text-slate-500 text-sm mb-2 font-medium 2xl:w-[70%] font-[Poppins] w-[90%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className='flex gap-2  items-center mt-4 '>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-2  items-center mt-4'>
                    <i className="fa-regular fa-circle-check  text-[18px]"></i>
                    <p className='text-slate-500 text-sm font-medium font-[Poppins]'>Lectus quis quisque.</p>
                    </div>
                    <div className='flex gap-4 items-center mt-6 mb-4'>
                        <h4 className=' text-zinc-800 lg:text-3xl text-2xl font-semibold font-[Poppins] leading-10'>$20</h4>
                        <h6 className='text-slate-500 text-sm font-medium font-[Poppins]'>/month</h6>
                    </div>
                    </div>

                    <div className=' px-8 w-[70%] ml-8 mt-8 text-center bg-purple-500 bg-opacity-10 rounded-3xl'>
                        <button className=' p-4 text-orange-400 text-xs text-center  font-medium font-[Poppins]'>Select Plan</button>

                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
