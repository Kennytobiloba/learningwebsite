import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[4rem] lg:mt-[6rem] bg-gray-800'>
        <div className='py-[8rem]  lg:px-[6rem] px-[2rem] '>
            <div className=' grid sm:grid-cols-2 grid-cols-1 gap-10 '>
               <div  className='flex flex-col justify-center items-center sm:justify-start sm:items-start  '>
               
               <h4 className='text-white mb-4 md:text-3xl text-2xl font-normal font-[DM Sans]'>Ready to get started?</h4>
               <p className='opacity-50 text-white mb-2 text-base font-normal font-[DM Sans]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               <div className='w-44 h-12 bg-orange-400 text-center inline-flex justify-center items-center mt-10 rounded-lg'>
                <button className='w-24 text-white text-center text-base font-bold font-[DM Sans]'>Get Started</button>

               </div>
               </div>

               <div className='flex justify-center items-center '>
                <ul className='space-y-4'>
                    <li className='text-rose-200 text-base font-normal font-[DM Sans]'>Product</li>
                    <li className='text-rose-200 text-base font-normal font-[DM Sans]'>Course</li>
                    <li className='text-rose-200 text-base font-normal font-[DM Sans]'>Help/FAQ</li>
                    <li className='text-rose-200 text-base font-normal font-[DM Sans]'> Mobile</li>
                    <li className='text-rose-200 text-base font-normal font-[DM Sans]'>Career</li>
                </ul>

               </div>

            </div>

        </div>
    </div>
  )
}

export default Footer