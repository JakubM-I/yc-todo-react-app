export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export const tasksFromLocalStorge = () =>
    JSON.parse(localStorage.getItem("tasks")) || []
