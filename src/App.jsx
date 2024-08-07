import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

//Algoritmo de reacomodo de array:
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    setTodos((prevTodos) =>
      reorder(prevTodos, source.index, destination.index)
    );
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
    bg-no-repeat 
    bg-contain 
    min-h-screen 
    bg-gray-200 
    dark:bg-gray-800 
    transition-all 
    duration-1000
    "
    >
      <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos(todos)}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>

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
