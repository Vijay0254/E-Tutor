import { div } from 'framer-motion/client'
import React from 'react'
import Slider from 'react-slick';

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                //   initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]

      };
    const items = [
        {
            id: 1,
            name: "John Doe",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate, vitae accusantium dicta doloremque voluptatem.",
            logo: "https://picsum.photos/200"
        },
        {
            id: 2,
            name: "Steve Smith",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate, vitae accusantium dicta doloremque voluptatem.",
            logo: "https://picsum.photos/200"
        },
        {
            id: 3,
            name: "Kristen",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate, vitae accusantium dicta doloremque voluptatem.",
            logo: "https://picsum.photos/200"
        },
        {
            id: 4,
            name: "Ariana",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate, vitae accusantium dicta doloremque voluptatem.",
            logo: "https://picsum.photos/200"
        }
    ]
  return (
    <section>
        <div className='text-center pt-12 md:pt-28 pb-12'>
            <p className='uppercase pb-3 text-red-500 font-bold'>OUR TESTIMONIALS</p>
            <h1 className='font-bold text-2xl md:text-3xl'>What Our Students Say About Us</h1>
        </div>
        <div className='px-3 md:px-8'>
            <Slider {...settings}>
                { items.map((element) =>(
                    <div key={element.id} className='flex px-5'>
                        <div className='bg-blue-100 rounded-lg p-6 shadow-md shadow-slate-300'>
                            <div className='flex items-center gap-3'>
                                <img className='size-12 rounded-full' src={element.logo} alt="logo" />
                                <h1 className='font-bold text-xl'>{element.name}</h1>
                            </div>
                            <p className='py-4'>{element.des}</p>
                            <p className='pb-7'>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Testimonials
