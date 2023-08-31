import React, { useState } from 'react';
import { AiTwotoneStar, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const FeatureProduct = () => {
    const [count, setCount] = useState(1)
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };
    const [count2, setCount2] = useState(1)
    const incrementCount2 = () => {
        setCount2(count2 + 1);
    };
    const decrementCount2 = () => {
        setCount2(count2 - 1);
    };
    return (
        <div className='container mx-auto pb-10'>
            <h1 className='text-center pb-10 text-3xl text-[#1C3F3A] uppercase'>Feature Product</h1>
            <div className='flex flex-col-reverse text-center md:text-left md:flex-row gap-10 w-full justify-center items-center'>
                <div className='w-full space-y-8 mb-6 md:mb-0'>
                    <h1 className='text-xl text-[#1C3F3A]'>Mighty Digger Excavator Toy</h1>
                    <p>Introducing the "Mighty Digger Excavator Toy," a captivating playtime companion that brings the world of construction to life. This robust and interactive excavator toy will have young adventurers digging into endless imaginative scenarios.</p>
                    <div className='flex text-yellow-500 text-2xl justify-center md:justify-start  items-center'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <h1 className='text-black ml-2 text-base'>5 reviews</h1>
                    </div>
                    <div className='flex justify-center md:justify-start items-center gap-10'>
                        <h1 className='text-2xl font-bold'>$59.00</h1>
                        <div>
                            <p className='line-through'>$79.95</p>
                            <p className='text-lg font-bold text-rose-600'>29% OFF</p>
                        </div>
                    </div>
                    <div className='flex mx-auto md:mx-0 items-center text-3xl gap-10 rounded-lg border border-white p-4 w-fit'>
                        <AiFillMinusCircle onClick={decrementCount} className='bg-white p-1 rounded-full'>-</AiFillMinusCircle>
                        <p>{count}</p>
                        <AiFillPlusCircle onClick={incrementCount} className='bg-white p-1 rounded-full'>+</AiFillPlusCircle>
                    </div>
                    <div className='flex flex-col  md:flex-row gap-4 items-center justify-center md:justify-start'>
                        <button className='btn btn-wide bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]'>Add to cart</button>
                        <button className='btn btn-wide bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]'>Buy with Nagad</button>
                    </div>
                </div>
                <img src="https://i.ibb.co/PTxCQGt/christmas-concept-with-kid-playing.jpg" className='w-1/2 border-8 border-white' alt="" />
            </div>
            <div className='flex flex-col md:flex-row  gap-10 w-full justify-center items-center'>

                <img src="https://i.ibb.co/HXkFWgF/children-playing-with-lego-toy-train-playing-room.jpg" className='w-1/2 border-8 border-white' alt="" />
                <div className='w-full space-y-8 text-center md:text-left mx-auto'>
                    <h1 className='text-xl text-[#1C3F3A]'>Adventure Express Toy Train Set</h1>
                    <p>Embark on a captivating railway journey with the "Adventure Express" toy train set. Fuel the imagination of young adventurers as they create their own narratives and explore the dynamic world of trains.</p>
                    <div className='flex text-yellow-500 text-2xl justify-center md:justify-start  items-center'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <h1 className='text-black ml-2 text-base'>5 reviews</h1>
                    </div>
                    <div className='flex justify-center md:justify-start items-center gap-10'>
                        <h1 className='text-2xl font-bold'>$111.97</h1>
                        <div>
                            <p className='line-through'>$159.95</p>
                            <p className='text-lg font-bold text-rose-600'>29% OFF</p>
                        </div>
                    </div>
                    <div className='flex mx-auto md:mx-0 items-center text-3xl gap-10 rounded-lg border border-white p-4 w-fit'>
                            <AiFillMinusCircle onClick={decrementCount2} className='bg-white p-1 rounded-full'>-</AiFillMinusCircle>
                            <p>{count2}</p>
                            <AiFillPlusCircle onClick={incrementCount2} className='bg-white p-1 rounded-full'>+</AiFillPlusCircle>
                        </div>
                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start'>
                        <button className='btn btn-wide md:mr-10 bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]'>Add to cart</button>
                        <button className='btn btn-wide bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]'>Buy with Nagad</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureProduct;