import React from 'react'

const GalleryCard = (img) => {
    console.log(img)
    return (
        <>
            <div
                key={img.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            >
                {/* Default Image */}
                <img
                    src={img.defltPath}
                    alt={img.name}
                    className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                    src={img.hovrPath}
                    alt={`${img.name} - Hover`}
                    className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Image Name Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.name}
                </div>
            </div>
        </>
    )
}

export default GalleryCard
