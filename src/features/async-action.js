import React, { useState } from "react";

const AsyncAction = ({ listTodos }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const todos = await listTodos();
    setTodos(todos);
  };

  return (
    <div>
      <button
        type="button"
        onClick={fetchTodos}
        aria-label="Get All Todos"
      >
        Get All Todos
      </button>
      {todos && (
        <div className="todos-container" data-testid="todos-container">
          {todos.map((todo) => (
            <div
              key={todo.id}
              aria-label="Todo Title"
              data-testid="todo-item"
              className="todo-item"
            >
              {todo.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AsyncAction;