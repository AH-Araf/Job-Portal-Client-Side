import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import './Jobs.css'


const Jobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <div className='display-flex m-3 all-jobs'>
                {

                    jobs.map(a => <JobCategory
                    key={a._id}
                    a={a}
                    >    
                    </JobCategory>)
                }
                
            </div>
    );
};

export default Jobs;