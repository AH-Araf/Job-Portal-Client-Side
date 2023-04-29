import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import './Jobs.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Jobs = () => {
    const jobs = useLoaderData();

    const [searchTerm, setSerachTerm] = useState('')




    return (
        <div>

            <div className='s-box-div'>
            <input 
            className='search-box'
            type="text" 
            placeholder='Search Job' 
            onChange={event =>{
                setSerachTerm(event.target.value)
                }}
                />
            </div>

            <div className='display-flex m-3 all-jobs'>
            
                {

                    jobs.filter((val)=>{
                        if(searchTerm == ""){
                            return val
                        } else if (val.job.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(a => <JobCategory
                    key={a._id}
                    a={a}
                    >    
                    </JobCategory>)
                }
                
            </div>
        </div>
    );
};

export default Jobs;