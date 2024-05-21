import React, { useState, useEffect } from "react"; 
import Container from "./components/Container"; 
import FormTodo from "./components/FormTodo"; 
import TaskList from "./components/TaskList"; 
import { fetchTasks, createTask, deleteTask } from "./api"; 
 
function App() { 
  const [tasks, setTasks] = useState([]); 
 
  useEffect(() => { 
    const getTasks = async () => { 
      const tasksFromServer = await fetchTasks(); 
      setTasks(tasksFromServer); 
    }; 
 
    getTasks(); 
  }, []); 
 
  const addTask = async (task) => { 
    const newTask = await createTask({ title: task, description: "", status: "pending" }); 
    setTasks([...tasks, newTask]); 
  }; 
 
  const removeTask = async (index) => { 
    const taskToDelete = tasks[index]; 
    await deleteTask(taskToDelete.id); 
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks); 
  }; 
   
  return ( 
    <div> 
      <Container> 
        <h1>My To-Do List</h1> 
        <FormTodo onAddTask={addTask} /> 
        <TaskList tasks={tasks} onDeleteTask={removeTask} /> 
      </Container> 
    </div> 
  ); 
} 
 
export default App;