import Cookies from "js-cookie";
import api from "@/utils/api";

// Import necessary dependencies and components

const login = async (formData, handleRedirect) => {
    
    try {
      // Make the API request to log in
      const response = await api.post("authentication/login", formData);
  
      const toke = response?.data?.authorisation?.token;
      const status = response?.data?.status;
    //   const user_type = response?.data?.user?.user_type;
  
      if (status === "success") {
        // Handle successful login
        // Set the authentication token in the cookies or wherever you manage authentication
        Cookies.set("authToken", toke);
  
        // Perform the redirect based on the user type
        handleRedirect();
  
        // Log the token for debugging or other purposes
        console.log("API TOKEN", toke);
      }
    } catch (error) {
      // Handle login error
      console.error("Login Error:", error);
      throw new Error("Invalid Credentials."); // You can customize the error message
    }
  };
  
  export default login;
  