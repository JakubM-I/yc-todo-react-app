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
        }
    }

});

export const selectTask = (state) => state.tasks;
export const {addNewTask} = tasksSlice.actions;
export default tasksSlice.reducer;
