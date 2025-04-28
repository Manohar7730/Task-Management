import React from "react";
import '../styles/header.css';

export default function Header() {
  return (
    <div id="header">
      <h1>Task Manager</h1>
      <button id="add-task">
        <h2>Add Task</h2>
      </button>
    </div>
  );
}
