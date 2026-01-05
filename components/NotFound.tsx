import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-4">404</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">Page Not Found</h2>
            <p className="text-gray-500 max-w-md mb-8">
                We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-brand-dark text-white rounded-full hover:bg-brand-primary transition-colors duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
