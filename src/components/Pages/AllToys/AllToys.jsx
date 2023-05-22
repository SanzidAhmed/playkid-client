import React, { useEffect, useState } from 'react';


const AllToys = () => {
    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5400/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
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
                                    <button className="btn btn-ghost btn-xs">details</button>
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