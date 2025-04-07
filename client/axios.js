import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://profit-first.vercel.app/api',
//   headers: {
//       'Authorization': 'Bearer YOUR_TOKEN',  // Optional: Set a token if needed
//     },
});



export default axiosInstance;
