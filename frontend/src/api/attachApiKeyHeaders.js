// src/api/attachApiKeyHeaders.js
import CryptoJS from 'crypto-js';

const apiKey = import.meta.env.VITE_API_KEY;
const secret = import.meta.env.VITE_API_SECRET;

const attachApiKeyHeaders = (config) => {
    if (!apiKey || !secret) {
        console.error('API key or secret is missing in environment variables.');
        return config;
    }

    const timestamp = Date.now().toString();
    const signature = CryptoJS.HmacSHA256(timestamp, secret).toString();

    config.headers = {
        ...config.headers,
        'x-api-key': apiKey,
        'x-timestamp': timestamp,
        'x-signature': signature,
    };

    return config;
};

export default attachApiKeyHeaders;
