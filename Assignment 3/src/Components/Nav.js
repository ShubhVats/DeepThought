import React from "react";

export default function Nav() {
  return (
    <div>
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i
            className="fa fa-shopping-basket fa-6"
            style={{ color: "white" }}
            aria-hidden="true"
          ></i>
          <h1 className="App-title" style={{ color: "white" }}>
            Wizard App
          </h1>
          <b>
            <div
              style={{
                display: "flex",
                marginTop: "-1px",
                marginLeft: "-25px",
              }}
            >
              <ul>Home</ul>
              <ul>Sample</ul>
              <ul>About</ul>
            </div>
          </b>
        </div>
      </header>
    </div>
  );
}
