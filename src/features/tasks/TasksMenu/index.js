import { useDispatch, useSelector } from "react-redux";
import { StyledMenu, StyledMenuItem } from "../../../common/Menu/styled";
import { selectTaskState, selectAllTaskDone, selectHiddenTask, hideDoneTasks, doneAllTasks } from "../tasksSlice";
import { StyledHiddenTaskBtn } from "./styled";

const TaskMenu = () => {
    const { tasks } = useSelector(selectTaskState);
    const isAllTaskDone = useSelector(selectAllTaskDone);
    const isHiddenTasks = useSelector(selectHiddenTask);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <StyledMenu>
                <StyledHiddenTaskBtn
                    $isHiddenTasks={isHiddenTasks}
                    onClick={() => dispatch(hideDoneTasks())}
                >
                    {isHiddenTasks
                        ? "Pokaż "
                        : "Ukryj "}

                    zakończone
                </StyledHiddenTaskBtn>
                <StyledMenuItem
                    onClick={() => dispatch(doneAllTasks())}
                    disabled={isAllTaskDone}
                >
                    Zakończ wszystkie
                </StyledMenuItem>
            </StyledMenu>
        )
    )
};

export default TaskMenu;