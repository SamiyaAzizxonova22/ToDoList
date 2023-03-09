import React, { useState } from "react";
// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function CustomForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            type="text"
            id="task"
            value={task}
            className="input"
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Create a new todo…"
          />
          <label className="label" htmlFor="task">
            Enter Task
          </label>
        </div>
        <button className="btn" aria-label="Add Task" type="submit">
          <PlusCircleIcon className="h-6 w-6 text-blue-500" />
        </button>
      </form>
    </div>
  );
}

export default CustomForm;
