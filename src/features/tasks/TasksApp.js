import TasksAppMain from '../../common/AppMainSection';
import Header from '../../common/Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from '../../common/Section';

function TasksList() {

  return (
    <>
      <TasksAppMain>
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
      </TasksAppMain>
    </>
  );
}

export default TasksList;
