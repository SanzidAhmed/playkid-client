import React from 'react';
import { RiSecurePaymentLine, RiArrowGoBackFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";
const Features = () => {
    return (
        <div className='md:text-center md:container md:mx-auto mt-10'>
            <div className='md:text-center container bg-white border-white border md:mx-auto grid grid-cols-2 md:grid-cols-4 py-16 text-[#1C3F3A] gap-4'>
                <div className='flex gap-6 md:justify-center md:items-center  '>
                    <p className='text-4xl text-[#1C3F3A]'><RiSecurePaymentLine></RiSecurePaymentLine></p>
                    <h1 className='text-lg md:text-2xl'>Secure Payments</h1>
                </div>
                <div className='flex gap-6 md:justify-center md:items-center '>
                    <p className='text-4xl text-[#1C3F3A]'><RiArrowGoBackFill></RiArrowGoBackFill></p>
                    <h1 className='text-lg md:text-2xl'>30 days return period</h1>
                </div>
                <div className='flex gap-6 md:justify-center md:items-center '>
                    <p className='text-4xl text-[#1C3F3A]'><BiSupport></BiSupport></p>
                    <h1 className='text-lg md:text-2xl'>24/7 customer support</h1>
                </div>
                <div className='flex gap-6 md:justify-center md:items-center '>
                    <p className='text-4xl text-[#1C3F3A]'><FaTruckMoving></FaTruckMoving></p>
                    <h1 className='text-lg md:text-2xl'>Flexible shipping</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;