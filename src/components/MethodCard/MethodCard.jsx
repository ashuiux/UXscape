import React from "react";
import "./MethodCard.scss";

function MethodCard({ method }) {
  return (
    <div className="method-card">
       <div className="method-card__header">
      <h2>{method.name}</h2>
      <p>{method.description}</p>
      </div>
      <div className="method-card__tags">
      <p className="method-card__usecase">{method.use_cases}</p>
      <p className="method-card__project">{method.project_types}</p>
      <p className="method-card__designs">{method.design_type}</p>
      </div>
    </div>
  );
}

export default MethodCard;
