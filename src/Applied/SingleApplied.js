import React from 'react';
import './Applied.css'

const SingleApplied = ({x}) => {
    const {name, applicantEmail,  pNumber, linkedin, aSkills, address, categoryEdu, image, companyEmail, appliedOn,jTypes,jId,applicantUserEmail } = x;
    return (
        <div>
            <div className=' job-single-categoryZ email-job grid grid-cols-3'>
            
            <div className=''>   
            <img className='applicant-image'  src={image} alt="" />  <br />    
            <h4 className="ap-title1">Applicant Name: {name}</h4>
            <div>
            
            
            </div>   
        </div> 

        <div className=''>
                {/* <p><span className='title2'>About Company:</span> {description}</p> */}
                <h2 className=' ap-title'>Applicant Information</h2>
                <p><span className='title5'>Email:</span> <span className='title4'>{applicantEmail}</span></p>  
            <p><span className='title5'>Phone:</span> <span className='title4'>{pNumber}</span></p>  
                <p><span className='title5'>Linkedin Profile:</span> <span className='title4'>{linkedin}</span></p>  
                <p><span className='title5'>Skills:</span> <span className='title4'>{aSkills}</span></p>  
                <p><span className='title5'>Address:</span> <span className='title4'> {address} </span></p>
                <p><span className='title5'>Education:</span> <span className='title4'>{categoryEdu}</span></p>
            </div>
            <div className=' home-titleT'>
                <h2 className=' ap-title'>About Job</h2>
                <p><span className='title2'>Applied on:</span> {appliedOn}</p>
                <p><span className='title2'>Company's Email:</span> {companyEmail}</p>
                <p><span className='title2'>Job's type:</span> {jTypes}</p>
            
            {/* <Link to={`/jobs/${_id}`}><button className='btn btn-outline mt-5'>Job Details</button></Link> */}
            </div>
    
        </div>
        </div>
    );
};

export default SingleApplied;