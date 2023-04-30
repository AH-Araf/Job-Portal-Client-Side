import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrganizationCategory from './OrganizationCategory';

const Organization = () => {
    const a = 'Organization';
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`https://b-job-portal-server-side-ah-araf.vercel.app/jobss?category=${a}`)
            .then(res => res.json())
            .then(data => setCat(data))
    }, [a])
    // console.log(cat)
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
                            cat.map(a => <OrganizationCategory
                            key={a._id}
                            a={a}>    
                            </OrganizationCategory>)
                        }
                    </>
            }
                
            </div>
    );
};

export default Organization;