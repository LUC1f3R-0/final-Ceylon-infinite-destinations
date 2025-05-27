import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const isDark = useSelector((state) => state.toggle.value);
    const navigate = useNavigate();
    const [count, setCount] = useState(6);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className={`flex items-center justify-center min-h-screen px-6 py-12 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}>
            <div className="text-center max-w-sm">
                <div className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800 inline-flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </div>

                <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
                <p className="mt-4">
                    The page you are looking for doesn't exist.<br />
                    Redirecting to homepage in <span className="font-semibold">{count}</span> seconds...
                </p>

                <div className="flex justify-center mt-6 gap-x-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Go back</span>
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    >
                        Take me home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
