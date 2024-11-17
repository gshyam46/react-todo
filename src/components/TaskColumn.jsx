import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  handleStatusChange,
  handleEdit,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              status={task.status}
              handleDelete={handleDelete}
              handleStatusChange={handleStatusChange}
              handleEdit={handleEdit}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
