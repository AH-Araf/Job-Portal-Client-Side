import React, { useEffect, useState } from 'react';
import GovernmentCategory from './GovernmentCategory';
import './AllCategory.css'

const Government = () => {
    const a = 'Government';
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobss?category=${a}`)
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
                            cat.map(a => <GovernmentCategory
                            key={a._id}
                            a={a}>    
                            </GovernmentCategory>)
                        }
                    </>
                }
                
                
            </div>
        </div>
    );
};

export default Government;