import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const cons = () => {
    console.log("todos", todos);
  };
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="app">
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={addTodo}>add todo</button>
        <button onClick={cons}>cons</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <span
              onClick={() => {
                removeTodo(todo.id);
              }}
              className="delete"
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
