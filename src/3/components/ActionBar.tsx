import "../index.scss";
import { TodoFilter } from "../types";

interface ActionBarProps {
  filter: TodoFilter;
  filterTodos: (value: TodoFilter) => void;
  onOpenAddTodo: () => void;
}

const ActionBar = ({ filter, filterTodos, onOpenAddTodo }: ActionBarProps) => {
  const filterActions = [
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
    { value: "all", label: "All todos" },
  ];

  const handleFilter = (value: TodoFilter) => {
    filterTodos(value);
  };

  return (
    <div className="action-bar-container">
      <button
        type="button"
        className="primary-button material-symbols-outlined"
        onClick={onOpenAddTodo}
        aria-label="Add a new todo"
        title="Add a new todo"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          add_2
        </span>
      </button>
      <div
        className="filter-status-container"
        role="group"
        aria-label="Filter todos"
      >
        {filterActions.map((action) => (
          <button
            type="button"
            className={`filter-button ${
              filter === action.value ? `checked` : ``
            }`}
            key={action.value}
            onClick={() => handleFilter(action.value as TodoFilter)}
            aria-pressed={filter === action.value}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionBar;
