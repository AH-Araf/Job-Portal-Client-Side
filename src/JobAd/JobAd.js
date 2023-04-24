import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobAd from './SingleJobAd';
import { AuthContext } from '../contexts/AuthProvider';

const JobAd = () => {
    const a = useLoaderData();
    const {user, logOut} = useContext(AuthContext);
    // console.log(a);
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [user?.email])
    // console.log(job)

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/jobDelete/${id}`, {
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


    return (
        <div>
            {
              job.length===0?
              <>
                  <h2 className='no-job'>You have not posted any jobs yet</h2>
              </>
              :
                <>
                {
                            job.map(x => <SingleJobAd
                                key={x._id}
                                x={x}
                                handleDelete={handleDelete}
                            ></SingleJobAd>)
                        }
                            </>
                        
                    }  
        </div>
    );
};

export default JobAd;