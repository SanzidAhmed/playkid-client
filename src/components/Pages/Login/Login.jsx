import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginUser, signInGoogle } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
                form.reset();
                setSuccess('Sign In successfully');
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleLoginGoogle = (provider) => {
        setSuccess('');
        signInGoogle(googleProvider)
            .then(result => {
                 setSuccess('Sign In successfully with google'); 
                 navigate(from)
                })
            .catch(error => { setError(error.message) });

    }
    return (
        <div>
            <h1 className='text-center text-5xl mt-10'>Please Sign In</h1>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=826&t=st=1684475054~exp=1684475654~hmac=4635f20dfb0e0d7e52cad6ed78ecfb4878f618d9a16efe34ff70724291608a93" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary  bg-yellow-500 border-yellow-500 hover:bg-yellow-700" value="Sign In" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p>{error}</p>
                            <p>{success}</p>
                        </div>
                        <p className='text-center'>New to Playkid? <Link to="/register" className='text-yellow-500 font-bold'>Register</Link></p>
                        <p className='text-center mt-4 text-2xl'>Sign In with Google</p>
                        <div onClick={handleLoginGoogle} className='text-center mx-auto btn bg-white hover:bg-white border-white my-6'>
                            <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=826&t=st=1684506616~exp=1684507216~hmac=87a7f6ec450595f49ffe3464421f55fb8f6194fadeb98bc02e04dda301be934a" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;