import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <NavBar />
        {/* We then have the music controls ubderneath */}
        <div className="musicControler">Mucic Controls</div>
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
