const TodoComputed = ({ todos, computedItemsLeft, clearCompletes }) => {
  return (
    <section
      className={`py-4 px-4 flex justify-between bg-white  ${
        todos.length > 0 ? "rounded-b-md" : "rounded-md"
      }`}
    >
      <span className="text-gray-400">
        {computedItemsLeft > 0 ? computedItemsLeft : "No"} items left
      </span>
      <button className="text-gray-400" onClick={clearCompletes}>
        Clear completed
      </button>
    </section>
  );
};
export default TodoComputed;
