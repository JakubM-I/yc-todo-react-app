import TasksAppMain from "../../../common/AppMainSection";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const TaskPage = () => (
    <TasksAppMain>
        <Header title={"Szczegóły zadania"} />
        <Section
            title={"Tu będzie nazwa"}
            body={"Tu będa informacje o zadaniu"}
        />
    </TasksAppMain>
);

export default TaskPage;