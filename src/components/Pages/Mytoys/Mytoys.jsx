import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5400/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5400/toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className=" w-full table">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th className='bg-yellow-500'>Seller Name</th>
                            <th className='bg-yellow-500'>Toy Name</th>
                            <th className='bg-yellow-500'>Sub Category</th>
                            <th className='bg-yellow-500'>Price</th>
                            <th className='bg-yellow-500'>Available Quantity</th>
                            <th className='bg-yellow-500'></th>
                            <th className='bg-yellow-500'></th>
                        </tr>
                    </thead>
                    {
                        myToys.map(toy => <tbody
                            key={toy._id}>
                            <tr>
                                <td>{toy?.postedByName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>

                                <th>
                                    <Link to={`/updatetoy/${toy._id}`} className='btn btn-ghost hover:bg-yellow-500 btn-xs'>Update</Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(toy._id)} className='btn btn-ghost hover:bg-red-600 btn-xs'>Delete</button>
                                </th>
                            </tr>
                        </tbody>)
                    }

                </table>

            </div>

        </div>
    );
};

export default Mytoys;