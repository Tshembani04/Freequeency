import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Router>
          <NavBar />
            <Switch>
              <Route path="/Freequeency" exact>
                <Main/>
                {/* We then have the music controls ubderneath */}
                <div className="musicControler">
                  Mucic Controls
                </div>
              </Route>
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

//npm install gh-pages --save -dev
//git init
//git status
//git add .
//git commit -m 'deploy my react app to github pages'
// npm run deploy
// git push -u origin master

//SCSS
// npm  install node-sass --save
