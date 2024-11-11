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
            <Section
                title={"Jakub Musiałowski"}
                body={
                    <StyledAuthorPageBody>
                        <p>Od lat jestem miłośnikiem internetu i wszystkiego co z nim związane. <strong>Od przeszło 15 lat</strong> jestem zwiazany z branżą e-commerce tworząc, rozwijając i prowadząc sklepy internetowe. W pracy tej zawsze gdzieś ocierałem się o pracę z kodem, wprowadzanie zmian w sklepach czy dodawanie nowych elementów. Dlatego od ponad roku intensywnie zgłębiam tajniki frontdeveloperki. I okazało się..., że stało się to moją <strong>ogromną pasją.</strong> </p>
                    </StyledAuthorPageBody>}
            />
        </TasksAppMain>

    </>

);

export default AuthorPage;