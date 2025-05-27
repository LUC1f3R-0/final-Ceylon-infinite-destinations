import Destination from "../models/Destinations.model.js";

const destination = async (request, response) => {
    try {
        const item = await Destination.find();
        
        const items = item.map(item => ({ id: item._id, title: item.destinationTitle, description: item.description, path: item.imagePath }));

        if (!items.length) { return response.status(404).json({ success: false, message: 'No destinations found', }) }

        return response.status(200).json({ success: true, message: 'database connected', data: items });

    } catch (error) {
        console.error("Error fetching destinations:", error);
        return response.status(500).json({ success: false, message: 'Server error' });
    }
}

export default destination;
