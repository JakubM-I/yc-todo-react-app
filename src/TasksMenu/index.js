import { StyledTaskMenu, StyledMenuItem } from "./styled";

const TaskMenu = ({ tasks, doneAllTasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <StyledTaskMenu>
        <StyledMenuItem 
            onClick={hideDoneTasks}
        >
            {tasks.some(({ taskVisibility }) => taskVisibility === false) 
            ? "Pokaż " 
            : "Ukryj "}
            zakończone
        </StyledMenuItem>
        <StyledMenuItem 
            onClick={doneAllTasks}
            disabled={tasks.every(({ taskDone }) => taskDone)}
        >
            Zakończ wszystkie
        </StyledMenuItem>
    </StyledTaskMenu>
    )
);

export default TaskMenu;