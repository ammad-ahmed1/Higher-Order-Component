import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import SearchUsers from "./UsersList";

function App() {
  return (
    <>
      <SearchUsers />
      <TodoList />
    </>
  );
}

export default App;
