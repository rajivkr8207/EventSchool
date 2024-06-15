import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import glow from '../assets/glow.png';
import { CiMenuFries } from "react-icons/ci";
import Mobilenav from './Mobilenav';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    function handlechange() {
        setToggle(!toggle);
    }

    return (
        <>
            <img src={glow} alt="" className='absolute lg:top-[-23rem] lg:left-[-27rem] left-[-12rem] top-[-15rem] z-0' />

            <div className='mx-auto flex lg:justify-around justify-between lg:px-0 px-3 text-white py-5 z-10 relative'>
                <div>
                    <a className='text-3xl font-bold'>EVENT SCHOOL</a>
                </div>
                <div className='my-auto hidden lg:block'>
                    <ul className='flex gap-12 font-semibold text-xl uppercase'>
                    <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workshops">workshops</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
                        <li><Link to='/' className='bg-[#065678] px-5 py-1 text-white rounded-full cursor-pointer uppercase'>Book slot</Link></li>
                    </ul>
                </div>
                <div className='lg:hidden block text-3xl cursor-pointer' onClick={handlechange}>
                    <CiMenuFries className='text-3xl' />
                </div>
                <div className={toggle ? 'block absolute top-[5rem] left-0' : 'hidden'}>
                    <Mobilenav handlechange={handlechange} />
                </div>
            </div>
            <img src={glow} alt="" className='md:block w-[20rem] hidden absolute lg:top-[65%] lg:right-[38%] right-[-17rem] top-[25rem] -z-1' />
        </>
    );
};

export default Header;
