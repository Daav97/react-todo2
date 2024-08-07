import React from "react";
import CheckIcon from "./icons/CheckIcon.jsx";
import CrossIcon from "./icons/CrossIcon.jsx";

//forwardref permite que el componente padre tenga acceso a la referencia de un componente hijo
const TodoItem = React.forwardRef(
  ({ todo, removeTodo, updateTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
      <article
        {...props}
        ref={ref}
        className="flex gap-4 border-b-gray-400 border-b"
      >
        <button
          className={`flex w-5 h-5 flex-none rounded-full border-2 justify-center items-center ${
            completed &&
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <CheckIcon />}
        </button>
        <p
          className={`text-gray-600 grow dark:text-gray-400 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
          <CrossIcon />
        </button>
      </article>
    );
  }
);
export default TodoItem;
