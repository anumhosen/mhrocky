import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Contacts = () => {
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white'>
                Contacts
            </div>
            <div className='grid grid-cols-1 px-4 sm:px-0 py-8 gap-4'>
                <div className='flex gap-4 px-8 py-4 border border-gray-400 rounded-lg shadow-md shadow-gray-300 items-center'>
                    <FaPhone /> <span>01679870059</span>
                </div>
                <div className='flex gap-4 px-8 py-4 border border-gray-400 rounded-lg shadow-md shadow-gray-300 items-center'>
                    <FaEnvelope /> <span>rocky111461@gmail.com</span>
                </div>
                <div className='flex gap-4 px-8 py-4 border border-gray-400 rounded-lg shadow-md shadow-gray-300 items-center'>
                    <FaEnvelope /> <span>rocky.phy18@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
