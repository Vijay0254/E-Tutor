import React from 'react'
import heroImg from "../assets/hero.png"
import { IoPlay } from "react-icons/io5";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='flex md:flex-row md:gap-0 gap-10 flex-col px-5 md:px-0 text-center md:text-start items-center justify-around py-16 md:py-20'>
        <motion.div initial={{opacity: 0, x:-200}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} className='flex flex-col gap-10 justify-center md:w-[500px]'>
            <h3 className='uppercase text-red-500 font-bold'>100% satisfaction guarantee</h3>
            <h1 className='font-bold text-5xl md:text-6xl'>Find Your Perfect <span className='text-yellow-400'>Tutor</span></h1>
            <p>We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</p>
            <div className='flex gap-5'>
                <button className='bg-yellow-400 rounded-full py-3 px-6 font-bold hover:scale-110 duration-300 hover:shadow-lg hover:shadow-gray-300'>Get Started</button>
                <div className='flex items-center gap-2'>
                    <IoPlay className='rounded-full text-blue-600 bg-blue-200 size-10 p-2' />
                    <h3 className='font-bold'>See how it works</h3>
                </div>
            </div>
        </motion.div>
        <div>
            <motion.img initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} transition={{type: "spring", stiffness: 100, delay: 0.2}} className='w-[600px]' src={heroImg} alt="hero" />
        </div>
    </section>
  )
}

export default Hero