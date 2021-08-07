import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Images from "./components/Images/Images";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
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
            <SignIn />
          </Route>
          <Route path="/sing-up">
            <SignUp />
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
