import React from "react";
import { FaImages } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import axiosInstance from "../api/axiosInstance";
import { useSelector } from "react-redux";
import GalleryCard from "../components/cards/GalleryCard";

const Gallery = () => {

  const isDark = useSelector((state) => state.toggle.value);

  const [loading, setLoading] = React.useState(false);
  const [pageData, setPageData] = React.useState([]);

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
    axiosInstance('destination/gallery')
      .then(response => {
        const { success, message, data } = response.data
        setPageData(data)
        setLoading(true)
      })
      .then(data => {
        console.log('Fetched data:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
console.log(pageData)
  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-gray-900/70 to-black/90' : 'from-white/80 to-gray-200/90'} flex flex-col items-center justify-center text-center px-4 transition-colors duration-500`}>
        <div className="relative h-screen w-full animate__animated animate__fadeIn animate__delay-2s">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="/0312 (1)(1).mp4" type="video/mp4" />
          </video>

          <div className={`absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4 transition-colors`}>
            <h1 className={`text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg flex items-center gap-3 text-${isDark ? "white" : "black"} hover:text-yellow-300 transition-colors duration-300`}>
              <FaImages className="text-yellow-400 text-6xl md:text-7xl" />
              <span>Stunning Moments</span>
            </h1>
            <p className={`text-lg md:text-2xl text-${isDark ? "white" : "black"} mb-8 max-w-3xl leading-relaxed drop-shadow-md italic transition-colors duration-500`}>
              Explore breathtaking scenes and unforgettable memories captured around the island.
            </p>

            <div className={`flex space-x-6 mt-4 text-3xl text-${isDark ? "white" : "black"}`}>
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
        <div className="container mx-auto px-4 py-10">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-${isDark ? "white" : "black"} mb-6 transition-colors duration-300`}>Gallery Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
            {loading ? pageData.map((img, index) => (
              <GalleryCard key={index} destination={img} />
            )) : (
              <div className="flex items-center justify-center w-full col-span-full min-h-[200px]">
                <span className={`loading loading-dots loading-xl ${isDark ? '' : 'text-black'} transition-colors duration-300`}></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
