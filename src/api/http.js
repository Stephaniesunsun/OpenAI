import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL ?? "";
const apiKEY = process.env.REACT_APP_API_KEY ?? "";

const data={
    max_tokens:1000
}

export const axiosApi = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKEY}`,
    },
    body: JSON.stringify(data),
})

export const axiosEngineApi = axios.create({
    baseURL: baseURL,
    headers:{
        Authorization: `Bearer ${apiKEY}`,
    }
})