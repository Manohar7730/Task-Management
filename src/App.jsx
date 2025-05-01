import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import {
  getTasks,
  deleteTask as deleteTaskFromAPI,
  updateTask as updateTaskInAPI,
} from "./utils/storage";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const [showAddForm, setShowAddForm] = useState(false);

  const deleteTask = async (id) => {
    try {
      await deleteTaskFromAPI(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const [editingTask, setEditingTask] = useState(null);

  const updateTask = async (updatedTask) => {
    try {
      const task = await updateTaskInAPI(updatedTask._id, updatedTask); // Update the task on the backend
      setTasks(
        (prevTasks) =>
          prevTasks.map((t) => (t._id === task._id ? { ...task } : t)) // Update task in state
      );
      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const moveTaskToCategory = (id, newCategory) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, category: newCategory } : task
      )
    );
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
          updateTask={updateTask}
        />
      )}
    </>
  );
}
