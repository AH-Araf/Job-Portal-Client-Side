import React from 'react';

const SingleUserProfile = ({x,handleDelete}) => {
    const {uName, ApplicantEmail, uaResume,  uPNumber, ulinkedin, uaSkills, uAddress,uCategoryEdu, uImage,applicantUserEmail, _id } = x;
    console.log(x)
    return (
        // <div><h1>Single</h1></div>
        <div>
            <div className=' job-single-categoryZ email-job grid grid-cols-3'>
            
            <div className=''>   
            <img className='applicant-image'  src={uImage} alt="" />  <br />    
            {/* <h4 className="ap-title1">Applicant Name: {name}</h4> */}
            <div>
            
            
            </div>   
        </div> 

        <div className=''>
                {/* <p><span className='title2'>About Company:</span> {description}</p> */}
                <h2 className=' ap-title'>Applicant Information</h2>
                <p><span className='title5'>Name:</span> <span className='title4'>{uName}</span></p>  
                <p><span className='title5'>Email:</span> <span className='title4'>{ApplicantEmail}</span></p>  
            <p><span className='title5'>Phone:</span> <span className='title4'>{uPNumber}</span></p>  
                <p><span className='title5'>Linkedin Profile:</span> <span className='title4'>{ulinkedin}</span></p>  
                <p><span className='title5'>Resume Link:</span> <span className='title4'>{uaResume}</span></p>  
                <p><span className='title5'>Skills:</span> <span className='title4'>{uaSkills}</span></p>  
                <p><span className='title5'>Address:</span> <span className='title4'> {uAddress} </span></p>
                <p><span className='title5'>Education:</span> <span className='title4'>{uCategoryEdu}</span></p>
            </div>
            <div className='btn-delete'>
            <button onClick={() => handleDelete(_id)} className='btn btn-error mt-5 d-button'>Delete & Update A New Job Profile</button>
            {/* <Link to={`/jobs/${_id}`}><button className='btn btn-outline mt-5'>Job Details</button></Link> */}
            </div>
            
    
        </div>
        </div>
    );
};

export default SingleUserProfile;