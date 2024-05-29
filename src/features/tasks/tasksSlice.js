import { createSlice, nanoid } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addNewTask: ({tasks}, {payload}) => {
            tasks.push(payload);
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].taskDone = !tasks[index].taskDone;
        },

        doneAllTasks: ({tasks}) => {
            for(const task of tasks){
                task.taskDone = true;
            }
        },

        hideDoneTasks: ({tasks}) => {
            tasks.forEach(task => {
                if(task.taskDone === true){
                    task.taskVisibility = !task.taskVisibility;
                }
            })
        },

        deleteTask: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1);
        }
    }
});

export const selectTaskState = (state) => state.tasks;
export const selectAllTaskDone = (state) => selectTaskState(state).tasks.every(task => task.taskDone);
export const selectHiddenTask = (state) => selectTaskState(state).tasks.some(task => task.taskVisibility === false); 
export const {addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
