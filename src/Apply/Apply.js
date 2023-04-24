import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Apply.css'

const Apply = () => {
    const a = useLoaderData();
    const {job, description, jobDescription, skill, category, types, _id, image, email } = a;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    //
    const {user} = useContext(AuthContext);
    const [x, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userProfileEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [user?.email])
    //


    const handleApply = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: x.name, 
                    applicantEmail: x.applicantEmail,
                    pNumber: x.pNumber,
                    linkedin: x.linkedin,
                    aResume : x.aResume,
                    aSkills : x.aSkills,
                    address: x.address,
                    categoryEdu: x.categoryEdu,
                    image: imgData.data.url,
                    imageApplicant: x.image,
                    companyEmail: email,
                    appliedOn: job,
                    jTypes: types,
                    jId: _id,
                    applicantUserEmail: user.email
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
            }
        })
    }



    return (
        <div className='grid grid-cols-2 email-job'>
            {/* Job Info */}
        <div className='job-single-categoryS'>   
            <img className='company-image'  src={image} alt="" />  <br />    
            <h4 className="title">Job Title: {job}</h4>
            <div>
            <p><span className='title2'>Job Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Job Type:</span> <span className='title3'>{types}</span></p>  
            <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>  
            </div>
            <p className='mt-4'><span className='title2'>About Company:</span> {description}</p>
            <p className='mt-4'><span className='title2'>About Job:</span> {jobDescription}</p>
            
        </div>  

            {/* Apply Indo */}
            <div className='formApply'>
            <h2 className="text-3xl home-title">Apply Now</h2>
            <div className='add-jobs-container'>
           
            
            <form onSubmit={handleSubmit(handleApply)}>
            {
                x.map(x => <div
                    key={x._id}
                    x={x}
                    
                >
                    <div className=' job-single-categoryZ email-job grid grid-cols-3'>

                    <div className=''>   
            <img className='applicant-image'  src={x.image} alt="" />  <br />    
            {/* <h4 className="ap-title1">Applicant Name: {name}</h4> */}
            <div>
            
            
            </div>   
        </div> 
                    <div className=''>
                {/* <p><span className='title2'>About Company:</span> {description}</p> */}
                <h2 className=' ap-title'>Applicant Information</h2>
                <p><span className='title5'>Name:</span> <span className='title4'>{x.name}</span></p>  
                <p><span className='title5'>Email:</span> <span className='title4'>{x.applicantEmail}</span></p>  
            <p><span className='title5'>Phone:</span> <span className='title4'>{x.pNumber}</span></p>  
                <p><span className='title5'>Linkedin Profile:</span> <span className='title4'>{x.linkedin}</span></p>  
                <p><span className='title5'>Resume Link:</span> <span className='title4'>{x.aResume}</span></p>  
                <p><span className='title5'>Skills:</span> <span className='title4'>{x.aSkills}</span></p>  
                <p><span className='title5'>Address:</span> <span className='title4'> {x.address} </span></p>
                <p><span className='title5'>Education:</span> <span className='title4'>{x.categoryEdu}</span></p>
            </div>
            </div>

                </div>)
            }
                
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Email</span></label>
                    <input type="email" {...register("applicantEmail", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.applicantEmail && <p className='text-red-500'>{errors.applicantEmail.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="number" {...register("pNumber", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.pNumber && <p className='text-red-500'>{errors.pNumber.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Linkedin Profile Link</span></label>
                    <input type="text" {...register("linkedin", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.linkedin && <p className='text-red-500'>{errors.linkedin.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Skills</span></label>
                    <input type="text" {...register("aSkills", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.aSkills && <p className='text-red-500'>{errors.aSkills.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Address</span></label>
                    <input type="text" {...register("address", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                </div>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Education Qualification</span></label>
                    <select 
                    {...register('categoryEdu')}
                    className="select input-bordered w-full max-w-xs">
                        {<option>JSC</option>}
                        {<option>SSC</option>}
                        {<option>HSC</option>}
                        {<option>Graduate</option>}
                        {<option>Postgraduate</option>}   
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <p>After completing application send your resume and cover letter on- <span className='email-tit'>{email}</span> </p> */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Apply" type="submit" />
            </form>
        </div>
        </div>

        </div>
    );
};

export default Apply;