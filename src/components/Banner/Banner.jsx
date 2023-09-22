import React from 'react'
import profile from '../../../public/images/user.png'


const Banner = () => {
  return (
    <div>
      <div className='flex items-center '>
        <div className=' m-auto w-[520px] space-y-6'>
        <h2 className='text-7xl'>One Step <br />Closer To Your Dream Job</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className='bg-blue-400 py-3 px-7 text-white rounded-2xl'>Get Starded</button>
        </div>
        <div>
            <img src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
