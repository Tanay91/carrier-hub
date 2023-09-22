import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localstorage';

const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id);
    const job=jobs.find(job =>job.id===idInt);

    const handleApplyJob=()=>{
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }
  return (
    <div>
      <h2  className='text-5xl font-bold text-center mb-8'>Job Details</h2>
      <div className='grid gap-5 md:grid-cols-4 mb-10'>
          <div className='border md:col-span-3 space-y-8'>
            <h3><span className='font-bold '>Job Description:</span> {job.job_description} </h3>     
             <h3><span  className='font-bold '>Job Responsibility:</span>{job.job_responsibility}</h3> 
             <h3><span className='font-bold '>Educational Requirements:</span>{job.educational_requirements}</h3> 
             <h3><span className='font-bold'>Experiences: </span>{job.experiences}</h3>  
         </div>
      <div className='border-2 space-y-6 p-5 bg-gray-200'>
      <h2 className='text-3xl font-extrabold'>Job Details</h2>
      <p>Salary: {job.salary}</p>
      <p>Job Title: {job.job_title}</p>
      <p>Contact Information</p>
      <p>Phone: {job.contact_information.phone}</p>
      <p>Email: {job.contact_information.email}</p>
      <p>Address: {job.contact_information.address}</p>
      <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply Now</button>
      </div>
           
          </div>
          <ToastContainer />
    </div>
  )
}

export default JobDetails
