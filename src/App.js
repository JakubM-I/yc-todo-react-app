import { Outlet } from "react-router-dom";
import Navigation from "./common/Navigation";

const App = () => (
    <>
        <Navigation />
        <Outlet />
        {/* <TasksApp /> */}
    </>
);

export default App;