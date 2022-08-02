import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "oidc-react";

function App() {
  const auth = useAuth();

  if (auth.userData === null) {
    return <></>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You are signed in, {auth.userData?.profile.email}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
