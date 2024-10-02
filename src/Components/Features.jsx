import React from 'react'
import { motion } from 'framer-motion';
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";

const Features = () => {
  return (
    <section>
        <div className='text-center pt-20 pb-3 md:pb-12'>
            <h2 className='uppercase pb-3 text-red-500 font-bold'>why choose us</h2>
            <h1 className='text-2xl md:text-4xl font-bold'>Benefits of online tutoring services with us</h1>
        </div>
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: {duration: 1, delay: 0.4}}} className='md:flex grid grid-cols-2 md:justify-evenly py-7 px-4 md:px-20 gap-5 md:gap-10'>
            <div className='p-5 rounded-lg shadow-lg shadow-slate-400'>
                <GrYoga className='bg-blue-600 rounded-md p-2 text-white size-10' />
                <h1 className='py-4 text-lg font-semibold'>One-on-one Teaching</h1>
                <p className='text-slate-500 text-sm md:text-base'>All of our special education experts have a degree in special education.</p>
            </div>
            <div className='p-5 rounded-lg shadow-lg shadow-slate-400'>
                <FaDumbbell className='bg-green-600 rounded-md p-2 text-white size-10' />
                <h1 className='py-4 text-lg font-semibold'>24/7 Tutor Availability</h1>
                <p className='text-slate-500 text-sm md:text-base'>Our tutors are always available to respond as quick as possible for you.</p>
            </div>
            <div className='p-5 rounded-lg shadow-lg shadow-slate-400'>
                <GiGymBag className='bg-orange-600 rounded-md p-2 text-white size-10' />
                <h1 className='py-4 text-lg font-semibold'>Interactive Whiteboard</h1>
                <p className='text-slate-500 text-sm md:text-base'>Our digital whiteboard equipped with audio and video chat features.</p>
            </div>
            <div className='p-5 rounded-lg shadow-lg shadow-slate-400'>
                <GiGymBag className='bg-pink-600 rounded-md p-2 text-white size-10' />
                <h1 className='py-4 text-lg font-semibold'>Affordable Prices</h1>
                <p className='text-slate-500 text-sm md:text-base'>Choose an expert tutor based on your budget and per hour.</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Features