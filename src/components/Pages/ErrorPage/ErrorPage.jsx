import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div id="error-page">
            <div className="flex flex-col items-center justify-center h-screen">
                <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=826&t=st=1684468082~exp=1684468682~hmac=c300cc3419f98b9772ebae23cc55ce59d8737f840c14061f7070eec83a172996" alt="" />
                <p className="text-lg text-gray-600 mb-8">We couldn't find the page you were looking for.</p>
                <Link to="/" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;