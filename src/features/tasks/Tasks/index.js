
import { useDispatch, useSelector } from "react-redux";
import { selectTask, toggleTaskDone } from "../tasksSlice";
import { StyledTaskList, StyledTaskItem, StyledDoneButton, StyledRemoveButton, StyledContent } from "./styled";


const Tasks = ({deleteTask}) => {
    const {tasks} = useSelector(selectTask);
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
                    <StyledContent>{task.taskName}</StyledContent>
                    <div>
                        <StyledRemoveButton 
                            removeButton
                            onClick={() => deleteTask(task.id)}
                        />
                    </div>
                </StyledTaskItem>
            ))}
        </StyledTaskList>
    )
};

export default Tasks;