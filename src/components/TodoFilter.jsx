const TodoFilter = ({ changeFilter, filter }) => {
  const activeFilterStyle = "text-blue-600";
  const inactiveFilterStyle = "hover:text-blue-600";

  return (
    <section className="container mx-auto mt-8">
      <div className="bg-white flex justify-center rounded-md p-4 gap-4">
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
