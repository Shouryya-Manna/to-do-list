import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([ ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    const updatedTasks = tasks.filter((_, i)=> i!==index);
    setTasks(updatedTasks);
  }

  function MoveUp(index) {
    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }

  function MoveDown(index) {
    if(index<tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] =  [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }


  return (
    <div className="">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
            <button onClick={() => MoveUp(index)}>↑</button>
            <button onClick={() => MoveDown(index)}>↓</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
