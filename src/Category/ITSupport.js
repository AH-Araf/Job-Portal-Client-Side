import React, { useEffect, useState } from 'react';
import ITSupportCategory from './ITSupportCategory';

const ITSupport = () => {
    const a = 'IT-Support';
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
                            cat.map(a => <ITSupportCategory
                            key={a._id}
                            a={a}>    
                            </ITSupportCategory>)
                        }
                    </>
            }
                
            </div>
    );
};

export default ITSupport;