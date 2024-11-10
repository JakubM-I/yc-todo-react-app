import { useDispatch, useSelector } from "react-redux";
import { StyledMenuItem, StyledMenu } from "../../../common/Menu/styled";
import { fetchExampleTasks, loadingState } from "../tasksSlice";
import { StyledExamplesMenuItem } from "./styled";

const ExamplehMenu = () => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingState);

    return (
        <StyledMenu>
            <StyledExamplesMenuItem
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Ładuje" : "Pobierz przykładowe zadania"}
            </StyledExamplesMenuItem>
        </StyledMenu>
    );
};

export default ExamplehMenu;