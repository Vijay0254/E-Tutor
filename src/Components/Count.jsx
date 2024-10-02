import React from 'react'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <section className='bg-blue-600 grid grid-cols-2 gap-y-8 md:gap-y-0 md:flex md:justify-evenly py-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-3xl'>
                <CountUp start={0} end={898} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
            </h1>
            <p className='text-white'>Expert tutors</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-3xl'>
                <CountUp start={0} end={20000} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />+
            </h1>
            <p className='text-white'>Hours content</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-3xl'>
                <CountUp start={0} end={298} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
            </h1>
            <p className='text-white'>Subject and courses</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-3xl'>
                <CountUp start={0} end={72898} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />+
            </h1>
            <p className='text-white'>Active students</p>
        </div>
    </section>
  )
}

export default Count