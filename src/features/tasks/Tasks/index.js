
import { useSelector } from "react-redux";
import { selectTask } from "../tasksSlice";
import { StyledTaskList, StyledTaskItem, StyledDoneButton, StyledRemoveButton, StyledContent } from "./styled";


const Tasks = ({toggleTaskDone, deleteTask}) => {
    const {tasks} = useSelector(selectTask);

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
                        onClick={() => toggleTaskDone(task.id)}
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