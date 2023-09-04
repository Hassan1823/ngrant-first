import React from 'react'
import Service from './Service'

const OutlawServices = () => {
  return (
    <div className='w-full h-auto bg-black flex flex-col justify-center items-center'>
      <h1 className="uppercase text-4xl font-bold text-red-700 my-8 cursor-pointer">Services</h1>
      <div className=" w-full h-auto flex flex-col justify-center items-center">

      <Service />
      </div>
    </div>
  )
}

export default OutlawServices