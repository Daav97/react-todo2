import CrossIcon from "./icons/CrossIcon.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos }) => {
  return (
    <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
