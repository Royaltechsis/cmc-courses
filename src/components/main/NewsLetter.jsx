import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import signupimg from '../assets/images/signup1.png'

function NewsLetter() {
 return (
  // NewsLetter
  <section className='w-full mx-auto'>
   <div className='flex items-center justify-between'>
    <figure className='sm:hidden'>
     <img
      src={signupimg}
      alt='Illustration art'
      className='w-100'
      loading='lazy'
     />
    </figure>

    <div className='px-5'>
     <p className='text-gray-500 font-bold'>Subscribe Our Newsletter</p>

     <h2 className='text-blue-950 font-bold text-fontSize1 mt-3 leading-10'>
      The latest resources, sent to your inbox weekly
     </h2>

     <form action='#' className='mt-5'>
      <div className='flex items-center mb-3 px-2 md:flex-col gap-5'>
       <input
        type='email'
        name='email'
        placeholder='Enter your email address...
                  '
        className=' h-10 rounded-md bg-white text-gray-500
        py-[15px] px-[20px] shadow-inner focus:outline-lightpurple
        md:w-full transition-all'
       />

       <button
        type='submit'
        className='bg-lightpurple p-[8px] flex items-center
       text-white rounded md:ml-0 md:w-full'>
        Subscribe Now <FaArrowCircleRight className='ml-3 rounded' />
       </button>
      </div>
     </form>
    </div>
   </div>
  </section>
 )
}

export default NewsLetter
