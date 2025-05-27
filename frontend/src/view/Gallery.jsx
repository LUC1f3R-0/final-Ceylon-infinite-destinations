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

  return (
    <>
      {/* Background Section */}
      <div className="relative h-screen w-full animate__animated animate__fadeIn animate__delay-2s">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/0312 (1)(1).mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg flex items-center gap-3 text-white hover:text-yellow-300 transition-colors duration-300">
            <FaImages className="text-yellow-400 text-6xl md:text-7xl" />
            <span>Stunning Moments</span>
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl leading-relaxed drop-shadow-md italic">
            Explore breathtaking scenes and unforgettable memories captured around the island.
          </p>

          <div className="flex space-x-6 mt-4 text-3xl text-white">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Gallery Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? pageData.map((img, index) => (
            <GalleryCard key={index} destination={img} />
          )) : (
            <div className="flex items-center justify-center w-full col-span-full min-h-[200px]">
              <span className={`loading loading-dots loading-xl ${isDark ? '' : 'text-black'}`}></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
