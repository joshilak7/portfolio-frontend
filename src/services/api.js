import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export const submitContact = (contactData) => api.post("/contact", contactData);

export const getContacts = () => api.get("/contact");

export const getProjects = (params = {}) => api.get("/projects", { params });

export const getProjectById = (id) => api.get(`/projects/${id}`);

export const getFeaturedProjects = () => api.get("/projects/featured");

export const createProject = (projectData) =>
  api.post("/projects", projectData);

export const updateProject = (id, projectData) =>
  api.put(`/projects/${id}`, projectData);

export const deleteProject = (id) => api.delete(`/projects/${id}`);

export const login = (credentials) => api.post("/auth/login", credentials);

export const register = (userData) => api.post("/auth/register", userData);

export const getMe = () => api.get("/auth/me");

export const logout = () => api.get("/auth/logout");

export const healthCheck = () => api.get("/health");

export default api;
