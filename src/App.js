import "./styles.css";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import { useState } from "react";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskInput = (str) => {
    setTaskInput(str);
  };

  const addTask = () => {
    if (taskInput !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const handleDelete = (index) => {
    console.log(tasks, index);
    const completedTasks = tasks.filter((_, i) => {
      if (index === i) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(completedTasks);
  };

  const moveToCompleted = (index, isCompletedList) => {
    if (isCompletedList) {
      const taskToRevert = completedTasks[index];
      setCompletedTasks(completedTasks.filter((_, i) => i !== index));
      setTasks([...tasks, taskToRevert]);
    } else {
     
      const taskToMove = tasks[index];
      setTasks(tasks.filter((_, i) => i !== index));
      setCompletedTasks([...completedTasks, taskToMove]);
    }
  };

  return (
    <div className="App">
      <h1>A Simple ToDo List App</h1>
      <div className="headp">
        <Input
          taskInput={taskInput}
          handleTaskInput={handleTaskInput}
          addTask={addTask}
          className="labeloftask"
        />
      </div>

      <h1>Added Tasks</h1>
      <div class="addtask">
        <ListItem
          tasks={tasks}
          handleDelete={handleDelete}
          moveToCompleted={moveToCompleted}
          isCompletedList={false}
        />
      </div>
      <h1>Completed Tasks</h1>
      <div class="completedtask">
        <ListItem
          tasks={completedTasks}
          moveToCompleted={moveToCompleted}
          isCompletedList={true}
        />
      </div>
    </div>
  );
}
