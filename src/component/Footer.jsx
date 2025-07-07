import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=' mt-16 bg-blue-950 py-16 px-6 text-white'>
        <div className='  max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4'>

<div>
  <h3 className='font-bold mb-4'>TravelEase</h3>
  <ul className='text-sm space-y-4'>
    <li className='text-gray-500 hover:text-white transition'>Making travel</li>
    <li className='text-gray-500 hover:text-white transition'>planning easy and</li>
    <li className='text-gray-500 hover:text-white transition'>enjoyable since 2010.</li>
  </ul>
</div>




<div>
  <h3 className='font-bold mb-4'>Quick Links</h3>
  <ul className='text-sm space-y-4'>
    <li  className='text-gray-500 hover:text-white transition'>Home</li>
    <li  className='text-gray-500 hover:text-white transition'>Hotels</li>
    <li  className='text-gray-500 hover:text-white transition'>Tours</li>
    <li  className='text-gray-500 hover:text-white transition'>About Us.</li>
  </ul>
</div>

<div>
  <h3 className='font-bold mb-4 '>Support</h3>
  <ul className='text-sm space-y-4'>
    <li  className='text-gray-500 hover:text-white transition'>Contact Us</li>
    <li  className='text-gray-500 hover:text-white transition'>Privacy Policy</li>
    <li  className='text-gray-500 hover:text-white transition'>About Us</li>
    <li  className='text-gray-500 hover:text-white transition'>Terms of Service</li>
  </ul>
</div>

<div>
  <h3 className='font-bold mb-4'>Newsletter</h3>
  <ul className='text-sm mb-4'>
    <li  className='text-gray-500 hover:text-white transition'>Subscribe for travel deals and tips</li>
  </ul>



 <form className="flex flex-col sm:flex-row items-center gap-2">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="w-full p-2 rounded border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="submit"
      className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
    >
      Subscribe
    </button>
  </form>



        </div>
        </div>
      </footer>



    </div>
  )
}

export default Footer
