import React, { useState } from "react";
import "./EditMethodForm.scss";

const EditMethodForm = ({ method, onSubmit, onCancel }) => {
  const [editedMethod, setEditedMethod] = useState({
    ...method,
    use_cases: Array.isArray(method.use_cases)
      ? method.use_cases.join(", ")
      : method.use_cases || "",
    project_types: Array.isArray(method.project_types)
      ? method.project_types.join(", ")
      : method.project_types || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMethod((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert use_cases and project_types back to arrays
    const updatedMethod = {
      ...editedMethod,
      use_cases: editedMethod.use_cases
        ? editedMethod.use_cases.split(",").map((item) => item.trim())
        : [],
      project_types: editedMethod.project_types
        ? editedMethod.project_types.split(",").map((item) => item.trim())
        : [],
    };
    onSubmit(updatedMethod);
  };

  return (
    <div className="edit-method">
      <h2 className="edit-method__header">Edit Method</h2>
      <form onSubmit={handleSubmit} className="edit-method__form">
        <label className="edit-method__label">
          Method Name
          <input
            className="edit-method__input"
            type="text"
            name="name"
            value={editedMethod.name}
            onChange={handleChange}
            placeholder="Method Name"
            required
          />
        </label>
        <label className="edit-method__label">
          Description
          <textarea
            className="edit-method__textarea"
            name="description"
            value={editedMethod.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
        </label>
        <label className="edit-method__label">
          Use Cases (comma-separated)
          <input
            className="edit-method__input"
            type="text"
            name="use_cases"
            value={editedMethod.use_cases}
            onChange={handleChange}
            placeholder="e.g., Brainstorming, User Interviews"
          />
        </label>
        <label className="edit-method__label">
          Project Types (comma-separated)
          <input
            className="edit-method__input"
            type="text"
            name="project_types"
            value={editedMethod.project_types}
            onChange={handleChange}
            placeholder="e.g., Web Design, App Development"
          />
        </label>
        <label className="edit-method__label">
          Design Type
          <select
            className="edit-method__select"
            name="design_type"
            value={editedMethod.design_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Design Type</option>
            <option value="New Design">New Design</option>
            <option value="Redesign">Redesign</option>
            <option value="Both">Both</option>
          </select>
        </label>
        <div className="edit-method__buttons">
          <button
            className="edit-method__button edit-method__button--submit"
            type="submit"
          >
            Save Changes
          </button>
          <button
            className="edit-method__button edit-method__button--cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMethodForm;
