import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FinalApply = ({x}) => {
    const {uName, ApplicantEmail, uPNumber, ulinkedin, uaSkills, uAddress,  uCategoryEdu, uImage,  uaResume, applicantUserEmail} =x;
    

    const a = useLoaderData();
    const {job, description, jobDescription, skill, category, types, _id, image, email } = a;


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const handleApply = data => {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                            name: uName, 
                            applicantEmail: ApplicantEmail,
                            pNumber: uPNumber,
                            linkedin: ulinkedin,
                            aResume : uaResume,
                            aSkills : uaSkills,
                            address: uAddress,
                            categoryEdu: uCategoryEdu,
                            image: image,
                            imageApplicant: uImage,
                            companyEmail: email,
                            appliedOn: job,
                            jTypes: types,
                            jId: _id,
                            applicantUserEmail: applicantUserEmail
                }

                // save doctor information to the database
                fetch('http://localhost:5000/apply', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    alert(`Applied Successfully`);
                     navigate('/')
                })
        //     }
        // })
    }




    return (
        <div>
            <div className='formApply'>
            <h2 className="text-3xl home-title">Apply Now</h2>
            <div className='add-jobs-container'>
           
            
            <form onSubmit={handleSubmit(handleApply)}>
            {/* {
                x.map(x => <div
                    key={x._id}
                    x={x}
                    
                > */}
                    <div className=' job-single-categoryZ email-job grid grid-cols-3'>

                    <div className=''>   
            <img className='applicant-image'  src={uImage} alt="" />  <br />    
            
            <div>
            
            
            </div>   
        </div> 
                    <div className=''>
                
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
            </div>

                {/* </div>)
            } */}
                
                
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div> */}
                <input className='btn  w-full btn-abc mt-4' value="Apply Now" type="submit" />
            </form>
        </div>
        </div>
           
            
        </div>
    );
};

export default FinalApply;


                            // name: uName, 
                            // applicantEmail: ApplicantEmail,
                            // pNumber: uPNumber,
                            // linkedin: ulinkedin,
                            // aResume : uaResume,
                            // aSkills : uaSkills,
                            // address: uAddress,
                            // categoryEdu: uCategoryEdu,
                            // image: image,
                            // imageApplicant: uImage,
                            // companyEmail: email,
                            // appliedOn: job,
                            // jTypes: types,
                            // jId: _id,
                            // applicantUserEmail: applicantUserEmail