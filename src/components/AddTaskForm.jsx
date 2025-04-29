import React, { useState } from "react";
import "../styles/addTaskForm.css";

export default function AddTaskForm({ setTasks, setShowAddForm, editingTask, setEditingTask }) {
    const [task, setTask] = useState(
        editingTask || {
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTask = (e) => {
    e.preventDefault();

    if (
      !task.title ||
      !task.description ||
      !task.category ||
      task.category === "select"
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (editingTask) {
        const updatedTasks = (prev) =>
          prev.map((t) => (t.id === editingTask.id ? { ...task, id: editingTask.id } : t));
        setTasks(updatedTasks);
        setEditingTask(null); 
      } else {
        const newTask = { ...task, id: Date.now() };
        setTasks((prev) => [...prev, newTask]);
      }
    
    setTask({ title: "", description: "", category: "" });
    setShowAddForm(false);
  };

  return (
    <div id="add-task-form">
      <form onSubmit={addTask} className="task-form">
        <label htmlFor="title">Task</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
          className="taskInput"
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleChange}
          className="taskInput"
          rows="4"
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={task.category}
          onChange={handleChange}
          className="taskInput"
        >
          <option value="select">Select Category</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit" className="task-submit">
         {editingTask ? "update" : "Add Task"}
        </button>
        <button
          type="button"
          className="task-submit"
          onClick={() => setShowAddForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
