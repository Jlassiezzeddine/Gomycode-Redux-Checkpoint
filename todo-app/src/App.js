import { Route, Switch } from "react-router";
import "./App.css";
import ListTask from "./components/ListTask/ListTask";
import Navigation from "./components/Navigation/Navigation";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import IncompleteTaks from "./components/IncompleteTasks/IncompleteTasks";

function App() {
  return (
    <>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={ListTask} />
        <Route path="/completed" component={CompletedTasks} />
        <Route path="/incomplete" component={IncompleteTaks} />
      </Switch>
    </>
  );
}

export default App;
