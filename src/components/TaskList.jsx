import React from "react";
import "../styles/tasklist.css";
import editIcon from "../assets/edit.png";
import trashIcon from "../assets/trash.png";

export default function TaskList({ tasks,deleteTask }) {
  const categories = ["Pending", "In Progress", "Completed"];

  return (
    <div id="task-list">
      <table id="tasks-table">
        <thead>
          <tr>
            <th className="tasks-heading">Pending</th>
            <th className="tasks-heading">In Progress</th>
            <th className="tasks-heading">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {categories.map((category) => (
              <td key={category} className="task-items">
                <ul className="task-column">
                  {tasks
                    .filter((task) => task.category === category)
                    .map((task) => (
                      <li className="task-item" key={task.id}>
                        <h4 className="title">{task.title}</h4>
                        <p className="description">{task.description}</p>
                        <div className="buttons">
                          <button className="task-modify">
                            <img src={editIcon} alt="edit icon" />
                          </button>
                          <button className="task-modify" onClick={() => deleteTask(task.id)}>
                          <img src={trashIcon} alt="delete icon" />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
