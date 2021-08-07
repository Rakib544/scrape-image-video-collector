import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
          <Route path="/sign-up">
            <Home />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/videos">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
