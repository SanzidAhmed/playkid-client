import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[800px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full" />
                <div className="absolute  transform pl-10 pt-10 space-y-2 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-[800px]">
                    <h4 className='text-xl text-yellow-500'>The little kid toy</h4>
                    <h1 className='text-4xl text-yellow-500 '>A new world of play</h1>
                    <h1 className='text-xl text-yellow-500 '>Make Your Child More active</h1>
                    <button className="btn btn-warning rounded-3xl">buy now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                <div className="absolute  transform pl-10 pt-10 space-y-2 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-[800px] w-1/3">
                    <h4 className='text-3xl text-white'>Creative toys</h4>
                    <h1 className='text-5xl text-white '>A new world of play</h1>
                    <h1 className='text-xl text-white '>Toys bring happiness, creativity, and joy to kids, making a memorable tagline crucial for attracting loyal customers.</h1>
                    <button className="btn btn-warning rounded-3xl bg-white border-white">buy now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full" />
                <div className="absolute  transform pl-10 pt-10 space-y-2 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-[800px] w-1/3">
                    <h4 className='text-3xl text-white'>Toy shares love</h4>
                    <h1 className='text-5xl text-white '>A new world of play</h1>
                    <h1 className='text-xl text-white '>The best place for your kids</h1>
                    <button className="btn btn-warning rounded-3xl bg-white border-white">buy now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/3933107/pexels-photo-3933107.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full" />
                <div className="absolute  transform pl-10 pt-10 space-y-2 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-[800px] w-1/3">
                    <h4 className='text-3xl text-white'>Discover the new Today</h4>
                    <h1 className='text-5xl text-white '>A new world of play</h1>
                    <h1 className='text-xl text-white '>the best Way to Adorn Playing Moments</h1>
                    <button className="btn btn-warning rounded-3xl bg-white border-white">buy now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;