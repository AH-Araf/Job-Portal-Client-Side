import React from 'react';
import SlideWriting from './SlideWriting';
import ImageSlider from './ImageSlider';
import { Link, useLoaderData } from 'react-router-dom';
import HomeCategory from './HomeCategory';

const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <div>
                <h1 className='text-3xl home-title'>Latest Job</h1>
                <div className='display-flex m-3 all-jobs3'>
                {

                    jobs.map(a => <HomeCategory
                    key={a._id}
                    a={a}
                    >    
                    </HomeCategory>)
                }
            </div>
            </div>
            <div className=' btn-home'><Link to='/jobs'><button className='btn  btn-abc mt-5'>See All Job Post</button></Link></div>

            <div className='mt-16 mb-2'><SlideWriting></SlideWriting></div>
            <div><ImageSlider></ImageSlider></div>
        </div>
    );
};

export default Home;