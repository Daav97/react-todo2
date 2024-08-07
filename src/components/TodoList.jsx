import CrossIcon from "./icons/CrossIcon.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden dark:bg-gray-700 transition-all duration-1000">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
