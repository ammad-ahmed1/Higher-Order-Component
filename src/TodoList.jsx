import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      setTodos(json);
    };
    fetchTodos();
  }, []);
  let renderTodos = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <strong>{todo.name}</strong>
      </div>
    );
  });
  let filterTodos = todos
    .filter(({ title }) => {
      return title?.indexOf(term) >= 0;
    })
    .slice(0, 10)
    .map((todo) => {
      return (
        <div key={todo.userId}>
          <strong>{todo.title}</strong>
        </div>
      );
    });
  return (
    <div>
      <h2>Users </h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {/* <div>{renderUsers}</div> */}
      <div>{filterTodos}</div>
    </div>
  );
};

export default TodoList;
