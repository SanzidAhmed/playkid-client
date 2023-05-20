import React from 'react';

const Gallery = () => {
    return (
        <div className='container mx-auto my-36'>
            <h1 className='text-center text-5xl mb-10'>PlayKid Gallery</h1>
            <div className='grid md:grid-cols-3 gap-10 '>
                <div className=" w-full bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-xl h-96 w-full' src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Shoes" /></figure>
                </div>
                <div className=" w-full bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-xl h-96 w-full' src="https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                </div>
                <div className=" w-full bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-xl h-96 w-full' src="https://images.pexels.com/photos/3671194/pexels-photo-3671194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;