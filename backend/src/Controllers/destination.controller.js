import Destination from "../models/Destinations.model.js";

const destination = async (request, response) => {

    try {

        const item = await Destination.find();
        // const items = item
        const items = item.map(item => { return { id: item._id, title: item.destinationTitle, description: item.description, path: item.imagePath } });

        if (!items.length) { return response.status(404).json({ success: false, message: 'nothing', }) }


        if (item.length > 0) { return response.status(200).json({ success: true, message: "data found", data: items }) }

    } catch (error) {

    }

}

export default destination;