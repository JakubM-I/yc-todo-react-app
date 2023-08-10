import { useState, useRef } from "react";
import "./style.css";

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
    <form 
        onClick={formSubmit}
        className="taskListForm__form" 
        action="#"
    >
        <input 
            ref={inputRef}
            value={taskName}
            onChange={({target}) => setTaskName(target.value)}
            className="taskListForm__addField" 
            type="text" name="newTask" 
            placeholder="Co jest do zrobienia?" 
        />
        <button className="taskListForm__addButton">Dodaj zadanie</button>
    </form>
    )
};

export default Form;