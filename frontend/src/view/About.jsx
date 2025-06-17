import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import images from '../assets/assets';

const About = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const keyPeople = [
        {
            name: 'Chamila Gurusinghe',
            role: 'CEO (Chief Executive Officer)-Founder',
            image: images.image_chamila,
            // description: 'John has over 20 years of experience in the travel industry and is passionate about exploring hidden gems around the world.',
        },
        {
            name: 'Krishan Nadeera Karunaratne',
            role: 'Director, Operations Manager',
            image: images.image_nadeera,
            // description: 'Jane brings fresh ideas and leads the marketing team to ensure our brand connects with travelers globally.',
        },
        {
            name: 'Gayan Dhanushka Jayathilake',
            role: 'Director ,IT & Digital support',
            image: images.image_gayan,
            // description: 'Mark has a deep knowledge of Sri Lanka’s culture and history and is dedicated to providing unforgettable tours.',
        },
        {
            name: 'Dhanuka Wimalaweera',
            role: 'Director,Sales & Marketing Manager',
            image: images.image_dhanuka,
            // description: 'Mark has a deep knowledge of Sri Lanka’s culture and history and is dedicated to providing unforgettable tours.',
        },
        {
            name: 'Narmada Gunasekara',
            role: 'Finance and Administration Manager',
            image: images.image_narmada,
            // description: 'Mark has a deep knowledge of Sri Lanka’s culture and history and is dedicated to providing unforgettable tours.',
        },


    ];

    return (
        <>
            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container mx-auto px-6">

                    {/* Logo Section */}
                    <div className="text-center mb-12">
                        <img
                            src={images.image_logo}
                            alt="Ceylon Destinations Logo"
                            className="mx-auto h-32 w-auto mb-4 drop-shadow-lg transform scale-95 hover:scale-105 transition-transform duration-500"
                        />
                        <h1 className="text-5xl font-bold text-green-700 mb-4 tracking-wide">Ceylon Destinations</h1>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Welcome to <span className="font-semibold text-green-700">Ceylon Infinite Destinations</span> – Your Gateway to the Pearl of the Indian Ocean.
                            At Ceylon Destinations, we specialize in *curating unforgettable travel experiences* that blend *adventure, culture, and relaxation.*
                            From misty highlands to golden beaches, let us take you on a journey through Sri Lanka’s most breathtaking landscapes.
                        </p>
                    </div>

                    {/* Hero Section with Background Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl mb-12">
                        <img
                            src={images.image_nuwaraEliya}
                            alt="Travel Destination"
                            className="w-full h-96 object-cover filter brightness-90 contrast-110 saturate-125 transition-all duration-700 hover:brightness-110 hover:contrast-125 hover:saturate-150"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h2 className="text-4xl font-bold">Explore the Hidden Gems of Sri Lanka</h2>
                            <p className="text-lg text-gray-300 mt-2">From serene tea plantations to exotic wildlife, experience the adventure of a lifetime!</p>
                        </div>
                    </div>

                    {/* Our Journey Section */}
                    <div className="bg-white p-8 shadow-lg rounded-lg mb-12 transition-all duration-300 ease-in-out hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Our Journey</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our adventure began with a dream of sharing Sri Lanka’s rich heritage and *unmatched natural beauty* with the world.
                            Over the years, we have built a reputation for *exceptional service, unique itineraries, and unforgettable moments.*
                            Whether you're seeking a *thrilling safari, a **cultural deep-dive, or a **luxurious beach escape*, we make every journey special.
                        </p>
                    </div>

                    {/* Adventure Tours Section */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <h3 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                                🌄 Adventure Tours <span className="bg-green-600 text-white px-2 py-1 text-sm rounded-full">100+</span>
                            </h3>
                            <p className="text-gray-700">Explore the wilderness, hike the mountains, and dive into the deep blue seas.</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <h3 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                                🏛 Cultural Experiences <span className="bg-green-600 text-white px-2 py-1 text-sm rounded-full">100+</span>
                            </h3>
                            <p className="text-gray-700">Immerse yourself in Sri Lanka's rich history, ancient temples, and vibrant traditions.</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <h3 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                                🏝 Luxury Getaways <span className="bg-green-600 text-white px-2 py-1 text-sm rounded-full">100+</span>
                            </h3>
                            <p className="text-gray-700">Enjoy world-class hospitality with handpicked luxury resorts and personalized services.</p>
                        </div>
                    </div>

                    {/* Define Our Key People Section */}
                    <div className="bg-white p-8 shadow-lg rounded-lg mb-12 text-center">
                        <h2 className="text-3xl font-bold text-green-700 mb-6">Define Our Key People</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {keyPeople.map((person, index) => (
                                <div key={index}
                                    className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                                    onClick={() => setSelectedPerson(person)}
                                >
                                    <img src={person.image} alt={person.name} className="h-32 w-32 mx-auto rounded-full mb-4 shadow-md" />
                                    <h3 className="text-xl font-semibold text-green-700">{person.name}</h3>
                                    <p className="text-gray-600">{person.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal for Key Person Details */}
                    {selectedPerson && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md text-center relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-xl"
                                    onClick={() => setSelectedPerson(null)}
                                >
                                    ✖
                                </button>
                                <img src={selectedPerson.image} alt={selectedPerson.name} className="h-40 w-40 mx-auto rounded-full mb-4 shadow-md" />
                                <h2 className="text-2xl font-bold text-green-700">{selectedPerson.name}</h2>
                                <p className="text-gray-600 font-semibold">{selectedPerson.role}</p>
                                <p className="text-gray-700 mt-2">{selectedPerson.description}</p>
                            </div>
                        </div>
                    )}

                    {/* Newsletter Section */}
                    <div className="bg-gray-800 py-12 px-6 text-center relative">
                        <img
                            src="/yala.png"
                            alt="Newsletter Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold">Stay Updated with the Best Travel Deals!</h2>
                            <p className="text-gray-300 mt-2">
                                From Cultural Treasures to Natural Marvels: Explore Sri Lanka with Ceylon Infinite Destinations
                            </p>
                            <div className="mt-6 flex justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter Your E-mail"
                                    className="p-3 w-80 rounded-l-md bg-white focus:outline-none text-gray-900"
                                />
                                <button className="bg-blue-500 px-4 py-3 rounded-r-md text-white hover:bg-blue-600">
                                    📩
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}

                </div>
            </div>
        </>
    )
}

export default About
