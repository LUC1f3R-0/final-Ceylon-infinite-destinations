// Import the video
import home_video from "./Home/0305.mp4";
import { FaHotel, FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
export const HomeAssets = {
    home_video,
};

// Destination data as a reusable array (can be passed into components)
export const service = [
    {
        title: "Down South Adventures",
        description: "Book your flights easily with our hassle-free service.",
        icon: FaUmbrellaBeach,
        hoverImage: "/our_Services/Down.jpg",
        hoverNotDark: "hover:bg-blue-800",
        hoverIstDark: "hover:bg-blue-400",
        link: "/service_01"
    },
    {
        title: "Pinnawala",
        description: "Find and book the best hotels at affordable prices.",
        icon: FaHotel,
        hoverImage: "/our_Services/pinnawala2.jpg",
        hoverNotDark: "hover:bg-green-800",
        hoverIstDark: "hover:bg-green-400",
        link: "/Service_02",
    },
    {
        title: "Wildlife Activities",
        description: "Embark on Thrilling Sri Lankan Safaris and Discover Untamed Wilderness Like Never Before",
        icon: FaUmbrellaBeach,
        hoverImage: "/our_Services/wilpattu.jpg",
        hoverNotDark: "hover:bg-yellow-800",
        hoverIstDark: "hover:bg-yellow-400",
        link: "Service_03",
    },
    {
        title: "Concierge Service",
        description: "Premium concierge services for a luxurious experience.",
        icon: FaConciergeBell,
        hoverImage: "/our_Services/4.png",
        hoverNotDark: "hover:bg-red-800",
        hoverIstDark: "hover:bg-red-400",
        link: "service04",
    },
];