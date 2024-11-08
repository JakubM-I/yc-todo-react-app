import { useDispatch, useSelector } from "react-redux";
import { StyledMenuItem, StyledMenu } from "../../../common/Menu/styled";
import { fetchExampleTasks, loadingState } from "../tasksSlice";

const ExamplehMenu = () => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingState);

    return (
        <StyledMenu>
            <StyledMenuItem
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Ładuje" : "Pobierz przykładowe zadania"}
            </StyledMenuItem>
        </StyledMenu>
    );
};

export default ExamplehMenu;