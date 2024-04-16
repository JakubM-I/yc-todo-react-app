import { useDispatch, useSelector } from "react-redux";
import { StyledTaskMenu, StyledMenuItem } from "./styled";
import { selectTask, hideDoneTasks, doneAllTasks } from "../tasksSlice";

const TaskMenu = () => {
    const {tasks} = useSelector(selectTask);
    const dispatch = useDispatch();

    return(
        tasks.length > 0 && (
            <StyledTaskMenu>
            <StyledMenuItem 
                onClick={() => dispatch(hideDoneTasks())}
            >
                {tasks.some(({ taskVisibility }) => taskVisibility === false) 
                ? "Pokaż " 
                : "Ukryj "}
                zakończone
            </StyledMenuItem>
            <StyledMenuItem 
                onClick={() => dispatch(doneAllTasks())}
                disabled={tasks.every(({ taskDone }) => taskDone)}
            >
                Zakończ wszystkie
            </StyledMenuItem>
        </StyledTaskMenu>
        )
    )
};

export default TaskMenu;