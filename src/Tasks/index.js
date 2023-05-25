import "./style.css";

const Tasks = ({tasks}) => (
    <ul className="tasks__list">
        {tasks.map(task => (
            <li key={task.id} className={`tasks__listItem 
            ${task.taskDone ? "tasks__listItem--done" : ""} 
            ${task.taskVisibility ? "" : "tasks__listItem---hide"}`}
            >
                <button className={`tasks__doneButton 
                ${task.taskDone ? "tasks__doneButton--done" : ""}`}
                />
                <span className="tasks__taskContent">{task.taskName}</span>
                <div className="tasks__itemButtons">
                    <button className="tasks__removeButton" />
                </div>
            </li>
        ))}
    </ul>
);

export default Tasks;