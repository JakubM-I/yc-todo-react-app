import { NavLink } from "react-router-dom";
import { StyledNavigation, StyledNavigationItem } from "./styled";

const Navigation = () => (
    <>
        <StyledNavigation>
            <StyledNavigationItem>
                <NavLink to={"/"}>Zadania</NavLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
                <NavLink to={"o-autorze"}>O autorze</NavLink>
            </StyledNavigationItem>
        </StyledNavigation>
    </>
);

export default Navigation;