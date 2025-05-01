const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/`);
  const data = await response.json();
  return data.data;
};

// CREATE new task
export const createTask = async (task) => {
  const response = await fetch(`${API_BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data.data;
};

// UPDATE task
export const updateTask = async (id, updates) => {
  const response = await fetch(`${API_BASE_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  const data = await response.json();
  return data.data;
};

// UPDATE task status
export const updateTaskCategory = async (id, newCategory) => {
  const response = await fetch(`${API_BASE_URL}/update-category/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: newCategory }),
  });
  const data = await response.json();
  return data.data;
};

// DELETE task
export const deleteTask = async (id) => {
  await fetch(`${API_BASE_URL}/delete/${id}`, {
    method: "DELETE",
  });
};
