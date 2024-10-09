import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
const token = localStorage.getItem("token");

export default function api() {
  return axios.create({
    baseURL: VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
