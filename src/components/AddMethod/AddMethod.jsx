import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMethod.scss";

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

function AddMethodForm({ onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    design_type: "",
    use_cases: "",
    project_types: "",
  });

  const [errorState, setErrorState] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.description.trim()) errors.description = "Description is required.";
    if (!formData.design_type) errors.design_type = "Design type is required.";

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorState((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const requestData = {
          ...formData,
          use_cases: formData.use_cases
            ? formData.use_cases.split(",").map((item) => item.trim())
            : [],
          project_types: formData.project_types
            ? formData.project_types.split(",").map((item) => item.trim())
            : [],
        };
  
        console.log("Sending Request Data:", requestData); // Debugging
  
        const response = await axios.post(`${baseUrl}/methods`, requestData, {
          headers: { "Content-Type": "application/json" },
        });
  
        console.log("Response Data:", response.data); // Debugging
  
        if (!response.data.id) {
          throw new Error("No ID returned by the backend.");
        }
  
        alert("Method added successfully!");
        onSubmit(response.data); // Add method to the list
        navigate("/methods");
      } catch (err) {
        console.error("Error adding method:", err.message);
        alert(`Failed to add method: ${err.message}`);
      }
    }
  };
  
  

  return (
    <div className="add-method">
      <h2 className="add-method__header">Add new research method</h2>
      <form onSubmit={handleSubmit} className="add-method__form">
        <label className="add-method__label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`add-method__input ${errorState.name ? "add-method__input--error" : ""}`}
            required
          />
          {errorState.name && <span className="add-method__error">{errorState.name}</span>}
        </label>
        <label className="add-method__label">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`add-method__textarea ${errorState.description ? "add-method__textarea--error" : ""}`}
            required
          />
          {errorState.description && (
            <span className="add-method__error">{errorState.description}</span>
          )}
        </label>
        <label className="add-method__label">
          Design Type:
          <select
            name="design_type"
            value={formData.design_type}
            onChange={handleChange}
            className="add-method__select"
            required
          >
            <option value="">Select...</option>
            <option value="New Design">New Design</option>
            <option value="Redesign">Redesign</option>
            <option value="Both">Both</option>
          </select>
          {errorState.design_type && (
            <span className="add-method__error">{errorState.design_type}</span>
          )}
        </label>
        <label className="add-method__label">
          Use Cases (comma-separated):
          <input
            type="text"
            name="use_cases"
            value={formData.use_cases}
            onChange={handleChange}
            className="add-method__input"
          />
        </label>
        <label className="add-method__label">
          Project Types (comma-separated):
          <input
            type="text"
            name="project_types"
            value={formData.project_types}
            onChange={handleChange}
            className="add-method__input"
          />
        </label>
        <button type="submit" className="add-method__button">Add Method</button>
      </form>
    </div>
  );
}

export default AddMethodForm;
