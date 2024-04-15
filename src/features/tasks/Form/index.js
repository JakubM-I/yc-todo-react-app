import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../tasksSlice";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = () => {
    const dispatch = useDispatch();

    const [taskName, setTaskName] = useState("");
    const inputRef = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();
        if(!taskName.trim()){
            return;
        }
        dispatch(addNewTask(taskName.trim()))
        // addNewTask(taskName.trim());
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