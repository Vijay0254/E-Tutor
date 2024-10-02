import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLaptop } from "react-icons/md";

const Footer = () => {
  const items = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Services"
    },
    {
      id: 4,
      name: "Login"
    }
  ]
  return (
    <footer className='footer_img flex md:flex-row flex-col md:gap-y-0 gap-y-12 justify-evenly md:px-0 px-10 md:pr-20 py-20 pb-44 pt-32'>
        <div className='flex flex-col gap-4 w-[250px]'>
            <div className='flex gap-2 items-center'>
                <MdLaptop className='text-3xl text-blue-600' />
                <h1 className='text-2xl font-bold'>E-Tutor</h1>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
            <div className='flex gap-4'>
                <IoLocationSharp className='size-7 hover:text-blue-600' />
                <FaInstagram className='size-7 hover:text-blue-600' />
                <FaFacebook className='size-7 hover:text-blue-600' />
                <FaLinkedin className='size-7 hover:text-blue-600' />
            </div>
        </div>
        <div className='flex gap-5 md:gap-28'>
          <div className='md:w-auto w-[150px]'>
              <h1 className='text-2xl font-bold pb-5'>Important Links</h1>
              <div className='flex flex-col gap-3'>
                {
                  items.map((element) =>(
                    <a href='#' key={element.id} className='hover:text-blue-600'>{element.name}</a>
                  ))
                }
              </div>
          </div>
          <div className='flex flex-col gap-3 md:w-auto w-[150px]'>
              <h1 className='text-2xl font-bold pb-5'>Company Links</h1>
              <a href="#" className='hover:text-blue-600'>Our Servies</a>
              <a href="#" className='hover:text-blue-600'>Contact</a>
              <a href="#" className='hover:text-blue-600'>Privacy Policy</a>
          </div>
        </div>
        <div>
            <h1 className='text-2xl font-bold pb-5'>Resources</h1>
            <div className='flex flex-col gap-3'>
              {
                items.map((element) =>(
                  <a href='#' key={element.id} className='hover:text-blue-600'>{element.name}</a>
                ))
              }
            </div>
        </div>
    </footer>
  )
}

export default Footer