import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({addNewTask}) => {
    const [taskName, setTaskName] = useState("");
    const inputRef = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();
        if(!taskName.trim()){
            return;
        }
        addNewTask(taskName.trim());
        inputRef.current.focus();
        setTaskName("");
        
    };

    return(
    <StyledForm 
        onClick={formSubmit}
        action="#"
    >
        <StyledInput 
            ref={inputRef}
            value={taskName}
            onChange={({target}) => setTaskName(target.value)} 
            type="text" name="newTask" 
            placeholder="Co jest do zrobienia?" 
        />
        <StyledButton>Dodaj zadanie</StyledButton>
    </StyledForm>
    )
};

export default Form;