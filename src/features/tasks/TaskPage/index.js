import { useParams, useSearchParams } from "react-router-dom";
import TasksAppMain from "../../../common/AppMainSection";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    console.log(id);

    const task = useSelector(state => selectTaskById(state, id))

    return (
        <TasksAppMain>
            <Header title={"Szczegóły zadania"} />
            <Section
                title={task ? task.taskName : "Nie znaleziono takiego zadania"}
                body={`Czy zadanie wykonane: ${task.taskDone ? "Tak" : "Nie"}`}
            />
        </TasksAppMain>
    )
};

export default TaskPage;