import React, { useEffect, useState } from 'react';
import './JobAd.css'
import { Link } from 'react-router-dom';
import JobCategoryApply from './JobCategoryApply';

const SingleJobAd = ({x,handleDelete}) => {
    const {job, description, jobDescription, skill, category, types, _id, image, email } = x;
    console.log(x)

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobId?jId=${_id}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [_id])
console.log(apply)

    return (
        // grid grid-cols-3 md:grid-cols-1
        <div className=' job-single-categoryE email-job grid grid-cols-3'>
            
            <div className=''>   
            <img className='company-image'  src={image} alt="" />  <br />    
            <h4 className="title">Job Title: {job}</h4>
            <div>
            <p><span className='title2'>Job Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Job Type:</span> <span className='title3'>{types}</span></p>  
            <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>  
            </div>   
        </div> 

        <div className='btn-delete'>
                {/* <p><span className='title2'>About Company:</span> {description}</p> */}
                <p><span className='title2'>About Job:</span> {jobDescription}</p>
                <div className='btn-delete'>
            <button onClick={() => handleDelete(_id)} className='btn btn-error mt-5 d-button'>Delete Job Post</button>
            </div>
            </div>
            
            <div className='Applicant-s-job-container'>
                <h1 className='Applicant-s-job'>Applicant For This Job</h1>
            <div className='Applicant-s-job-container-small overflow-y-auto h-56 ...'>
            {
                            apply.map(x => <JobCategoryApply
                                key={x._id}
                                x={x}
                            >
                                
                            </JobCategoryApply>)
                        }
            </div>
           
            </div>
            
            
    
        </div>
    );
};

export default SingleJobAd;