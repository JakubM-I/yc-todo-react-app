import { createSlice, nanoid } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addNewTask: ({tasks}, {payload}) => {
            tasks.push({
                id: nanoid(),
                taskName: payload,
                taskDone: false,
                taskVisibility: true,
            })
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].taskDone = !tasks.taskDone;
        }

    }

});

export const selectTask = (state) => state.tasks;
export const {addNewTask, toggleTaskDone} = tasksSlice.actions;
export default tasksSlice.reducer;
