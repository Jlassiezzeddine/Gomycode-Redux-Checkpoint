import { Route, Switch } from "react-router";
import "./App.css";
import ListTask from "./components/ListTask/ListTask";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={ListTask} />
      </Switch>
    </>
  );
}

export default App;
