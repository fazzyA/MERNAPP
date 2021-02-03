import React,{useEffect} from "react";
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
import Signin from "./components/Auth/SignIn";
import Logout from "./components/Auth/Logout";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   axios.get('http://localhost:4000/api/users/authcheck')
  //   .then(res => {
  //       console.log(res);
  //       // console.log('login successful')
  //       // history.push('/')
  //   })
  //   .catch(err=>console.log(err,'error'));

  // }, [])

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
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/logout">
            <Logout />
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
