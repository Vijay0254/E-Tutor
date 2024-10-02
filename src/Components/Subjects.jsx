import React from 'react'
import { FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';

const Subjects = () => {
  return (
    <section>
        <div className='text-center pt-12 md:pt-28 pb-12'>
            <p className='uppercase pb-3 text-red-500 font-bold'>Our tutor subjects</p>
            <h1 className='font-bold text-2xl md:text-3xl'>Find Online Tutor in Any Subject</h1>
        </div>
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: {duration: 1, delay: 0.4}}} className='grid grid-cols-1 px-4 md:grid-cols-4 md:px-20 gap-5 pb-20'>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-blue-100 p-3 size-10 rounded-md text-blue-600'/>
                <p>Engineering</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-green-100 p-3 size-10 rounded-md text-green-600'/>
                <p>English</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-pink-100 p-3 size-10 rounded-md text-pink-600'/>
                <p>Programming</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-orange-100 p-3 size-10 rounded-md text-orange-600'/>
                <p>Science</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-blue-[#075287] p-3 size-10 rounded-md text-[#075267]'/>
                <p>History</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-blue-[#986d3d] p-3 size-10 rounded-md text-[#986d1d]'/>
                <p>Psychology</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-blue-[#b93858] p-3 size-10 rounded-md text-[#b93838]'/>
                <p>Web Design</p>
            </div>
            <div className='flex items-center gap-4 border-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 duration-300 rounded-lg p-4 border-slate-300'>
                <FaBook className='bg-blue-[#464666] p-3 size-10 rounded-md text-[#464646]'/>
                <p>See all</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Subjects