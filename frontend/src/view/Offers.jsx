import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../css/myoffers.css';
import images from '../assets/assets';

const offersData = [
    {
        id: 1,
        type: 'hotel',
        title: 'Luxury Hotel in Maldives',
        description: '5-star hotel with ocean view, all inclusive.',
        price: '$299',
        discount: '10% OFF',
        image: images.statue_buddha,
    },
    {
        id: 2,
        type: 'flight',
        title: 'Flight to Paris',
        description: 'Direct flight with meals included.',
        price: '$499',
        discount: '5% OFF',
        image: images.statue_buddha,
    },
    {
        id: 3,
        type: 'tour',
        title: 'Sri Lanka Round Tour',
        description: '7 days cultural and wildlife experience.',
        price: '$799',
        discount: '15% OFF',
        image: images.statue_buddha,
    },
    {
        id: 4,
        type: 'seasonal',
        title: 'Winter Wonderland Japan',
        description: 'Ski and Hot Springs holiday package.',
        price: '$899',
        discount: '20% OFF',
        image: images.statue_buddha,
    },
    {
        id: 5,
        type: 'seasonal',
        title: 'Winter Wonderland Japan - Extra',
        description: 'Ski and Hot Springs holiday package.',
        price: '$899',
        discount: '20% OFF',
        image: images.statue_buddha,
    },
];

const filterTypes = [
    { label: 'All', value: 'all' },
    { label: 'Hotel Deals', value: 'hotel' },
    { label: 'Flight Offers', value: 'flight' },
    { label: 'Tour Packages', value: 'tour' },
    { label: 'Seasonal Discounts', value: 'seasonal' },
];

const Offers = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const filteredOffers = offersData.filter((offer) =>
        (filter === 'all' || offer.type === filter) &&
        offer.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8 animate-fade-page">
                <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">My Offers</h1>


                <div className="relative flex justify-end mb-4">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-purple-700 mr-2 transition-transform transform hover:scale-125"
                        aria-label="Toggle search input"
                    >
                        <FaSearch size={22} />
                    </button>
                    <input
                        type="text"
                        placeholder="Search offers..."
                        className={`transition-all duration-500 ease-in-out bg-white px-4 py-2 border border-purple-300 rounded shadow-md focus:outline-none ${showSearch ? 'w-64 opacity-100 mr-2' : 'w-0 opacity-0 overflow-hidden'
                            }`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>


                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {filterTypes.map((btn) => (
                        <button
                            key={btn.value}
                            onClick={() => setFilter(btn.value)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${filter === btn.value
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-purple-600 border-purple-300 hover:bg-purple-100'
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOffers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 animate-card-fade"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                        >
                            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-purple-700">{offer.title}</h2>
                                <p className="text-gray-600 mb-2">{offer.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-bold text-green-600">{offer.price}</span>
                                    <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                        {offer.discount}
                                    </span>
                                </div>
                                <button
                                    onClick={() => alert(`Booking for ${offer.title} clicked!`)}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition duration-300"
                                >
                                    Booking Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredOffers.length === 0 && (
                    <p className="text-center mt-10 text-gray-500">No offers found.</p>
                )}
            </div>
        </>
    )
}

export default Offers
