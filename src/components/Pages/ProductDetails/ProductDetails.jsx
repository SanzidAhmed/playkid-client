import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, } from "react-icons/fa";
import PageTitle from '../PageTitle/PageTitle';

const ProductDetails = () => {
    const singleProduct = useLoaderData();
    const { toyName, quantity, price, rating, toyDetails, productPhoto, postedBy, postedByName } = singleProduct;
    return (
        <div className='container mx-auto'>
            <PageTitle title="Product details || PlayKid"></PageTitle>
            <div className="card card-side bg-white w-full shadow-xl">
                <figure><img src={productPhoto} className='w-full' alt="Movie" /></figure>
                <div className="card-body w-full text-center">
                    <h2 className="inline-flex items-center"><span className='mr-2   font-medium'>Toy Name:</span> <span className='card-title ml-2'>{toyName}</span></h2>
                    <h2 className="inline-flex items-center"><span className='mr-2  font-medium'>Quantity:</span> {quantity} pcs</h2>
                    <h2 className="inline-flex items-center"><span className='mr-2  font-medium'>Price:</span> ${price}</h2>
                    <h2 className="inline-flex items-center"><span className='mr-2  font-medium'>Seller Name:</span> {postedByName}</h2>
                    <h2 className="inline-flex items-center"><span className='mr-2  font-medium'>Seller Email:</span> {postedBy}</h2>
                    <h1 className='inline-flex items-center'><span className='mr-2  font-medium'>Rating:</span> <span className='mr-2'>{rating}</span><FaStar className='text-yellow-500'></FaStar></h1>
                    <h2 className="inline-flex items-center"><span className='mr-2  font-medium'>Toy Details:</span> {toyDetails}</h2>

                    <div className=" card-body justify-end">
                        <button className="btn btn-primary bg-yellow-500 border-yellow-500 hover:bg-yellow-700">Buy now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;