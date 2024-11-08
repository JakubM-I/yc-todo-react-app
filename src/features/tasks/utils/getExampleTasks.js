export const getExampleTasks = async () => {
    const response = await fetch("/yc-todo-react-app/exampleTasks.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};