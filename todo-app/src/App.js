import { Route, Switch } from "react-router";
import "./App.css";
import ListTask from "./components/ListTask/ListTask";
import Navigation from "./components/Navigation/Navigation";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import IncompleteTaks from "./components/IncompleteTasks/IncompleteTasks";
import AddTask from "./components/AddTask/AddTask";
function App() {
  return (
    <>
      <Navigation />
      <AddTask />
      <Switch>
        <Route exact path="/" component={ListTask} />
        <Route path="/completed" component={CompletedTasks} />
        <Route path="/incomplete" component={IncompleteTaks} />
      </Switch>
    </>
  );
}

export default App;
