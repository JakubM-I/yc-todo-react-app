import TaskList from './TaskList';
import Header from '../../common/Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from '../../common/Section';

function TasksApp() {

  return (
      <>
        <TaskList>
          <Header title="Lista zadań" />
          <Section
            title="Dodaj nowe zadanie"
            body={
              <Form />}
          />
          <Section
            title="Lista zadań"
            menu={
              <TaskMenu />}
            body={
              <Tasks />}
          />
        </TaskList>
      </>
  );
}

export default TasksApp;
