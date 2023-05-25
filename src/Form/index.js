import "./style.css";

const Form = () => (
    <form className="taskListForm__form" action="#">
        <input className="taskListForm__addField" type="text" name="newTask" placeholder="Co jest do zrobienia?" />
        <button className="taskListForm__addButton">Dodaj zadanie</button>
    </form>
);

export default Form;