import 'dotenv/config';

const verifyFrontendKey = (request, response, next) => {
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) { return response.status(401).json({ message: 'Unauthorized: Missing Bearer Token' }) }

    const token = authHeader.split(' ')[1];
    if (token !== process.env.FRONTEND_API_KEY) { return response.status(403).json({ message: 'Forbidden: Invalid Bearer Token' }) }

    next()
}

export default verifyFrontendKey