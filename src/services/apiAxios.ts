import axios, { AxiosInstance } from "axios";
import { baseURL } from "../configs/apiConfig";

const instance: AxiosInstance = axios.create({
  baseURL,
});

export default instance;