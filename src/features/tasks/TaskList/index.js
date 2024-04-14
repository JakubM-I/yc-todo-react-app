import { StyledTasks } from "./styled";

const TaskList = ({children}) => (
    <StyledTasks>
        {children}
    </StyledTasks>
);

export default TaskList;