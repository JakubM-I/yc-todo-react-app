import styled, {css} from 'styled-components';
import doneicon from "./done-icon.png"
import trashicon from "./trash-icon.png";

export const StyledTaskList = styled.ul`
    border-top: 1px solid ${({theme}) => theme.colors.firstBorderColor};
    padding: 20px 15px 0px;
    margin-top: 0;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        padding: 20px 5px 0px;
    }
`;

export const StyledTaskItem = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: ${({theme}) => theme.colors.primaryLightColor};
    padding: 5px;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondBorderColor};

    ${({done}) => done && css`
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.doneText};
    `}

    ${({hide}) => !hide && css`
        display: none;
    `}

    & >div{
        display: flex;
    }
`;

export const StyledTaskButton = styled.button`
    width: ${({theme}) => theme.dimensions.iconWidth};
    height: ${({theme}) => theme.dimensions.iconHeight};
    border: 1px solid ${({theme}) => theme.colors.thirdBorderColor};
    flex-shrink: 0;
    cursor: pointer;
    transition: opacity 0.3s ease-in;

    &:hover{
        opacity: 0.7;
    }
`;

export const StyledDoneButton = styled(StyledTaskButton)`
    background: ${({theme}) => theme.colors.doneButton};

    ${({done}) => done && css`
            background: ${({theme}) => theme.colors.doneButtonDone};
            background-image: url("${doneicon}");
            background-position: center;
            background-size: initial;
            background-repeat: no-repeat;
            border: none;
        ` }
`;

export const StyledRemoveButton = styled(StyledTaskButton)`
    background: ${({theme}) => theme.colors.removeButton};
    background-image: url("${trashicon}");
    background-position: center;
    background-size: initial;
    background-repeat: no-repeat;
`;

export const StyledContent = styled.span`
    display: block;
    flex-grow: 1;
    font-size: min(max(3.3vw, 14px), 16px);
    word-break: break-word;
`;
