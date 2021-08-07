import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-in">
          <Home />
        </Route>
        <Route path="/sign-up">
          <Home />
        </Route>
        <Route path="/images">
          <Home />
        </Route>
        <Route path="/videos">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
