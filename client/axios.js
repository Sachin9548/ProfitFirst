import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',  // Set the base URL for all requests
  timeout: 1000, // Optional: Set a timeout for the request
//   headers: {
//       'Authorization': 'Bearer YOUR_TOKEN',  // Optional: Set a token if needed
//     },
});



export default axiosInstance;
