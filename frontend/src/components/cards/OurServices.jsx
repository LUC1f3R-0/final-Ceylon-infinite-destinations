import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OurServices = ({ services }) => {
    const isDark = useSelector((state) => state.toggle.value);
    const IconComponent = services.icon;

    return (
        <>
            <div className={`relative rounded-lg shadow-md border-2 border-white overflow-hidden cursor-pointer transition-all duration-500 bg-blue-500 ${isDark ? services.hoverNotDark : services.hoverIstDark} text-white transform hover:scale-105 group h-full flex flex-col justify-between     `}>
                <div className="flex justify-center items-center h-32 text-5xl text-white group-hover:text-yellow-300 transition-all duration-300">
                    {IconComponent && <IconComponent />}
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-center">{services.title}</h3>
                    <p className="text-white text-center">{services.description}</p>
                </div>

                <div className="flex justify-center mb-6">
                    <Link to={services.link || "#"}>
                        <button className="px-5 py-2 text-sm font-semibold border-2 border-white text-white rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-xl hover:bg-white hover:text-blue-600 hover:border-transparent hover:scale-110">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};


export default OurServices;
