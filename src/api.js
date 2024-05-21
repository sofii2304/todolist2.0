import { API_BASE_URL } from './config';
export const fetchTasks = async () => {    const response = await fetch(`${API_BASE_URL}/tasks`);
    const data = await response.json();    return data;
};
export const createTask = async (task) => {    const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',        headers: {
            'Content-Type': 'application/json',        },
        body: JSON.stringify(task),    });
    const data = await response.json();    return data;
};
export const updateTask = async (id, task) => {    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'PUT',        headers: {
            'Content-Type': 'application/json',        },
        body: JSON.stringify(task),    });
    const data = await response.json();    return data;
};
export const deleteTask = async (id) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {        method: 'DELETE',
    });    const data = await response.json();
    return data;};