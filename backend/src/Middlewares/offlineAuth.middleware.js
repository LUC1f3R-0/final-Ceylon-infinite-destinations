import 'dotenv/config';

const verifyFrontendKey = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) { return res.status(401).json({ message: 'Unauthorized: Missing Bearer Token' }) }

    const token = authHeader.split(' ')[1];
    if (token !== process.env.FRONTEND_API_KEY) { return res.status(403).json({ message: 'Forbidden: Invalid Bearer Token' }) }

    next()
}
export default verifyFrontendKey