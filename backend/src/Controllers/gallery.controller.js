import Gallery from "../models/Gallery.model.js";

const gallery = async (request, response) => {

    try {
        console.log("running the gallery controller")
        const item = await Gallery.find();

        const items = item.map(item => ({ id: item._id, title: item.name, defltPath: item.defaultPath, hovrPath: item.hoverPath }));

        if (!items.length) { return response.status(404).json({ success: false, message: 'No destinations found', }) }
        return response.status(200).json({ success: true, message: 'Data found', data: items });

    } catch (error) {
        console.error("Error fetching destinations:", error);
        return response.status(500).json({ success: false, message: 'Server error' });
    }

}

export default gallery;