<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Navbar from "./components/Navbar/Navbar";
import Videos from "./components/Videos/Videos";
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Images from './components/Images/Images';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
>>>>>>> 94c35284809c55e437e104019f99e53a167b1b7a

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact>
            <Images />
=======
          <Route exact path="/">
            <Home />
>>>>>>> 94c35284809c55e437e104019f99e53a167b1b7a
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
