import TaskList from './TaskList';
import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from './Section';
import { useTasks } from "./utils/useTasks";
import StyledGlobal from './Styled/styledGlobal';
import { ThemeProvider } from 'styled-components';

function App() {

  const [tasksList, addNewTask, toggleTaskDone, doneAllTasks, hideDoneTasks, deleteTask] = useTasks()

  const theme = {
    colors: {
      primaryLightColor: "#fff",
      primaryBackgroundColor: "#8e8e8d",
      primaryButton: "#2a7221", 
      mainBackgroundColor: "#e6e6e4",
      doneButton: "#27f507",
      doneButtonDone: "#dffad8",
      removeButton: "#f74d1dea",
      doneText: "#d3d3d3",
      firstBorderColor: "#b4b2b2",
      secondBorderColor: "#928e8e",
      thirdBorderColor: "#e5e2e2",
      menuButton: "#0040ff",
      menuButtonHover: "#8fabff",
      menuButtonDisable: "#c6c5c5e9",
    },

    breakepoints: {
      mobile: 499,
    },
  }

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
