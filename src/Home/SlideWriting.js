import React from 'react';
import Marquee from "react-fast-marquee";
import './Home.css'


const SlideWriting = () => {
    return (
        <Marquee speed={60} className='flick1'>
            <h1>Welcome to Job Portal <span className='jp'> - </span> Job Portal is one of the largest job website in the world <span className='jp'> - </span> Please select your preferred job now <span className='jp'> - </span> Hire your client from here <span className='jp'> - </span> Stay whit Job Portal <span className='jp'> - </span> </h1>
        </Marquee>
    );
};

export default SlideWriting;