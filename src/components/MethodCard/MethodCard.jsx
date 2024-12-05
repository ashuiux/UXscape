import React, { useState } from "react";
import "./MethodCard.scss";
import Modal from "../Modal/Modal";
import EditMethodForm from "../EditMethodForm/EditMethodForm";

const MethodCard = ({ method, onDelete, onEdit }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete(method.id);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Failed to delete method:", error);
    }
  };

  const handleConfirmEdit = async (updatedMethod) => {
    try {
      await onEdit(method.id, updatedMethod);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Failed to edit method:", error);
    }
  };

  // Parse `use_cases` and `project_types` safely
  const useCases = Array.isArray(method.use_cases)
    ? method.use_cases
    : JSON.parse(method.use_cases || "[]");
  const projectTypes = Array.isArray(method.project_types)
    ? method.project_types
    : JSON.parse(method.project_types || "[]");

  return (
    <div className="method-card">
      <div className="method-card__header">
        <h2 className="method-card__title">{method.name}</h2>
        <p className="method-card__description">{method.description}</p>
      </div>
      <div className="method-card__tags">
        <p className="method-card__tag method-card__tag--usecase">
          Use Cases: {useCases.join(", ")}
        </p>
        <p className="method-card__tag method-card__tag--project">
          Project Types: {projectTypes.join(", ")}
        </p>
        <p className="method-card__tag method-card__tag--designs">
          Design Type: {method.design_type}
        </p>
      </div>
      <div className="method-card__buttons">
        <button
          className="method-card__button method-card__button--edit"
          aria-label="Edit"
          onClick={handleEditClick}
        >
          <span className="material-icons">edit</span>
        </button>
        <button
          className="method-card__button method-card__button--delete"
          aria-label="Delete"
          onClick={handleDeleteClick}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <p>Are you sure you want to delete "{method.name}"?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirmDelete} className="confirm-button">
            Confirm
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <EditMethodForm
          method={method}
          onSubmit={handleConfirmEdit}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default MethodCard;
