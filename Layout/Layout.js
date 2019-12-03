import React from "react";
import Game from "../Game/Game";
import TodoList from "../Todo/TodoList";
import Header from "./Header";
import App from "../App";

const Layout = () => {
  return (
    <>
      <Header />
      <Game />
      <App />
      <TodoList />
    </>
  );
};

export default Layout;
