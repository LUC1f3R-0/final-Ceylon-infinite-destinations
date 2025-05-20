import axios from 'axios'

console.log("server", import.meta.env.VITE_BACKED_URL)
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKED_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance