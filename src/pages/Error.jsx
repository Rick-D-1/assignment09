import React from 'react';
import errImg from '../assets/404.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='  flex justify-center '>
                <img src={errImg} alt="" />
            </div>
            <div className='text-center'>
                <Link to={'/'}><button className='text-lg text-blue-500 '>Go To HomePage</button></Link>
            </div>
        </div>
    );
};

export default Error;