import axios from 'axios'

axios.defaults.baseURL = 'http://public.connectnow.org.uk/';

// Request interceptor
axios.interceptors.request.use((config) => {
    // Modify the request config here
    return config
})

// Response interceptor
axios.interceptors.response.use((response) => {
    // Handle the response here
    return response
}, (error) => {
    // Handle errors here
    console.error(error)
    return Promise.reject(error)
})