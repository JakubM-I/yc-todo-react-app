export const getExampleTasks = async () => {
    const response = await fetch("https://yc-todo-list.netlify.app/exampleTasks.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};