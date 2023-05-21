import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='text-center mt-96'>
            <button className="btn btn-square loading bg-white text-yellow-400 border-white text-7xl"></button>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/signin" replace= {true}></Navigate>
};

export default PrivateRoutes;