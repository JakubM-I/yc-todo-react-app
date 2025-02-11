
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, deleteTask, selectTaskByQuery, hiddenDoneTasksState } from "../tasksSlice";
import { StyledTaskList, StyledTaskItem, StyledDoneButton, StyledRemoveButton, StyledContent, StyledNavlink } from "./styled";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../../../common/PageTitle";


const Tasks = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("szukaj");
    const dispatch = useDispatch();
    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const isHiddenDoneTask = useSelector(hiddenDoneTasksState);

    return (
        <>
            <PageTitle title={"Lista zadań"} />
            <StyledTaskList>
                {tasks.map(task => (
                    <StyledTaskItem
                        key={task.id}
                        $hide={isHiddenDoneTask && task.taskDone}
                    >
                        <StyledDoneButton
                            $done={task.taskDone}
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        />
                        <StyledContent>
                            <StyledNavlink
                                $done={task.taskDone}
                                to={`task/${task.id}`}
                            >
                                {task.taskName}
                            </StyledNavlink>
                        </StyledContent>
                        <div>
                            <StyledRemoveButton
                                onClick={() => dispatch(deleteTask(task.id))}
                            />
                        </div>
                    </StyledTaskItem>
                ))}
            </StyledTaskList>
        </>
    )
};

export default Tasks;