import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import SingleApplied from './SingleApplied';

const Applied = () => {
    const {user} = useContext(AuthContext);
    // console.log(a);
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/applyEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [user?.email])
    // console.log(job)
    return (
        <div>
        {
          job.length===0?
          <>
              <h2 className='no-job'>You have not applied any jobs yet</h2>
          </>
          :
            <>
            {
                        job.map(x => <SingleApplied
                            key={x._id}
                            x={x}
                        ></SingleApplied>)
                    }
                        </>
                    
                }  
    </div>
    );
};

export default Applied;