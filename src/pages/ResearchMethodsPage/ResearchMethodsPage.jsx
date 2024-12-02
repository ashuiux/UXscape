import React, { useEffect, useState, useCallback } from "react";
import { getMethods, addMethod, deleteMethod } from "../../api/method";
import MethodCard from "../../components/MethodCard/MethodCard";
import AddMethodForm from "../../components/AddMethod/AddMethod";
import "./ResearchMethodsPage.scss";

function ResearchMethodsPage() {
  const [methods, setMethods] = useState([]);
  const [error, setError] = useState("");
  const [filteredMethods, setFilteredMethods] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchMethods = useCallback(async () => {
    try {
      const methodsData = await getMethods();
      setMethods(methodsData);
      setFilteredMethods(methodsData);
    } catch (err) {
      console.error("Error fetching methods:", err.message);
      setError("Failed to fetch research methods.");
    }
  }, []);

  useEffect(() => {
    fetchMethods();
  }, [fetchMethods]);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
    setFilteredMethods(methods.filter(method => {
      if (filter === "new-design") return method.design_type === "New Design" || method.design_type === "Both";
      if (filter === "redesign") return method.design_type === "Redesign" || method.design_type === "Both";
      return true;
    }));
  }, [methods]);

  const handleAddMethod = useCallback(async (newMethod) => {
    try {
      const addedMethod = await addMethod(newMethod);
      setMethods(prev => [...prev, addedMethod]);
      setFilteredMethods(prev => [...prev, addedMethod]);
    } catch (err) {
      console.error("Error adding method:", err.message);
    }
  }, []);

  const handleDeleteMethod = useCallback(async (deletedId) => {
    try {
      await deleteMethod(deletedId);
      setMethods(prevMethods => prevMethods.filter(method => method.id !== deletedId));
      setFilteredMethods(prevMethods => prevMethods.filter(method => method.id !== deletedId));
    } catch (error) {
      console.error("Error deleting method:", error);
    }
  }, []);

  return (
    <div className="research-methods">
      <h1 className="research-methods__title">Research Methods</h1>
      {error && <p className="research-methods__error">{error}</p>}

      <div className="research-methods__toggle">
        <label className="research-methods__switch">
          <input
            type="checkbox"
            checked={activeFilter === "new-design"}
            onChange={() => handleFilterChange(activeFilter === "new-design" ? "redesign" : "new-design")}
            className="research-methods__switch-input"
          />
          <span className="research-methods__slider">
            <span className="research-methods__toggle-label research-methods__toggle-label--left">
              New Design
            </span>
            <span className="research-methods__toggle-label research-methods__toggle-label--right">
              Redesign
            </span>
          </span>
        </label>
      </div>

      <div className="research-methods__container">
        {filteredMethods.length > 0 ? (
          filteredMethods.map((method) => (
            <MethodCard
              key={method.id}
              method={method}
              onDelete={handleDeleteMethod}
            />
          ))
        ) : (
          !error && (
            <p className="research-methods__empty">
              No research methods found for the selected category.
            </p>
          )
        )}
      </div>

      <AddMethodForm onSubmit={handleAddMethod} />
    </div>
  );
}

export default ResearchMethodsPage;