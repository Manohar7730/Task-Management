import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const [editingTask, setEditingTask] = useState(null);
  const moveTaskToCategory = (id, newCategory) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, category: newCategory } : task));
  };
  

  return (
    <>
      <Header setShowAddForm={setShowAddForm} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        onEditClick={setEditingTask}
        moveTaskToCategory={moveTaskToCategory}
      />

      {(showAddForm || editingTask) && (
        <AddTaskForm
          setTasks={setTasks}
          setShowAddForm={setShowAddForm}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      )}
    </>
  );
}
