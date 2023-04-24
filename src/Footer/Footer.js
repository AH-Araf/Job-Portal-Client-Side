import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer mt-16'>
            <div className='footer-container p-5'>
            <p><small>All copyright reserved </small>
            @ Job Portal
            </p>
            <p>
                <small>Owner of Job Portal- Md. Arafat Hossain</small><br />
                <small>E-mail: arafathossain.baiust@gmail.com</small><br />
                <small>Mobile: 01312-010261</small>
            </p>
            </div>

            <div className='p-5'>
                <Link to='https://www.facebook.com/profile.php?id=100005652766637'>Facebook</Link>
                <Link to='https://www.linkedin.com/in/ah-araf/'>Linkedin</Link>
            </div>
        </div>
    );
};

export default Footer;