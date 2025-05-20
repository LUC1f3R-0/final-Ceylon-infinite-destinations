// src/api/attachApiKeyHeaders.js
import CryptoJS from 'crypto-js';

const apiKey = import.meta.env.VITE_API_KEY;
const secret = import.meta.env.VITE_API_SECRET;

export default function attachApiKeyHeaders(config) {
    const timestamp = Date.now().toString();
    const signature = CryptoJS.HmacSHA256(timestamp, secret).toString();

    config.headers['x-api-key'] = apiKey;
    config.headers['x-timestamp'] = timestamp;
    config.headers['x-signature'] = signature;

    return config;
}
