import TasksAppMain from "../../common/AppMainSection";
import Header from "../../common/Header";
import PageTitle from "../../common/PageTitle";
import Section from "../../common/Section";
import { StyledAuthorPageBody } from "./styled";

const AuthorPage = () => (
    <>
        <PageTitle title={"Lista zadań - O autorze"} />
        <TasksAppMain>
            <Header title={"O autorze"} />
            <Section body={
                <StyledAuthorPageBody>
                    Tekst o autorze
                </StyledAuthorPageBody>}
            />
        </TasksAppMain>

    </>

);

export default AuthorPage;