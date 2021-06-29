import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserListComponent from "./components/userlist";
import JavaScriptComponent from "./components/testcomp";
import UserClassComponent from "./components/user-class";
import HeaderComponent from "./components/header";
import HomeComponent from './components/home';
function App() {
  const userList = ["Ram", "Laxmi", "Harinath"];
  const alertMe = (name: any) => {
    alert("hi from ES6 " + name);
  };
  const [userName, setUserName] = useState("harinath");
  useEffect(() => {}, []);
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent/>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jsx">jsx</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/jsx">
              <JavaScriptComponent />
            </Route>
            <Route path="/userlist">
              <UserListComponent />
            </Route>
            <Route path="/">
              <HomeComponent/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    // <div className="App">
    //   <div>app component</div>
    //   <JavaScriptComponent />

    //   <UserClassComponent />
    //   <UserListComponent userlist={userList} country={"INDIA"} />
    //   <button onClick={() => alertMe(userName)}>click me</button>

    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setUserName(e.target.value);
    //     }}
    //     defaultValue={userName}
    //   />
    //   {userName}
    // </div>
  );
}

export default App;
