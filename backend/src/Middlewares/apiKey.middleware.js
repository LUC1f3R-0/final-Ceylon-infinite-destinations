import 'dotenv/config';

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const validKey = process.env.API_KEY;

    console.log(apiKey)
    console.log(validKey)

    if (validKey && apiKey !== validKey) { return res.status(403).json({ message: 'Forbidden - Invalid API Key' }) }

    next();
}

export default apiKeyMiddleware