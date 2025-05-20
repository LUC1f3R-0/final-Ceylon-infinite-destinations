import axios from 'axios'

// console.log("back end server", import.meta.env.VITE_BACKED_URL)
const axiosInstance = axios.create({
    baseURL: "https://ca89-212-104-231-69.ngrok-free.app/",
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance