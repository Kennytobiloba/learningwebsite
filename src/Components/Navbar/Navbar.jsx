import React, { useState } from 'react';

const Navbar = () => {
  const Menu = () => (
    <>
      <li><a href="#Home" className='text-orange-400 text-base font-bold font-[Poppins] hover:text-zinc-500'>Home</a></li>
      <li><a href="#Course" className='lg:text-zinc-500 text-orange-400  text-base font-medium font-[Poppins] lg:hover:text-orange-500 '>Course</a></li>
      <li><a href="#" className='lg:text-zinc-500 text-orange-400  text-base font-medium font-[Poppins] hover:text-orange-500'>About</a></li>
      <li><a href="#" className='lg:text-zinc-500 text-orange-400  text-base font-medium font-[Poppins] hover:text-orange-500'>Pricing</a></li>
      <li><a href="#" className='lg:text-zinc-500 text-orange-400  text-base font-medium font-[Poppins] hover:text-orange-500 lg:hidden flex'>Sign up</a></li>
      
      <li className='lg:hidden flex'><button className=' w-32 h-10 bg-orange-400 rounded text-center p-2 text-white text-base  font-semibold font-[Poppins]'>Login</button></li>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className='flex w-full bg-transparent fixed top-0 left-0 right-0 z-10'>
        <div className="w-full bg-white">
          <div className='flex justify-between items-center    sm:px-[4rem] lg:px-[6rem] px-[2rem] py-[2rem] '>
            <div className='inline-flex space-x-10'>
              <h1 className='text-neutral-600 text-4xl font-normal font-[Bebas Neue] '>Tutorify</h1>
              
              {/* mobile view design */}
              <ul className='lg:flex space-x-8 items-center justify-center hidden '>
                <Menu/>
              </ul>
            </div>

            <div className='lg:flex gap-6 hidden'>
              <button className='text-zinc-800 text-base font-medium font-[Poppins] underline'>Sign In</button>
              <div className='w-32 h-10 bg-orange-400 rounded text-center p-2'>
                <button className='text-white text-base text-center font-semibold font-[Poppins]'>Login</button>
              </div>
            </div>

            {/* mobile view design */}
            <div className='lg:hidden flex items-center'>
              {
                toggleMenu ? <i className="fa-solid fa-xmark text-[27px] text-orange-500" onClick={() => setToggleMenu(false)}></i>
                  : <i className="fa-solid fa-bars-staggered text-[27px] text-orange-500" onClick={() => setToggleMenu(true)}></i>
              }
            </div>
          </div>

          {/* mobile view design */}
          {toggleMenu && (
            <div className='lg:hidden inset-0 h-[100vh] '>
              <ul className='scale-up-center  text-white bg-gray-800 grid h-full place-items-center py-20'>
                <Menu />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
