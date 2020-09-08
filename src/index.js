import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/organisms/Header.jsx";
import "./main.css";

const App = () => (
  <div className="App">
    <Routes Header={<Header />} />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
