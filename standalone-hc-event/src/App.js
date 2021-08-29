import logo from './hchelmet.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./Styling.css";

import { Easy } from "./Easy";
import { Medium } from './Medium';
import { Hard } from './Hard';
import { Elite } from './Elite';
import { Master } from './Master';
import { Home } from './Home';
import { Navbar } from './Navbar';

import easy from "./taskjsons/easy.json";
import medium from "./taskjsons/medium.json";
import hard from "./taskjsons/hard.json";
import elite from "./taskjsons/elite.json";
import master from "./taskjsons/master.json";


function App() {

  const firstvisit = () => {
    if(localStorage.getItem("firstvisit") == null){
      localStorage.setItem("easyTasks", JSON.stringify(easy))
      localStorage.setItem("mediumTasks", JSON.stringify(medium))
      localStorage.setItem("hardTasks", JSON.stringify(hard))
      localStorage.setItem("eliteTasks", JSON.stringify(elite))
      localStorage.setItem("masterTasks", JSON.stringify(master))

      localStorage.setItem("firstvisit", "false");
    }
  }


  return (
    <div>
      {firstvisit()}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/easy">
            <Easy />
          </Route>
          <Route path="/medium">
            <Medium />
          </Route>
          <Route path="/hard">
            <Hard />
          </Route>
          <Route path="/elite">
            <Elite />
          </Route>
          <Route path="/master">
            <Master />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
