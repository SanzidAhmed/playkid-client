import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllToys = () => {
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('https://playkid-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <tbody
                            key={toy._id}>
                            <tr>
                                <td>{toy?.postedByName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>

                                <th>
                                    <Link to={`/toy/${toy._id}`} className='btn btn-ghost btn-xs'>details</Link>
                                </th>
                            </tr>
                        </tbody>)
                    }
                   
                </table>
                
            </div>

        </div>
    );
};

export default AllToys;