import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./presentation/Landing/Landing";
import Registration from "./container/Registration/Registration";
import Login from "./container/Login/Login";
import Dashboard from "./container/Dashboard/Dashboard";
import Posts from "./presentation/Posts/Posts";
import LikedPosts from "./presentation/LikedPosts/Likedposts";
import MyPosts from "./presentation/MyPosts/MyPosts";
import NotFound from "./presentation/NotFound/NotFound";

function Routing() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/posts" exact>
            <Dashboard>
              <Posts />
            </Dashboard>
          </Route>
          <Route path="/liked-posts" exact>
            <Dashboard>
              <LikedPosts />
            </Dashboard>
          </Route>
          <Route path="/my-posts" exact>
            <Dashboard>
              <MyPosts />
            </Dashboard>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routing;
