import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Navbar from "./components/Navbar/Navbar";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Images />
          </Route>
          <Route path="/sign-in">
            <Home />
          </Route>
          <Route path="/sign-up">
            <Home />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
