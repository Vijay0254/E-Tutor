import React from 'react'
import banner1Img from "../assets/banner1.png"
import { motion } from 'framer-motion';

const Banner1 = () => {
  return (
    <section className='py-20 flex md:flex-row flex-col items-center justify-around'>
        <motion.div initial={{scale: 0, opacity: 0}} whileInView={{scale:1, opacity: 1}} transition={{duration: 1, delay: 0.3}}>
            <img className='md:w-[450px]' src={banner1Img} alt="banner1" />
        </motion.div>
        <div className='flex text-center md:text-start px-3 md:px-0 flex-col items-center gap-5 justify-center md:w-[500px]'>
            <h3 className='uppercase text-red-500 font-bold'>CUSTOMIZE WITH YOUR SCHEDULE</h3>
            <h1 className='font-bold text-xl md:text-2xl'>Personalized Professional Online Tutor on Your Schedule</h1>
            <p className='text-slate-500 pb-4'>Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form</p>
            <div>
                <button className='bg-yellow-400 rounded-full py-3 px-6 font-bold hover:scale-110 duration-300 hover:shadow-lg hover:shadow-gray-300'>Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Banner1