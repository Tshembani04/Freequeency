import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="upperNav">Dummy Text</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
            <img
                src="https://images.unsplash.com/photo-1559281575-9990a6b02a4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
