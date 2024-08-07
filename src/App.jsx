import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";

const initialStateTodo = [
  {
    id: 1,
    title: "Titulo 1",
    completed: true,
  },
  {
    id: 2,
    title: "Titulo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Titulo 3",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-200 dark:bg-gray-800">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos(todos)}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed
          todos={todos}
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8 text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
export default App;
