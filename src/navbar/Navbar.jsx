import React from 'react'
import Logo from '../assets/logo/testi.jpeg'

const Navbar = () => {
  return (
    <>
    <section className=' fixed top-0 left-0 w-full z-0 bg-gray-50'>
      <div className='sm:px-20 lg:px-32 flex justify-between items-center  '>

{/* Logo */}
<div className='shrink-0'>
  <img src={Logo} alt="Logo Visibility" className='h-24' />
</div>


{/* navigation  */}
<nav className='hidden md:block'>
  <ul className=' flex flex-wrap items-center gap-12'>
  <li><a href="#About" className='hover:text-pink-500 underline-offset-1 transition'>About</a></li>
  <li><a href="#Blog" className='hover:text-pink-500 underline-offset-1 transition'>Blog</a></li>
  <li><a href="#Pricing" className='hover:text-pink-500 underline-offset-1 transition'>Pricing</a></li>
  <li><a href="#ContactUs" className='hover:text-pink-500 underline-offset-1 transition'>Contact Us</a></li>
  <li><a href="# Testimonials
" className='hover:text-pink-500 underline-offset-1 transition'> Testimonials
</a></li>

  </ul>
</nav>


{/* Login */}

<div className='hidden md:block'>
<div className='flex items-center gap-24'>
  <a href="#Login" className='hover:text-pink-500 underline-offset-1 transition'>Login</a>
  <button className='bg-pink-500 hover:bg-pink-600 py-3 px-8 rounded-full text-white font-semibold'>Sign Up</button>
</div>
</div>

      </div>
    </section>
      
    </>
  )
}

export default Navbar
