import React from 'react'
import { Link } from 'react-router-dom'

const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job
  return (
    <div className='bg-gray-300 h-[350px] w-96 p-11 m-auto shadow-xl justify-center space-y-3 rounded-2xl flex flex-col mb-10 flex-grow' >
      <img className='w-[150px]' src={logo} alt="" />
      <h5 className='text-xl font-bold'>{job_title}</h5>
      <p className='mb-4'>{company_name}</p>
      <span className='mr-4 border-2 border-black px-2 w-[80px]'>{remote_or_onsite}</span> 
      <span>{job_type}</span>
      <div className='flex justify-between'>
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>
      <Link to={`/job/${id}`}>
      <button className='btn bg-blue-600 text-white'>View Details</button>
      </Link>
    </div>
  )
}

export default Job
