import axios from "axios";

// TODO: Add environments
export const baseUrl = "https://kltn-ute-be.herokuapp.com";

export const AXIOS_INSTANCE = axios.create({
  baseURL: baseUrl,
});
