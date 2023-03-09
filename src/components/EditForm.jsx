import React, { useEffect, useState } from "react";
// library imports
import { CheckIcon } from "@heroicons/react/24/solid";

function EditForm({ editedTask, updateTask, closeEditMode }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            value={updatedTaskName}
            className="input"
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label className="label" htmlFor="editTask">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </button>
      </form>
    </div>
  );
}

export default EditForm;
