import React from 'react';

const CategoryOfProducts = ({ category }) => {
    const { productPhoto, toyName, price } = category || {};
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productPhoto} alt="Shoes" className="rounded-xl h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toyName}</h2>
                    <p><span className='text-lg font-bold'>Price</span>${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOfProducts;