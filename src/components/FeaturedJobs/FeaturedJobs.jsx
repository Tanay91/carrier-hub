import React, { useEffect, useState } from 'react'
import Job from '../job/job';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  return (
    <div>
      <h2 className='text-center text-5xl'>Featured Jobs: {jobs.length}</h2>
      <p className='text-center '>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-2 gap-5 justify-center mt-6'>
        {
            jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength===jobs.length && 'hidden'}>
        <button onClick={()=>setDataLength(jobs.length)} className='btn bg-blue-400 '>Show All Jobs</button>
      </div>
    </div>
  )
}

export default FeaturedJobs
