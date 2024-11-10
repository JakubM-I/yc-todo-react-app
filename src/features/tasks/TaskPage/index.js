import { Navigate, NavLink, useParams, useSearchParams } from "react-router-dom";
import TasksAppMain from "../../../common/AppMainSection";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";
import { StyledBackNavLink, StyledTaskPageBody } from "./styled";
import { useEffect } from "react";
import PageTitle from "../../../common/PageTitle";

const TaskPage = () => {
    const { id } = useParams();

    const task = useSelector(state => selectTaskById(state, id))

    // useEffect(() => {
    //     let pageTitle;
    //     // const curentTitle = document.title;

    //     pageTitle = `Lista zadań - ${task.taskName}`;
    //     document.title = pageTitle;
    // }, [])


    return (
        <>
            <PageTitle title={`Lista zadań - ${task.taskName}`} />
            <TasksAppMain>
                <StyledBackNavLink to={"/"}>&lt; Powrót do zadań</StyledBackNavLink>
                <Header title={"Szczegóły zadania"} />
                <Section
                    title={task ? task.taskName : "Nie znaleziono takiego zadania"}
                    body={
                        <StyledTaskPageBody>
                            Czy zadanie wykonane:{" "}
                            <strong>
                                {task.taskDone ? "Tak" : "Nie"}
                            </strong>
                        </StyledTaskPageBody>
                    }
                />
            </TasksAppMain>

        </>
    )
};

export default TaskPage;