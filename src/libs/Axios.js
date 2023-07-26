import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://coupon-system-spring-production.up.railway.app/api",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      throw new Error(error.response.data.description);
    }
    if (error.request) {
      throw new Error("No response was received from the server.");
    }
    throw new Error("Error making the request.");
  }
);

function getToken() {
  return JSON.parse(sessionStorage.getItem("auth")).token;
}

const axiosAuthInstance = axios.create({
  baseURL: "https://coupon-system-spring-production.up.railway.app/api/auth",
  timeout: 1000,
});

axiosAuthInstance.interceptors.response.use(
  (response) => {
    const data = response.data;
    sessionStorage.setItem("auth", JSON.stringify(data));
    return data;
  },
  (error) => {
    if (error.response) {
      throw new Error(error.response.data.description);
    }
    if (error.request) {
      throw new Error("No response was received from the server.");
    }
    throw new Error("Error making the request.");
  }
);

export { axiosAuthInstance };

export default axiosInstance;
