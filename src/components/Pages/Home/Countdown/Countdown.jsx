import React, { useEffect, useState } from 'react';
import { BsLightningChargeFill } from "react-icons/bs";

const Countdown = ({ duration }) => {
    const [time, setTime] = useState(localStorage.getItem('countdownTime') || duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time])

    useEffect(() => {
        localStorage.setItem('countdownTime', time.toString());
    }, [time]);

    const getFormatedTime = (time) => {
        let total_Seconds = parseInt(Math.floor(time / 1000));
        let total_Minutes = parseInt(Math.floor(total_Seconds / 60));
        let total_Hours = parseInt(Math.floor(total_Minutes / 60));
        let days = parseInt(Math.floor(total_Hours / 24));

        let seconds = parseInt(total_Seconds % 60);
        let minutes = parseInt(total_Minutes % 60);
        let hours = parseInt(total_Hours % 24);

        return [days, hours, minutes, seconds]
    }

    const [days, hours, minutes, seconds] = getFormatedTime(time)
    return (
        <div className='bg-[#F6D83E] border border-white'>
            <div className='md:flex justify-center items-center text-center container mx-auto gap-20  py-10'>
                <h1 className='inline-flex justify-center items-center text-3xl md:text-5xl font-semibold gap-4 text-[#1C3F3A] '>Lightning Deals <BsLightningChargeFill className='text-orange-600'></BsLightningChargeFill> </h1>
                <div className="grid grid-flow-col gap-5 text-center justify-center items-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-white  text-[#1C3F3A] ">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": days }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-white   text-[#1C3F3A] ">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": hours }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-white   text-[#1C3F3A] ">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": minutes }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-white   text-[#1C3F3A] ">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": seconds }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;