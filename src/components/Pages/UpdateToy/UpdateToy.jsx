import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle/PageTitle';

const UpdateToy = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit,reset } = useForm();
    const toy = useLoaderData();
    const {_id, toyName, quantity, price, rating, toyDetails, productPhoto} = toy;
    const onSubmit = data => {
        fetch(`https://playkid-server.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire('Product updated successfully')
                
            })
        console.log(data);
    };

    return (
        <div className="bg-white p-32">
            <PageTitle title="Update toy"></PageTitle>
        <h1 className="text-center font-extrabold text-3xl mb-14">Add a toy</h1>
        <form onSubmit={handleSubmit(onSubmit)}className=" ">
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium ">Toy Name</span>
                    </label>
                    <label className="">
                        <input type="text" {...register("toyName")} defaultValue={toyName} placeholder="Toy name" name="toyName" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Quantity</span>
                    </label>
                    <label className="">
                        <input type="number" {...register("quantity")} defaultValue={quantity}  placeholder="Quantity"  name="quantity" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium ">Price</span>
                    </label>
                    <label className="">
                        <input type="number" {...register("price")} defaultValue={price} placeholder="price" name="price" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Rating</span>
                    </label>
                    <label className="">
                        <input type="text" {...register("rating")} defaultValue={rating} placeholder="Rating" name="rating" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium ">Category Name</span>
                    </label>
                    <label className="">
                        <select className=' input input-bordered rounded-lg w-full' {...register("category")}>
                            <option value="movement toys">Movement toys</option>
                            <option value="Small world toys">Small world toys</option>
                            <option value="Creative toys">Creative toys</option>
                        </select>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Details</span>
                    </label>
                    <label className="">
                        <input type="text" {...register("toyDetails")} defaultValue={toyDetails} placeholder="Toy details" name="toyDetails" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Email</span>
                    </label>
                    <label className="">
                        <input className=" input input-bordered rounded-lg w-full" value={user?.email}{...register("postedBy")}placeholder="your email"type="email" />
                    </label>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Photo URL</span>
                    </label>
                    <label className="">
                        <input type="text" {...register("productPhoto")} defaultValue={productPhoto} placeholder="Entire photo url" name="productPhoto" className="input input-bordered rounded-lg w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-5 mb-10">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Name</span>
                    </label>
                    <label className="">
                        <input className=" input input-bordered rounded-lg w-full" defaultValue={user?.displayName}{...register("postedByName")}placeholder="your name"type="text" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update toy" className="btn btn-block bg-yellow-500 hover:bg-yellow-700" />
        </form>
    </div>
    );
};

export default UpdateToy;