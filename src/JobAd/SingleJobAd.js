import React from 'react';
import './JobAd.css'
import { Link } from 'react-router-dom';

const SingleJobAd = ({x,handleDelete}) => {
    const {job, description, jobDescription, skill, category, types, _id, image, email } = x;
    console.log(x)


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
            </div>
            <div className='btn-delete'>
            <button onClick={() => handleDelete(_id)} className='btn btn-error mt-5 d-button'>Delete Job Post</button>
            {/* <Link to={`/jobs/${_id}`}><button className='btn btn-outline mt-5'>Job Details</button></Link> */}
            </div>
    
        </div>
    );
};

export default SingleJobAd;