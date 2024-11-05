import { NavLink } from "react-router-dom";
import { StyledNavigation, StyledNavigationItem, StyledNavLink } from "./styled";

const Navigation = () => (
    <>
        <StyledNavigation>
            <StyledNavigationItem>
                <StyledNavLink to={"/"}>Zadania</StyledNavLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
                <StyledNavLink to={"o-autorze"}>O autorze</StyledNavLink>
            </StyledNavigationItem>
        </StyledNavigation>
    </>
);

export default Navigation;