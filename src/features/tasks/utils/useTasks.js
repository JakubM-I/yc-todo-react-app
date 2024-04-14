import { useState, useEffect } from "react";

export const useTasks = () => {
    const localSavedTasks = JSON.parse(localStorage.getItem("tasks"))
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];

    const [tasksList, setTasksList] = useState(localSavedTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksList))
    }, [tasksList]);

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

    const toggleTaskDone = (id) => {
        setTasksList(tasksList => tasksList.map(task =>
            (task.id === id ? { ...task, taskDone: !task.taskDone } : task)
        ));
    };

    const doneAllTasks = () => {
        setTasksList(tasksList => tasksList.map(task => ({ ...task, taskDone: true })));
    };

    const hideDoneTasks = () => {
        setTasksList(tasksList => tasksList.map(task =>
            (task.taskDone ? { ...task, taskVisibility: !task.taskVisibility } : task)
        ));
    };

    const deleteTask = (id) => {
        setTasksList(tasksList => tasksList.filter(task => task.id !== id));
    };      
    
    return [tasksList, addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask]

}