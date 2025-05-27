import React from 'react'
import { useSelector } from 'react-redux';

const GalleryCard = ({ id, name, defltPath, hovrPath }) => {
    const isDark = useSelector((state) => state.toggle.value);
    return (
        <>
            <div key={id} className={`bg-${isDark ? "white" : "black"} relative overflow-hidden rounded-lg shadow-lg cursor-pointer group`}>
                <img
                    src={defltPath}
                    alt={name}
                    className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img src={hovrPath} alt={`${name} - Hover`} className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`absolute inset-0 bg-${isDark ? "black" : "white"} bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    {name}
                </div>
            </div >
        </>
    )
}

export default GalleryCard
