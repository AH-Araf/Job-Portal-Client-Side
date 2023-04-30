import React from 'react';
import { Link } from 'react-router-dom';

const JobCategoryApply = ({x}) => {
    //const {name, image, applicantEmail,  pNumber, linkedin, aSkills, address, categoryEdu, imageApplicant, companyEmail, appliedOn,jTypes,jId,applicantUserEmail } = x;
   // console.log(x)
    return (
        <div className='applicant-details-box grid grid-cols-2'>
        <div >
            <div ><img  className='applicant-image-job' src={x.imageApplicant} alt="" />  <br /></div>
            
            
        </div>
        <div>
        <h1>Name: {x.name} </h1>
        <h1>Number: {x.pNumber} </h1>
        <h1>Email: {x.applicantEmail} </h1>

            <Link to={`/applicant/${x._id}`}><button className='btn-app-det'>View Applicant Details</button></Link>
        </div>

        </div>  
    );
};

export default JobCategoryApply;