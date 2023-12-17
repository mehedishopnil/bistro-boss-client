// useAxiosSecure.js

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000", // Replace with your API base URL
  });

  useEffect(() => {
    // Update the authorization header if the token changes
    axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // Logout the user and navigate to login page
          await logOut();
          navigate("/login"); // Replace with the path to your login page
        }
        return Promise.reject(error);
      }
    );
  }, [token, logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
