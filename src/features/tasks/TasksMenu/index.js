import { useSelector } from "react-redux";
import { StyledTaskMenu, StyledMenuItem } from "./styled";
import { selectTask } from "../tasksSlice";

const TaskMenu = ({ doneAllTasks, hideDoneTasks }) => {
    const {tasks} = useSelector(selectTask);

    return(
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
    )
};

export default TaskMenu;