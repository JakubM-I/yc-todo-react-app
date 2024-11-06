import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewTask } from "../tasksSlice";
import { StyledButton } from "./styled";
import { StyledForm, StyledInput } from "../../../common/Form/styled";

const Form = () => {
    const dispatch = useDispatch();

    const [taskName, setTaskName] = useState("");
    const inputRef = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();
        if (!taskName.trim()) {
            return;
        }
        dispatch(addNewTask({
            id: nanoid(),
            taskName: taskName.trim(),
            taskDone: false,
            taskVisibility: true,
        })
        );
        inputRef.current.focus();
        setTaskName("");
    };

    return (
        <StyledForm
            onClick={formSubmit}
            action="#"
        >
            <StyledInput
                ref={inputRef}
                value={taskName}
                onChange={({ target }) => setTaskName(target.value)}
                type="text" name="newTask"
                placeholder="Co jest do zrobienia?"
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    )
};

export default Form;