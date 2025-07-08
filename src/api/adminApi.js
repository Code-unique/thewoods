const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const getAuthHeaders = () => {
  // Assuming you store JWT in localStorage or context after admin login
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Rooms APIs
export const fetchRooms = async () => {
  const res = await fetch(`${API_BASE}/rooms`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const createRoom = async (formData) => {
  const res = await fetch(`${API_BASE}/rooms`, {
    method: "POST",
    headers: {
      Authorization: getAuthHeaders().Authorization,
      // Don't set Content-Type for FormData (browser does it)
    },
    body: formData,
  });
  return res.json();
};

export const updateRoom = async (id, formData) => {
  const res = await fetch(`${API_BASE}/rooms/${id}`, {
    method: "PUT",
    headers: {
      Authorization: getAuthHeaders().Authorization,
    },
    body: formData,
  });
  return res.json();
};

export const deleteRoom = async (id) => {
  const res = await fetch(`${API_BASE}/rooms/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};

// Activities APIs (similar pattern)
export const fetchActivities = async () => {
  const res = await fetch(`${API_BASE}/activities`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const createActivity = async (formData) => {
  const res = await fetch(`${API_BASE}/activities`, {
    method: "POST",
    headers: {
      Authorization: getAuthHeaders().Authorization,
    },
    body: formData,
  });
  return res.json();
};

export const updateActivity = async (id, formData) => {
  const res = await fetch(`${API_BASE}/activities/${id}`, {
    method: "PUT",
    headers: {
      Authorization: getAuthHeaders().Authorization,
    },
    body: formData,
  });
  return res.json();
};

export const deleteActivity = async (id) => {
  const res = await fetch(`${API_BASE}/activities/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};
