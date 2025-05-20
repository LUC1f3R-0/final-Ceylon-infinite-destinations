import React, { useEffect } from "react";

// import AOS from "aos";
// import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PopularDestinations = ({ destination }) => {
    
    const navigate = useNavigate()

    const toggleValue = useSelector((state) => state.toggle.value)
    const [isDarkMode, setIsDarkMode] = React.useState(toggleValue)

    useEffect(() => {
        setIsDarkMode(toggleValue);
    }, [toggleValue]);

    return (
        <>
            <div
                key={destination.id}
                className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl flex flex-col h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}
                data-aos="zoom-in-up"
            >
                <img
                    src={destination.imagePath}
                    alt={destination.title}
                    className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-blue-800' : 'text-gray-700'} transition-colors duration-500`}>
                        {destination.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} flex-grow transition-colors duration-500`}>
                        {destination.description}
                    </p>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => navigate(`/details/${destination.id}`)}
                            className={`px-5 py-2 text-sm font-semibold border-2 ${isDarkMode ? 'border-gray-600 text-blue-600 hover:border-transparent hover:bg-gray-600' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent'} rounded-full ease-in-out shadow-md hover:shadow-xl hover:scale-105 transition-colors duration-500`}
                        >
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </>


    );
};

export default PopularDestinations;