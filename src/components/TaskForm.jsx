import React from "react";
import "./TaskForm.css";

const TaskForm = ({ taskData, handleInputChange, handleSubmit, isEditing }) => {
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        {/* Input box for task name */}
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleInputChange}
        />

        <div className="task_form_bottom_line">
          <div>
            {/* Dropdown for task status */}
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleInputChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            {/* Submit button changes based on edit mode */}
            <button type="submit" className="task_submit">
              {isEditing ? "Update Task" : "+ Add Task"}
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
