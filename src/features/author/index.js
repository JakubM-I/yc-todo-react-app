import TasksAppMain from "../../common/AppMainSection";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledAuthorPageBody } from "./styled";

const AuthorPage = () => (
    <TasksAppMain>
        <Header title={"O autorze"} />
        <Section body={
            <StyledAuthorPageBody>
                Tekst o autorze
            </StyledAuthorPageBody>}
        />
    </TasksAppMain>
);

export default AuthorPage;