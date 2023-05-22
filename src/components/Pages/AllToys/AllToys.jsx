import React, { useEffect, useState } from 'react';


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
        setSeeMore(true);
    }



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
                        toys.slice(0, seeMore ? 200 : 20).map(toy => <tbody
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
                <div className='text-center'>{!seeMore && <button onClick={handleSeeMore} className='mt-8 bg-yellow-500 py-3 px-7 rounded-lg font-semibold text-white  hover:bg-yellow-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-30'>See All</button>}</div>
            </div>

        </div>
    );
};

export default AllToys;