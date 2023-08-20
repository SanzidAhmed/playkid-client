import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOfProducts = ({ category }) => {
    const {_id, productPhoto, toyName, price } = category || {};
    return (
        <div>
            <div className="card w-full bg-white border-b-4 border-[#F6D83E] hover:border h-full">
                <figure className="">
                    <img src={productPhoto} alt="Shoes" className="rounded-xl h-60 px-2 py-2 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toyName}</h2>
                    <p><span className='text-lg font-bold'>Price</span>${price}</p>
                    <div className="card-actions">
                        <Link to={`/toy/${_id}`} className="btn btn-primary rounded-sm bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOfProducts;