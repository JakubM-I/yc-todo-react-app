import { createSlice } from "@reduxjs/toolkit";
import { tasksFromLocalStorge } from "./utils/localStorage";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: tasksFromLocalStorge(),
        loading: false,
        hiddenDoneTasks: false,
    },
    reducers: {
        addNewTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].taskDone = !tasks[index].taskDone;
        },

        doneAllTasks: ({ tasks }) => {
            for (const task of tasks) {
                task.taskDone = true;
            }
        },

        hideDoneTasks: state => {
            state.hiddenDoneTasks = !state.hiddenDoneTasks;
        },

        deleteTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },

        fetchExampleTasks: state => {
            state.loading = true;
        },

        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },

        loadExampleTaksError: state => {
            state.loading = false;
        }
    }
});

export const selectTaskState = (state) => state.tasks;
export const taskSelector = state => selectTaskState(state).tasks;
export const selectAllTaskDone = (state) => selectTaskState(state).tasks.every(task => task.taskDone);
export const selectHiddenTask = (state) => selectTaskState(state).tasks.some(task => task.taskVisibility === false);
export const selectTaskById = (state, taskId) => taskSelector(state).find(task => task.id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = taskSelector(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return taskSelector(state).filter(task => task.taskName.toUpperCase().includes(query.trim().toUpperCase()))
}

export const loadingState = state => selectTaskState(state).loading;
export const hiddenDoneTasksState = state => selectTaskState(state).hiddenDoneTasks;

export const { addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask, fetchExampleTasks, setExampleTasks, loadExampleTaksError } = tasksSlice.actions;
export default tasksSlice.reducer;
