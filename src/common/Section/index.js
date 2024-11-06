import { StyledSection, StyledHeader, StyledTitle } from "./styled";

const Section = ({ title, menu, body }) => (
    <StyledSection>
        {title ? (
            <StyledHeader>
                <StyledTitle>{title}</StyledTitle>
                {menu}
            </StyledHeader>
        ) : ""}
        {body}
    </StyledSection>
)

export default Section;