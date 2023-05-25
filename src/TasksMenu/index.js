import "./style.css";

const TaskMenu = ({ tasks, doneAllTasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="tasks__buttons">
        <button 
            className="tasks__buttonItem"
            onClick={hideDoneTasks}
        >
            {tasks.some(({ taskVisibility }) => taskVisibility === false) 
            ? "Pokaż " 
            : "Ukryj "}
            zakończone
        </button>
        <button 
            className="tasks__buttonItem"
            onClick={doneAllTasks}
            disabled={tasks.every(({ taskDone }) => taskDone)}
        >
            Zakończ wszystkie
        </button>
    </div>
    )
);

export default TaskMenu;