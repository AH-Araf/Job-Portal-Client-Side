import React, { useEffect, useState } from 'react';
import SemiGovernmentCategory from './SemiGovernmentCategory';

const SemiGovernment = () => {
    const a = 'Semi-Government';
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/jobss?category=${a}`)
            .then(res => res.json())
            .then(data => setCat(data))
    }, [a])
    return (
        <div>
            <div>
            {
                cat.length===0?
                    <>
                        <h2 className='no-job'>No Job Post in {a} Section</h2>
                    </>
                    :
                    <>
                        {
                            cat.map(a => <SemiGovernmentCategory
                            key={a._id}
                            a={a}>    
                            </SemiGovernmentCategory>)
                        }
                    </>
            }
                
            </div>
        </div>
    );
};

export default SemiGovernment;