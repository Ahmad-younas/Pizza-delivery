import './App.css';
import {BrowserRouter  as Router,Switch,Route} from "react-router-dom";
import MainPage from "./Component/mainPage";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Page404 from "./Component/404";
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path={'/'} component={MainPage}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/signup'} component={Signup} />
            <Route component={Page404}/>
        </Switch>
    </Router>
  );
}

export default App;
