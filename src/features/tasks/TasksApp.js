import TaskList from './TaskList';
import Header from '../../common/Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from '../../common/Section';
import { useTasks } from "./utils/useTasks";
import StyledGlobal from '../../styledGlobal';
import { ThemeProvider } from 'styled-components';

function TasksApp() {
  const [tasksList, addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask] = useTasks()

  return (
      <>
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

export default TasksApp;
