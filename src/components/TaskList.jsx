import React from "react";
import '../styles/tasklist.css'

export default function TaskList() {
  return (
    <div id="task-list">
      <table>
        <thead>
          <tr>
            <th>Pending</th>
            <th>In Progress</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No tasks yet.</td>
            <td>No tasks yet.</td>
            <td>No tasks yet.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
