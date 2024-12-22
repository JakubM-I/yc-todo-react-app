import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import TasksList from "./features/tasks/TasksApp";
import AuthorPage from "./features/author";
import TaskPage from './features/tasks/TaskPage';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import { theme } from './features/tasks/utils/theme';
import reportWebVitals from './reportWebVitals';
import StyledGlobal from './styledGlobal';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TasksList />
      },
      {
        path: "o-autorze",
        element: <AuthorPage />
      },
      {
        path: "task/:id",
        element: <TaskPage />
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledGlobal />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
