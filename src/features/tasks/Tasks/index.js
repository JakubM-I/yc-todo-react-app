
import { useDispatch, useSelector } from "react-redux";
import { selectTaskState, toggleTaskDone, deleteTask } from "../tasksSlice";
import { StyledTaskList, StyledTaskItem, StyledDoneButton, StyledRemoveButton, StyledContent } from "./styled";
import { NavLink } from "react-router-dom";


const Tasks = () => {
    const { tasks } = useSelector(selectTaskState);
    const dispatch = useDispatch();

    return (
        <StyledTaskList>
            {tasks.map(task => (
                <StyledTaskItem
                    key={task.id}
                    done={task.taskDone}
                    hide={task.taskVisibility}
                >
                    <StyledDoneButton
                        done={task.taskDone}
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    />
                    <StyledContent>
                        <NavLink to={`task/${task.id}`}>{task.taskName}</NavLink>
                    </StyledContent>
                    <div>
                        <StyledRemoveButton
                            removeButton
                            onClick={() => dispatch(deleteTask(task.id))}
                        />
                    </div>
                </StyledTaskItem>
            ))}
        </StyledTaskList>
    )
};

export default Tasks;