import TaskList from './features/tasks/TaskList';
import Header from './common/Header';
import Form from './features/tasks/Form';
import Tasks from './App';
import TaskMenu from './features/tasks/TasksMenu';
import Section from './common/Section';
import { useTasks } from "./features/tasks/utils/useTasks";
import StyledGlobal from './styledGlobal';
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

    dimensions: {
      iconWidth: "min(max(6.412vw, 30px), 35px)",
      iconHeight: "min(max(6.412vw, 30px), 35px)",
    },

    font: {
      formFontSize: "min(max(2.89vw, 14px),17px)",
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
