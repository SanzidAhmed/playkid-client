import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(result => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link>All toys</Link>
                        </li>
                        {user && <div>
                            <li tabIndex={0}>
                                <Link>My Toys</Link>
                            </li>
                            <li tabIndex={0}>
                                <Link>Add a Toys</Link>
                            </li>
                        </div>}
                        <li><span>Blogs</span></li>
                        {/* {!user && <li className='' ><Link to="/login">Login</Link></li>} */}
                    </ul>
                </div>
                <img src="https://i.ibb.co/nQQ2Zk1/p-2.png" className="btn btn-ghost  hover:bg-white ml-8  h-32" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link>All toys</Link>
                    </li>
                    { user && <div className='flex'>
                        <li tabIndex={0}>
                            <Link>My Toys</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link>Add a Toys</Link>
                        </li>
                    </div>}
                    <li><a>Blogs</a></li>


                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogout}><a>Sign out</a></li>
                    </ul>
                </div>}
                {!user && <div className=''>
                    <p><Link  className='btn bg-white text-black  hover:bg-slate-100 border-yellow-500' to="/login">Sign in</Link></p>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;