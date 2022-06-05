import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => dispatch(addTodo(text));

  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="app">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
