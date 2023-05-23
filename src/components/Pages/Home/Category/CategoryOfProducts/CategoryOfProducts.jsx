import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOfProducts = ({ category }) => {
    const {_id, productPhoto, toyName, price } = category || {};
    return (
        <div>
            <div className="card w-full  bg-base-100 min-h-fit shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productPhoto} alt="Shoes" className="rounded-xl h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toyName}</h2>
                    <p><span className='text-lg font-bold'>Price</span>${price}</p>
                    <div className="card-actions">
                        <Link to={`/toy/${_id}`} className="btn btn-primary bg-yellow-500 border-yellow-500 hover:bg-yellow-700">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOfProducts;