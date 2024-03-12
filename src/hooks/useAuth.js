import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from "react";
import api from "../utils/api";
import Cookies from "js-cookie";

const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const logout = useCallback(() => {
    Cookies.remove("authToken");
    setIsAuthenticated(false);
    setUserProfile(null);
    router.push('/login');
  }, [router]); // Include router in the dependency array

  const fetchUserProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get("me");
      setUserProfile(response?.data?.user);
      Cookies.set("user", JSON.stringify(response?.data?.user));
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);

      if (error.message === "Network Error") {
        // Handle network errors (e.g., no internet connection)
        console.error("Network Error. Please check your internet connection.");
      } else if (error?.response?.status === 401) {
        // Handle unauthorized access (e.g., logout)
        console.error("Unauthorized access. Logging out...");
        logout();
      } else if (error?.response?.status >= 500) {
        // Handle server errors (5xx)
        console.error("Server error. Please try again later.");
      } else if (error?.response?.status >= 400) {
        // Handle client errors (4xx)
        console.error("Client error. Please check your request.");
      } else {
        // Handle other errors
        console.error("Unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }, [logout]);


  const refreshAuthentication = useCallback(async () => {
  try {
    const response = await api.post("/refresh");
    const newToken = response?.data?.token;
    if (newToken) {
      Cookies.set("authToken", newToken);
      setIsAuthenticated(true);
      fetchUserProfile();
    } else {
      logout();
    }
  } catch (error) {
    console.error("Error refreshing authentication:", error);

    if (error.message === "Network Error") {
      // Handle network errors (e.g., no internet connection)
      console.error("Network Error. Please check your internet connection.");
    } else if (error?.response?.status === 401) {
      // Handle unauthorized access (e.g., logout)
      console.error("Unauthorized access. Logging out...");
      logout();
    } else if (error?.response?.status >= 500) {
      // Handle server errors (5xx)
      console.error("Server error. Please try again later.");
    } else if (error?.response?.status >= 400) {
      // Handle client errors (4xx)
      console.error("Client error. Please check your request.");
    } else {
      // Handle other errors
      console.error("Unknown error occurred.");
    }
  }
}, [fetchUserProfile, logout]);

  useEffect(() => {
    const checkAuthStatus = () => {

      const storedAuthToken = Cookies.get("authToken");

      if (storedAuthToken) {
        setIsAuthenticated(true);
        fetchUserProfile();
      }else{
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, [fetchUserProfile]); // Include fetchUserProfile as a dependency

  const login = (token) => {
    Cookies.set("authToken", token, { httpOnly: true });
    setIsAuthenticated(true);
    fetchUserProfile();
  };

  return { isAuthenticated, userProfile, loading, login, logout, fetchUserProfile, refreshAuthentication };
};

export default useAuth;
