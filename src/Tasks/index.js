import { StyledTaskList, StyledTaskItem, StyledTaskButton, StyledContent } from "./styled";

const Tasks = ({tasks, toggleTaskDone, deleteTask}) => (
    <StyledTaskList>
        {tasks.map(task => (
            <StyledTaskItem 
            key={task.id} 
            done={task.taskDone}
            hide={task.taskVisibility}
            >
                <StyledTaskButton
                    doneButton
                    done={task.taskDone}
                    onClick={() => toggleTaskDone(task.id)}
                />
                <StyledContent>{task.taskName}</StyledContent>
                <div>
                    <StyledTaskButton 
                        removeButton
                        onClick={() => deleteTask(task.id)}
                    />
                </div>
            </StyledTaskItem>
        ))}
    </StyledTaskList>
);

export default Tasks;