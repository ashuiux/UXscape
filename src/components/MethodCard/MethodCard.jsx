import React, { useState } from "react";
import "./MethodCard.scss";
import Modal from "../Modal/Modal";

const MethodCard = ({ method, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete(method.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to delete method:', error);
    }
  };

  return (
    <div className="method-card">
      <div className="method-card__header">
        <h2 className="method-card__title">{method.name}</h2>
        <p className="method-card__description">{method.description}</p>
      </div>
      <div className="method-card__tags">
        <p className="method-card__tag method-card__tag--usecase">{method.use_cases}</p>
        <p className="method-card__tag method-card__tag--project">{method.project_types}</p>
        <p className="method-card__tag method-card__tag--designs">{method.design_type}</p>
      </div>
      <div className="method-card__buttons">
        <button className="method-card__button method-card__button--edit" aria-label="Edit">
          <span className="material-icons">edit</span>
        </button>
        <button className="method-card__button method-card__button--delete" aria-label="Delete" onClick={handleDeleteClick}>
          <span className="material-icons">delete</span>
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete "${method.name}"?`}
      />
    </div>
  );
}

export default MethodCard;