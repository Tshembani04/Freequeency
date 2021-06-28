import React from "react";
import "./App.scss";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./components/Search";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div className="outerWrap">
        <div className="App">
          <Switch>
            <Route path="/" exact >
            <Banner/>
              <NavBar />
              {/* We then have the music controls ubderneath */}
              <div className="musicControler">Mucic Controls</div>            
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
    
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
