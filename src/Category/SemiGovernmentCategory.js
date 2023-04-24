import React from 'react';
import { Link } from 'react-router-dom';

const SemiGovernmentCategory = ({a}) => {
    const {job, description, jobDescription, skill, category, types, _id, image } = a;
    return (
        <div className='job-single-categoryF'>   
            <img className='company-image'  src={image} alt="" />  <br />    
            <h4 className="title">Job Title: {job}</h4>
            <div>
            <p><span className='title2'>Job Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Job Type:</span> <span className='title3'>{types}</span></p>  
            <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>  
            </div>
            
            <Link to={`/jobs/${_id}`}><button className='btn btn-outline mt-5'>Job Details</button></Link>
            
        </div> 
    );
};

export default SemiGovernmentCategory;