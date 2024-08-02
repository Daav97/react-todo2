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
    completed: false,
  },
  {
    id: 2,
    title: "Titulo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Titulo 3",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-200">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList todos={todos} />

        <TodoComputed />

        <TodoFilter />
      </main>

      <footer className="text-center mt-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
export default App;
