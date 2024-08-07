const TodoFilter = ({ changeFilter, filter }) => {
  const activeFilterStyle = "text-blue-600 dark:text-violet-400";
  const inactiveFilterStyle =
    "hover:text-blue-600 text-gray-400 dark:hover:text-violet-400";

  return (
    <section className="container mx-auto mt-8 ">
      <div className="bg-white flex justify-center rounded-md p-4 gap-4 dark:bg-gray-700 transition-all duration-1000">
        <button
          onClick={() => changeFilter("all")}
          className={`${
            filter === "all" ? activeFilterStyle : inactiveFilterStyle
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${
            filter === "active" ? activeFilterStyle : inactiveFilterStyle
          }`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${
            filter === "completed" ? activeFilterStyle : inactiveFilterStyle
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
