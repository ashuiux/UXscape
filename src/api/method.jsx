import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

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

const deleteMethod = async () => {
  try {
    await deleteMethod(method.id);
    onDelete(method.id);
  } catch (error) {
    console.error('Failed to delete method:', error);
  }
};

const updateMethod = async (methodId, updatedMethod) => {
  try {
    const response = await axios.put(`${baseUrl}/methods/${methodId}`, updatedMethod, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating method:', error.message);
    throw new Error("Failed to update method");
  }
};





export { getMethods, addMethod, deleteMethod, updateMethod};
