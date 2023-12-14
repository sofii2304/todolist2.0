/// src/App.js
import React, { useState } from "react";
import Container from "./components/container";
import FormTodo from "./components/FormTodo";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  
  return (
    <div>
      <Container>
        <h1>My To-Do List</h1>
        <FormTodo onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </Container>
    </div>
  );
}
export default App;