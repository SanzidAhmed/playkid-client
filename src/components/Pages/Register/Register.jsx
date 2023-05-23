import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import PageTitle from '../PageTitle/PageTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext)



    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            updateUserData(result.user,name, photo)
            console.log(createdUser)
            
        })
        .catch(error => {
            console.log(error);
        })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
    }
    return (
        <div>
            <PageTitle title="Register || PlayKid"></PageTitle>
            <h1 className='text-center text-5xl mt-10'>Please Register</h1>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=826&t=st=1684474921~exp=1684475521~hmac=688ba8e0504ce9a5c49d8699cfa492e893d54a508648403a2c8b466b446ec325" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' required className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary  bg-yellow-500 border-yellow-500 hover:bg-yellow-700" value="Sign Up" />
                            </div>
                        </form>
                        <p  className='text-center'>Already have an account? <Link to="/signin" className='text-yellow-500 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;