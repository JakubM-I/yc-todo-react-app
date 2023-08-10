import './App.css';
import TaskList from './TaskList';
import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from './Section';
import { useTasks } from "./useTasks";
import StyledGlobal from './Styled/styledGlobal';

function App() {

  const [tasksList, addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask] = useTasks()

  return (
    <>
      <StyledGlobal />
      <TaskList>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form
              addNewTask={addNewTask}
            />}
        />
        <Section
          title="Lista zadań"
          menu={
            <TaskMenu
              tasks={tasksList}
              doneAllTasks={doneAllTasks}
              hideDoneTasks={hideDoneTasks}
            />}
          body={
            <Tasks
              tasks={tasksList}
              toggleTaskDone={toggleTaskDone}
              deleteTask={deleteTask}
            />}
        />
      </TaskList>
    </>

  );
}

export default App;
