import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './components/Add';
import Users from './components/Users';
function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Add />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
          <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
