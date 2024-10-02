import React, { useState } from 'react'
import { MdLaptop } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Mobilemenu from './Mobilemenu';
import Popup from './Popup';

const Header = () => {
    const [menu,setmenu] = useState(false)
    const [popup,setpopup] = useState(true)
  return (
    <>
        <header className='flex justify-between md:px-0 px-6 md:justify-around items-center py-7'>
            <div className='flex gap-2 items-center'>
                <MdLaptop className='text-3xl text-blue-600' />
                <h1 className='text-2xl font-bold'>E-Tutor</h1>
            </div>
            <div className='hidden md:flex gap-10 text-slate-500 font-semibold text-lg'>
                <a href="/" className='hover:text-blue-600'>Home</a>
                <a href="#" className='hover:text-blue-600'>For Students</a>
                <a href="#" className='hover:text-blue-600'>Resources</a>
                <a href="#" className='hover:text-blue-600'>About Us</a>
                <a href="#" className='hover:text-blue-600'>Contact Us</a>
            </div>
            <div className='hidden md:flex gap-5'>
                <button className='text-lg font-semibold'>Sign in</button>
                <button className='bg-blue-600 rounded-full text-white text-lg font-semibold px-6 py-2'>Register</button>
            </div>
            <nav className='flex md:hidden'>
                <FaBars className='font-bold text-2xl' onClick={() =>setmenu(!menu)}/>
            </nav>
        </header>
        <Mobilemenu menu={menu} />
        {popup && <Popup popup={popup} setpopup={setpopup} />}
    </>
  )
}

export default Header