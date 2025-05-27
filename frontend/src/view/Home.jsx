import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import PopularDestinations from '../components/cards/PopularDestinations';
import axiosInstance from '../api/axiosInstance';
import OurServices from '../components/cards/OurServices';
import { service } from '../assets/assets';
import Footer from '../components/layout/Footer';

const Home = React.memo(() => {
    const isDark = useSelector((state) => state.toggle.value);
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);
    const [pageData, setPageData] = React.useState([]);

    const destinationRef = React.useRef(null);
    const hasScrolled = React.useRef(false);

    const socialLinks = [
        {
            href: 'https://www.facebook.com/share/1XjEbgs2kd/?mibextid=qi2Omg',
            icon: FaFacebook,
            color: 'hover:text-blue-600',
            label: 'Facebook',
        },
        {
            href: 'https://www.instagram.com/ceyloninfinite/',
            icon: FaInstagram,
            color: 'hover:text-pink-600',
            label: 'Instagram',
        },
        {
            href: 'https://www.linkedin.com/company/106268570/admin/dashboard/',
            icon: FaLinkedin,
            color: 'hover:text-blue-700',
            label: 'LinkedIn',
        },
        {
            href: 'https://youtube.com/@ceyloninfinitedestinations?si=uuE7iW0YawwcWSxg',
            icon: FaYoutube,
            color: 'hover:text-red-600',
            label: 'YouTube',
        },
    ];

    React.useEffect(() => {
        axiosInstance("/destination/image")
            .then(response => {
                const { success, data } = response.data;
                if (success) {
                    setPageData(data);
                    setLoading(true);
                }
            })
            .catch(error => {
                if (error.code === 'ECONNABORTED') {
                    console.error("Request timed out:", error.message);
                    alert("Server is taking too long to respond. Please try again later.");
                } else {
                    console.error("Error fetching image data:", error);
                    alert("An error occurred while fetching data.");
                }
            });
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !hasScrolled.current) {
                hasScrolled.current = true;
                destinationRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="relative min-h-screen overflow-hidden">
                <video autoPlay loop muted playsInline loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[5000ms]" aria-hidden="true">
                    <source src="/path/to/home-video.mp4" type="video/mp4" />
                </video>

                <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-gray-900/70 to-black/90' : 'from-white/80 to-gray-200/90'} flex flex-col items-center justify-center text-center px-4 transition-colors duration-500`}>
                    <h1 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg ${isDark ? 'text-white hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600'} transition-colors duration-300`}>
                        Welcome to
                    </h1>

                    <h2 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold mb-8 tracking-wide drop-shadow-lg ${isDark ? 'text-yellow-300 hover:text-yellow-400' : 'text-blue-700 hover:text-blue-900'} transition-colors duration-300`}>
                        Ceylon Infinite Destinations
                    </h2>

                    <p className={`text-base sm:text-lg md:text-2xl mb-8 max-w-3xl leading-relaxed drop-shadow-md italic animate-[fadeInUp_1s_ease-in-out_2s_both] ${isDark ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-300`}>
                        Witness the{' '}
                        <span className={`${isDark ? 'text-yellow-300' : 'text-yellow-500'} font-semibold transition-colors duration-300`}>
                            breathtaking,
                        </span>{' '}
                        <span className={`${isDark ? 'text-green-300' : 'text-green-600'} font-semibold transition-colors duration-300`}>
                            exotic
                        </span>{' '}
                        destinations around the island.
                    </p>

                    <button onClick={() => navigate('/login')} className={`border-2 ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold transform transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer `} aria-label="Book your destination now ">
                        🌍 BOOKING NOW ✨
                    </button>


                    <div className={`flex space-x-6 mt-8 text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-gray-700'} transition-colors duration-300`}>
                        {socialLinks.map(({ href, icon, color, label }, index) => {
                            const IconComponent = icon;
                            return (
                                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={`transform transition-transform duration-300 hover:scale-150 ${color}`} aria-label={`Visit our ${label} page transition-colors duration-300`}>
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div ref={destinationRef}
                className={`py-12 ${isDark ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`}
                data-aos="fade-up"
            >
                <div className="container mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-10 mt-10 ${isDark ? 'text-white' : 'text-blue-900'} drop-shadow-md transition-colors duration-300`}>
                        Popular Destinations
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {loading ? pageData.map((data, index) => (
                            <PopularDestinations key={index} destination={data} />
                        )) : (
                            <div className="flex items-center justify-center w-full col-span-full min-h-[200px]">
                                <span className={`loading loading-dots loading-xl ${isDark ? '' : 'text-black'} transition-colors duration-300`}></span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={`py-12 ${isDark ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`} data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-blue-900'} drop-shadow-md transition-colors duration-300`}>
                        Our Services
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {service.map((data, index) => (
                            <div key={index} className="w-full">
                                <OurServices services={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
});

export default Home;
