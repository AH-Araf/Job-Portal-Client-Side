import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import SingleTotal from './SingleTotal';

const TotalApplicant = () => {
    const {user} = useContext(AuthContext);
    // console.log(a);
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/comEmail?companyEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [user?.email])
    // console.log(job)
    return (
        <div>
        {
          job.length===0?
          <>
              <h2 className='no-job'>No Applicant</h2>
          </>
          :
            <>
            {
                        job.map(x => <SingleTotal
                            key={x._id}
                            x={x}
                        ></SingleTotal>)
                    }
                        </>
                    
                }  
    </div>
    );
};

export default TotalApplicant;