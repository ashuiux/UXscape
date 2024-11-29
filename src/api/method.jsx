import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
console.log("Base URL:", baseUrl); // Log the baseUrl


const getMethods = async () => {
  try {
    console.log("GET URL:", `${baseUrl}/methods`);
    const response = await axios.get(`${baseUrl}/methods`);
    return response.data;
  } catch (error) {
    console.error("Error fetching UX Methods:", error.message);
    throw new Error("Failed to fetch UX Methods");
  }
};

const addMethod = async (newMethod) => {
  try {
    const response = await axios.post(`${baseUrl}/methods`, newMethod, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (err) {
    console.error("Error adding method:", err.message);
    throw err;
  }
};



export { getMethods, addMethod };
