import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleApplication.css'

const SingleApplicant = () => {
    const a = useLoaderData();
    const {name, applicantEmail,  pNumber, linkedin, aSkills, address, categoryEdu, image, companyEmail, appliedOn,jTypes,jId,applicantUserEmail, _id } = a;
    

    return (
        <div className='job-single-categoryO'>
        <div className='job-single-categoryQ'>   
            <img className='applicant-image'  src={image} alt="" />  <br />
            <h2 className=' ap-title'>Applicant Information</h2>
            <h4 className="title">Applicant Name: {name}</h4>    
            
                <p><span className='title5'>Email:</span> <span className='title4'>{applicantEmail}</span></p>  
            <p><span className='title5'>Phone:</span> <span className='title4'>{pNumber}</span></p>  
                <p><span className='title5'>Linkedin Profile:</span> <span className='title4'>{linkedin}</span></p>  
                <p><span className='title5'>Skills:</span> <span className='title4'>{aSkills}</span></p>  
                <p><span className='title5'>Address:</span> <span className='title4'> {address} </span></p>
                <p><span className='title5'>Education:</span> <span className='title4'>{categoryEdu}</span></p>  

                <h2 className='mt-10 ap-title '>Job Details</h2>
                <p><span className='title2'>Applied on:</span> {appliedOn}</p>
                {/* <p><span className='title2'>Company's Email:</span> {companyEmail}</p> */}
                <p><span className='title2'>Job's type:</span> {jTypes}</p>
        </div> 
        
            
            
        </div>
    );
};

export default SingleApplicant;