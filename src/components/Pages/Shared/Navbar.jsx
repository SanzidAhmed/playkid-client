import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";
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
        <div className='bg-[#F6D83E] border-b border-zinc-100 text-[#1C3F3A]'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 active:bg-yellow-500">
                            <li><Link to="/">Home</Link></li>
                            <li tabIndex={0}>
                                <Link to="/alltoys">All toys</Link>
                            </li>
                            {user && <div>
                                <li tabIndex={0}>
                                    <Link>My Toys</Link>
                                </li>
                                <li tabIndex={0}>
                                    <Link to="/addtoys">Add a Toys</Link>
                                </li>
                            </div>}
                            <li><span>Blogs</span></li>
                            {/* {!user && <li className='' ><Link to="/login">Login</Link></li>} */}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/vZzdX54/p-3-removebg-preview.png" className="btn bg-[#F6D83E] border-[#F6D83E] hover:bg-[#F6D83E] ml-8 w-32 h-16 " alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex ">
                        <li><Link className='active:bg-yellow-500' to="/">Home</Link></li>
                        <li className='' tabIndex={0}>
                            <Link className='active:bg-yellow-500' to="/alltoys">All toys</Link>
                        </li>
                        {user && <div className='flex'>
                            <li tabIndex={0}>
                                <Link className='active:bg-yellow-500' to="/mytoys">My Toys</Link>
                            </li>
                            <li tabIndex={0}>
                                <Link className='active:bg-yellow-500' to="/addtoys">Add a Toys</Link>
                            </li>
                        </div>}
                        <li><Link to="/blogs" className='active:bg-yellow-500'>Blogs</Link></li>


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
                        <p><Link className=' text-[#1C3F3A] flex justify-center items-center gap-2 border-yellow-500' to="/signin"><FaUser></FaUser> <span>Log in</span></Link></p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;