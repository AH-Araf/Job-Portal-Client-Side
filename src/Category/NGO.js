import React, { useEffect, useState } from 'react';
import NGOCategory from './NGOCategory';

const NGO = () => {
    const a = 'NGO';
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobss?category=${a}`)
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
                            cat.map(a => <NGOCategory
                            key={a._id}
                            a={a}>    
                            </NGOCategory>)
                        }
                    </>
            }
                
            </div>
    );
};

export default NGO;