import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const Mobilemenu = ({menu}) => {
  return (
    <AnimatePresence mode='wait'>
        { menu && 
            <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}} transition={{duration: 0.5}}>
                <div className='flex flex-col text-center py-6 mx-6 uppercase rounded-lg bg-yellow-300 gap-5 text-slate-500 font-semibold text-lg'>
                    <a href="/" className='hover:text-blue-600'>Home</a>
                    <a href="#" className='hover:text-blue-600'>For Students</a>
                    <a href="#" className='hover:text-blue-600'>Resources</a>
                    <a href="#" className='hover:text-blue-600'>About Us</a>
                    <a href="#" className='hover:text-blue-600'>Contact Us</a>
                </div>
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default Mobilemenu