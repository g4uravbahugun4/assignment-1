import React from 'react'

function Navbar() {
  return (
   <main className='w-screen bg-gray-50 flex   justify-center p-3 '>

 
    
    <a className='p-4 text-center  font-semibold   hover:cursor-pointer  text-base hover:text-xl '>Service</a>
    <a className='p-4 text-center  font-semibold   hover:cursor-pointer  text-base hover:text-xl'>Product</a>
    <a className='p-4 text-center  font-semibold   hover:cursor-pointer  text-base hover:text-xl'>Technology</a>
    <a className='p-4 text-center font-semibold   hover:cursor-pointer  text-base hover:text-xl'>About</a>
    <a className='p-4 text-center font-semibold   hover:cursor-pointer  text-base hover:text-xl'>Client</a>
    <a className='p-4 text-center  font-semibold   hover:cursor-pointer  text-base hover:text-xl'>Patner</a>
 
    <a  className='pt-4  pl-20  font-semibold   hover:cursor-pointer  '> <img src='\icons8-home-25.png'  className='  hover:w-8 hover:h-8  w-6 h-6'/></a>
    <a  className='pt-4 px-2  font-semibold   hover:cursor-pointer   hover:text-xl'> <img src='\icons8-new-message-24.png'  className=' hover:w-8 hover:h-8 w-6 h-6' /></a>

   </main>
  )
}
 
export default Navbar