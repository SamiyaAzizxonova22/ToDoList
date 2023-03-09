import React from "react";
// component import
import TaskItem from "./TaskItem";
// Style import
import styles from "./TaskListModule.css";

function TaskList({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
