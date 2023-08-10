import { StyledTaskList } from "./styled";

const TaskList = ({children}) => (
    <StyledTaskList>
        {children}
    </StyledTaskList>
);

export default TaskList;