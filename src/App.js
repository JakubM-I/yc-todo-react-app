import React, { useEffect, useState} from "react";
import './App.css';
import TaskList from './TaskList';
import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from './Section';


function App() {
  const [tasksList, setTasksList] = useState(JSON.parse(localStorage.getItem("tasks")))

  const addNewTask = (taskName) => {
    setTasksList(tasksList => [
      ...tasksList,
      {
        id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
        taskName,
        taskDone: false,
        taskVisibility: true,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList))
  }, [tasksList]);

  const toggleTaskDone = (id) => {
    setTasksList(tasksList => tasksList.map(task => 
      (task.id === id ? {...task, taskDone: !task.taskDone} : task)
    ));
  };

  const doneAllTasks = () => {
    setTasksList(tasksList => tasksList.map(task => ({...task, taskDone: true})));
  };

  const hideDoneTasks = () => {
    setTasksList(tasksList => tasksList.map(task => 
      (task.taskDone ? {...task, taskVisibility: !task.taskVisibility} : task)
    ));
  };

  const deleteTask = (id) => {
    setTasksList(tasksList => tasksList.filter(task => task.id !== id ));
  };

  return (
    <TaskList>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={
          <Form 
            addNewTask={addNewTask}
          />} 
      />
      <Section 
        title="Lista zadań" 
        menu={
          <TaskMenu 
            tasks={tasksList} 
            doneAllTasks={doneAllTasks}
            hideDoneTasks={hideDoneTasks}
          />} 
        body={
          <Tasks 
            tasks={tasksList} 
            toggleTaskDone={toggleTaskDone}
            deleteTask={deleteTask}
          />} 
      />
    </TaskList>
  );
}

export default App;
