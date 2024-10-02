import React from 'react'

const Popup = ({popup,setpopup}) => {
  return (
    <section className='bg-yellow-400 py-1 hidden md:flex justify-center relative'>
        <p className='font-semibold'>Are you a univerity or school student for an online tutoring partnership? <span className='cursor-pointer text-blue-600'>Talk to us</span></p>
        <p onClick={() =>setpopup(!popup)} className='absolute cursor-pointer right-10 bottom-1 font-bold text-xl'>×</p>
    </section>
  )
}

export default Popup