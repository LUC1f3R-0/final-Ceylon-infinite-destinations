import React from 'react'

const GalleryCard = ({ id, name, defltPath, hovrPath }) => {
    console.log(id, name, defltPath, hovrPath)
    return (
        <>
            <div key={id} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
                <img
                    src={defltPath}
                    alt={name}
                    className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img src={hovrPath} alt={`${name} - Hover`} className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {name}
                </div>
            </div>
        </>
    )
}

export default GalleryCard
