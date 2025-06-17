import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import images from '../../assets/assets';

const ThemeToggle = ({ isDark, dispatch }) => (
    <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => dispatch(toggle())}
    >
        {isDark ? (<MdDarkMode className="text-2xl" />) : (<CiLight className="text-2xl" />)}
    </div>
);

const NavBar = () => {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.toggle.value);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className={`${isDark ? "bg-black text-white" : "bg-white text-black"} fixed top-0 left-0 right-0 z-50 shadow-md duration-500`}>
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <img
                    src={images.image_logo}
                    alt="Ceylon Destinations Logo"
                    className={`h-12 md:h-14 ${isDark ? "bg-amber-50 p-1" : ""} `}
                />

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
                    <Link to="/" className="px-6 py-2 hover:bg-gray-300 hover:text-black rounded">Home</Link>
                    <Link to="gallery" className="px-6 py-2 hover:bg-gray-300 hover:text-black rounded">Gallery</Link>
                    <Link to="/offers" className="px-6 py-2 hover:bg-gray-300 hover:text-black rounded">My Offers</Link>
                    <Link to="about" className="px-6 py-2 hover:bg-gray-300 hover:text-black rounded">About</Link>
                    <button className="py-2 px-6 bg-white text-black hover:bg-gray-200 rounded">Login</button>

                    {/* Theme Toggle */}
                    <div className="ml-4">
                        <ThemeToggle isDark={isDark} dispatch={dispatch} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={`${isDark ? "text-white" : "text-black"} duration-500 cursor-pointer`}
                        aria-label="Toggle Mobile Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileOpen && (
                <div className={`md:hidden px-4 pt-2 pb-4 space-y-2 ${isDark ? "bg-black text-white" : "bg-white text-black"} duration-500`}>
                    <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-black">Home</Link>
                    <Link to="/Gallery" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-black">Gallery</Link>
                    <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-black">Contact</Link>
                    <Link to="about" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-black">About</Link>
                    <button className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-black">Login</button>

                    {/* Theme Toggle for Mobile */}
                    <div className="mt-2">
                        <ThemeToggle isDark={isDark} dispatch={dispatch} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
