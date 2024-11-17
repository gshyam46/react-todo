import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({
  title,
  status,
  handleDelete,
  index,
  handleStatusChange,
  handleEdit,
}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div>
          <select
            name="status"
            value={status}
            className="task_status"
            onChange={(e) => handleStatusChange(e, index)}
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button onClick={() => handleEdit(index)} className="task_submit">
            Edit Task
          </button>
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="Delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
