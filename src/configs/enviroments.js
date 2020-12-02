import axios from "axios";

// TODO: Add environments
export const baseUrl = "http://localhost:3003";

export const AXIOS_INSTANCE = axios.create({
    baseURL: baseUrl
});