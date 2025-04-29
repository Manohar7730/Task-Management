import React from "react";
import "../styles/header.css";

export default function Header({ setShowAddForm }) {
  const showAdd = (e) => {
    console.log("form clicked");

    e.preventDefault;
    setShowAddForm((prev) => !prev);
  };
  return (
    <div id="header">
      <h1>Task Manager</h1>
      <button id="add-task" onClick={showAdd}>
        <h2>Add Task</h2>
      </button>
    </div>
  );
}
