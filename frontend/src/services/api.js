import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const uploadResume = (text) =>
  API.post("/resume", { text });

export const getMatchedJobs = () =>
  API.get("/match");

export const applyJob = (job) =>
  API.post("/apply", job);

export const getApplications = () =>
  API.get("/applications");

export const updateStatus = (id, status) =>
  API.put(`/applications/${id}`, { status });
