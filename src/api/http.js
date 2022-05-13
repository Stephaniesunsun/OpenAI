import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL ?? "";
const apiKEY = process.env.REACT_APP_API_KEY ?? "";

export const axiosApi = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKEY}`,
    }
})

export const axiosEngineApi = axios.create({
    baseURL: baseURL,
    headers:{
        Authorization: `Bearer ${apiKEY}`,
    }
})