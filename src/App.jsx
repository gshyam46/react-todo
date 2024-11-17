import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [taskData, setTaskData] = useState({ task: "", status: "todo" });

  // Handle input change for task name and status
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle status change directly in the tasks list
  const handleStatusChange = (e, index) => {
    const { value } = e.target;
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: value } : task
    );
    setTasks([...updatedTasks]);
  };

  // Handle form submission for adding or updating tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the task in the list
      const updatedTasks = tasks.map((task, index) =>
        index === currentEditIndex ? taskData : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      // Add a new task
      setTasks((prev) => [...prev, taskData]);
    }
    // Reset form data
    setTaskData({ task: "", status: "todo" });
  };

  // Handle editing a task
  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    setTaskData(taskToEdit);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  // Handle task delete
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm
        taskData={taskData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          status="todo"
          icon={todoIcon}
          tasks={tasks}
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="Doing"
          status="doing"
          tasks={tasks}
          icon={doingIcon}
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="Done"
          status="done"
          tasks={tasks}
          icon={doneIcon}
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
};

export default App;
