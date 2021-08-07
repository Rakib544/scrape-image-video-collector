import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Images from './components/Images/Images';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <Home />
          </Route>
          <Route path="/sing-up">
            <SignUp />
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
