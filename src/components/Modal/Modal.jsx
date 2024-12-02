import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">Confirm</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;