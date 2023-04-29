import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SingleUserProfile from './SingleUserProfile';
import { useState } from 'react';
import { useEffect } from 'react';

const UserProfile = () => {
    // const a = useLoaderData();
    // const {job, description, jobDescription, skill, category, types, _id, image, email } = a;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;




    //
    const {user} = useContext(AuthContext);
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userProfileEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [user?.email])
    //



    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/userProfileDelete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = job.filter(odr => odr._id !== id);
                    setJob(remaining);
                }
            })
        }
    }



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
                    uName: data.name, 
                    ApplicantEmail: data.applicantEmail,
                    uPNumber: data.pNumber,
                    ulinkedin: data.linkedin,
                    uaSkills : data.aSkills,
                    uAddress: data.address,
                    uCategoryEdu: data.categoryEdu,
                    uImage: imgData.data.url,
                    uaResume: data.aResume,
                    // companyEmail: email,
                    // appliedOn: job,
                    // jTypes: types,
                    // jId: _id,
                    applicantUserEmail: user.email
                }
                //uName, ApplicantEmail, uPNumber, ulinkedin, uaSkills, uAddress,  uCategoryEdu, uImage,  uaResume, applicantUserEmail
                // save doctor information to the database
                fetch('http://localhost:5000/userJobProfile', {
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
                    alert(`Job Profile Created Successfully`);
                     navigate('/')
                })
            }
        })
    }



    return (
<div>
{
  job.length===0?
  <>
      <div className='email-job'>
            

            
            <div className='formApply'>
            <h2 className="text-3xl home-title">Create Your Job Profile</h2>
            <div className='add-jobs-container'>
          
            
            <form onSubmit={handleSubmit(handleApply)}>
                
                <div className="form-control w-full max-w-xs">
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
                    <label className="label"> <span className="label-text">Resume or CV's Drive Link</span></label>
                    <input type="text" {...register("aResume", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.aResume && <p className='text-red-500'>{errors.aResume.message}</p>}
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
                {/* <p>After completing application send your resume and cover letter on- <span className='email-tit'>{email}</span> </p> */}
                <input className='btn btn-accent w-full mt-4' value="Create" type="submit" />
            </form>
        </div>
        </div>
        

        </div>
  </>
  :
    <>
    {
                job.map(x => <SingleUserProfile
                    key={x._id}
                    x={x}
                    handleDelete={handleDelete}
                ></SingleUserProfile>)
            }
                </>
            
        }  
        
</div>





    );
};

export default UserProfile;