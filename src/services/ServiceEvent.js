import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/AlexRamAlv/testing-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(page, perPage) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
