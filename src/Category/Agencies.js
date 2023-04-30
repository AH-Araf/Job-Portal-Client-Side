import React, { useEffect, useState } from 'react';
import AgenciesCategory from './AgenciesCategory';

const Agencies = () => {
    const a = 'Agencies';
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/jobss?category=${a}`)
            .then(res => res.json())
            .then(data => setCat(data))
    }, [a])
    return (
        <div>
            {
                cat.length===0?
                    <>
                        <h2 className='no-job'>No Job Post in {a} Section</h2>
                    </>
                    :
                    <>
                        {
                            cat.map(a => <AgenciesCategory
                            key={a._id}
                            a={a}>    
                            </AgenciesCategory>)
                        }
                    </>
            }
                
            </div>
    );
};

export default Agencies;