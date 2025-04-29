import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <>
      <Header setShowAddForm={setShowAddForm} />
      <TaskList tasks={tasks} />
      {showAddForm && (
        <AddTaskForm setShowAddForm={setShowAddForm} setTasks={setTasks} />
      )}
    </>
  );
}
