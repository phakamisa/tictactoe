import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavSection from "./Layout/NavSection";
import Layout from "./Layout/Layout";
import Footer from "./Layout/Footer";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render([<App />, <Game />], document.getElementById("root"));

const Root = (
  <>
    <NavSection />
    <Layout />
    <Footer />
  </>
);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
