import { useDispatch, useSelector } from "react-redux";
import { StyledTaskMenu, StyledMenuItem } from "./styled";
import { selectTaskState, selectAllTaskDone, selectHiddenTask, hideDoneTasks, doneAllTasks } from "../tasksSlice";

const TaskMenu = () => {
    const {tasks} = useSelector(selectTaskState);
    const isAllTaskDone = useSelector(selectAllTaskDone);
    const isHiddenTasks = useSelector(selectHiddenTask);
    const dispatch = useDispatch();

    return(
        tasks.length > 0 && (
            <StyledTaskMenu>
            <StyledMenuItem 
                onClick={() => dispatch(hideDoneTasks())}
            >
                {isHiddenTasks
                ? "Pokaż " 
                : "Ukryj "}

                zakończone
            </StyledMenuItem>
            <StyledMenuItem 
                onClick={() => dispatch(doneAllTasks())}
                disabled={isAllTaskDone}
            >
                Zakończ wszystkie
            </StyledMenuItem>
        </StyledTaskMenu>
        )
    )
};

export default TaskMenu;