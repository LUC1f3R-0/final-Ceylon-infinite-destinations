import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Footer = () => {
    const isDark = useSelector((state) => state.toggle.value);

    return (
        <>
            <footer className={`${isDark ? "bg-[#000]" : "bg-[#fff]"} shadow-inner py-12 px-6 mt-auto transition-colors duration-300`}>
                <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">

                    <div>
                        <img src="/logo.png" alt="Logo" className="mx-auto md:mx-0 w-32 h-auto mb-4" />
                        <h3 className="text-xl font-semibold">Ceylon Destinations</h3>
                        <p className="text-gray-600">141, Lionhead Trail, Scarborough, Ontario, Canada.</p>
                        <div className="flex justify-center md:justify-start items-center mt-3 space-x-4 text-xl">
                            <a href="mailto:info@ceylondestinations.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                <FaEnvelope className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                            </a>
                            <a href="tel:+1(437)858-6144" aria-label="Phone">
                                <FaPhone className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                            </a>
                            <a href="https://wa.me/94763624680" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp className="text-gray-600 hover:text-green-500 cursor-pointer" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
                        <p className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
                            <FaEnvelope className="mr-2 text-blue-500" /> info@ceylondestinations.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
                            <FaPhone className="mr-2 text-red-500" /> +94 763624680
                        </p>
                        <p className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
                            <FaPhone className="mr-2 text-red-500" /> Sales: +1 (437) 858-6144
                        </p>
                        <p className="flex items-center justify-center md:justify-start text-gray-600">
                            <FaWhatsapp className="mr-2 text-green-500" /> WhatsApp: +94 763624680
                        </p>
                    </div>

                    {/* Quick Links & Social */}
                    <div className="flex justify-between flex-col md:flex-row md:items-start">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="/" className="text-gray-700 hover:text-blue-500 transition">
                                    Home
                                </a>
                                <a href="/gallery" className="text-gray-700 hover:text-blue-500 transition">
                                    Gallery
                                </a>
                                <a href="/about" className="text-gray-700 hover:text-blue-500 transition">
                                    About
                                </a>
                                <a href="/contact" className="text-gray-700 hover:text-blue-500 transition">
                                    Contact
                                </a>
                                <a href="/booking" className="text-gray-700 hover:text-blue-500 transition">
                                    Booking Now
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
                            <div className="flex flex-col space-y-2">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-600 transition flex items-center space-x-2"
                                >
                                    <FaFacebook /> <span>Facebook</span>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-pink-500 transition flex items-center space-x-2"
                                >
                                    <FaInstagram /> <span>Instagram</span>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-700 transition flex items-center space-x-2"
                                >
                                    <FaLinkedin /> <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-red-600 transition flex items-center space-x-2"
                                >
                                    <FaYoutube /> <span>YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">

                </div>

                <div className={`text-center bg-${isDark ? "bg-[#000]" : "bg-[#fff]"} text-gray-500 text-sm py-5 border-t border-gray-800 transition-colors duration-300`} >
                    © 2025 Ceylon Infinite Destinations. All rights reserved. <br className="md:hidden" />
                    Powered by <span className="text-blue-400">Techspire Solutions</span>.
                </div>
            </footer >
        </>
    )
}

export default Footer
