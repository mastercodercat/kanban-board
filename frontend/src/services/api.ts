import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

import {
  Credentials,
  TrelloResult,
  CardPosition,
  StagePosition,
} from "../store/modules/trello/types";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 2000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error.response?.data?.msg || "Failed to connect to server";
    toast.error(msg);
  }
);

const api = {
  signin: (credentials: Credentials) =>
    axiosInstance.post<TrelloResult>("auth/signin", credentials),
  changeCard: (position: CardPosition) =>
    axiosInstance.patch(`opportunities/${position.id}`, position),
  changeStage: (position: StagePosition) =>
    axiosInstance.patch(`stages/${position.id}`, position),
};

export default api;
