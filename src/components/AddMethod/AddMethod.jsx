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
    use_cases: [],
    project_types: [],
  });

  const [errorState, setErrorState] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    if (!formData.design_type) errors.design_type = "Design type is required";

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${baseUrl}/methods`, formData, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Method added successfully!");
        onSubmit(response.data);
        navigate("/methods");
      } catch (err) {
        console.error("Error adding method:", err.message);
        alert("Failed to add method.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "use_cases" || name === "project_types"
        ? value.split(",").map((item) => item.trim())
        : value,
    }));

    setErrorState((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="form">
        <h2 className="form__header">Add new research method</h2>
    <form onSubmit={handleSubmit} className="add-method-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errorState.name ? "error" : ""}
        />
        {errorState.name && <span className="error-text">{errorState.name}</span>}
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errorState.description ? "error" : ""}
        />
        {errorState.description && (
          <span className="error-text">{errorState.description}</span>
        )}
      </label>
      <label>
        Design Type:
        <select
          name="design_type"
          value={formData.design_type}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="New Design">New Design</option>
          <option value="Redesign">Redesign</option>
          <option value="Both">Both</option>
        </select>
        {errorState.design_type && (
          <span className="error-text">{errorState.design_type}</span>
        )}
      </label>
      <label>
        Use Cases (comma-separated):
        <input
          type="text"
          name="use_cases"
          value={formData.use_cases.join(", ")}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Types (comma-separated):
        <input
          type="text"
          name="project_types"
          value={formData.project_types.join(", ")}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Method</button>
    </form>
    </div>
  );
}

export default AddMethodForm;
