import React, { useState } from "react";
//style import
import styles from "./TaskItem.module.css";
//Library imprts
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

function TaskItem({ task, deleteTask, toggleTask, enterEditMode }) {
  const [isChecked, setIsChecked] = useState(task.checked);
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
    console.log(e);
  };

  const Date = (task) => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const time = `${hour < 10 ? `0${hour}` : hour} ${":"} ${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    console.log();
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckboxChange}
          className={styles.checkbox}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <span className="taskDate">{}</span>
        <button
          className="btn"
          aria-label={`Update${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
