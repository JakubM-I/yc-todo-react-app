import TasksAppMain from '../../common/AppMainSection';
import Header from '../../common/Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from '../../common/Section';
import SearchForm from './SearchForm';
import ExamplehMenu from './SearchMenu';

function TasksList() {

  return (
    <>
      <TasksAppMain>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          menu={<ExamplehMenu />}
          body={
            <Form />}
        />
        <Section
          body={
            <SearchForm />}
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
