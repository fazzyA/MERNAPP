import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/Users/Add";
import Users from "./components/Users/Users";
import Header from "./components/Header";
import SingleUser from "./components/Users/SingleUser";
import Home from "./components/Home";
import AddPost from "./components/Posts/AddPost";
import Posts from "./components/Posts/Posts";
import SinglePost from "./components/Posts/SinglePost";
import UpdatePost from "./components/Posts/UpdatePost";
function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/register">
            <Add />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
          </Route>
          <Route path="/update-post/:id">
            <UpdatePost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
