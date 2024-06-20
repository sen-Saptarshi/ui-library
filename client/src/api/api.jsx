import axios from "axios";

const API_URL = "http://localhost:5000/api/components"; // Adjust the URL if necessary

export const getComponents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching components:", error);
    throw error;
  }
};

export const createComponent = async (component) => {
  try {
    const response = await axios.post(API_URL, component);
    return response.data;
  } catch (error) {
    console.error("Error creating component:", error);
    throw error;
  }
};
