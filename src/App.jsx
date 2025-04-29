import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  

  return (
    <>
      <Header setShowAddForm={setShowAddForm} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
      {showAddForm && (
        <AddTaskForm setShowAddForm={setShowAddForm} setTasks={setTasks} />
      )}
    </>
  );
}
