import './App.css';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      

        <Route path="/home">
         <Home></Home>
        </Route>

        <Route path="/details/:id">
         <TeamDetails></TeamDetails>
        </Route>

        <Route exact path="/">
         <Home></Home>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>


      </Switch>
  </Router>
  )
}

export default App;
