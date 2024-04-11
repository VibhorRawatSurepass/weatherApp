import { AxiosRequestConfig } from "axios";
import axiosInstance from "../../axiosInstance/axiosInstance";

export const getLocationAPI = (body: AxiosRequestConfig<unknown> | undefined) => axiosInstance.get(``, body);
