import { StyledHeaderH1 } from "./styled";

const Header = ({ title }) => (
    <StyledHeaderH1 className="taskList__header">{title}</StyledHeaderH1>
);

export default Header;