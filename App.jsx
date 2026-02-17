import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import TodoCount from "./components/TodoCount";

function App() {
  // Main todo state
  const [todos, setTodos] = useState([]);

  // Filter state
  const [filter, setFilter] = useState("all"); // all | active | completed

  // Add new todo
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  // Toggle complete/incomplete
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter logic
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <TodoCount todos={todos} />
    </div>
  );
}

export default App;
