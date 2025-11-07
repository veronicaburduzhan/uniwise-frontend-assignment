import "../index.scss";
import { TodoType } from "../types";
import ItemTodo from "./ItemTodo";
import NoTodo from "./NoTodos";

interface ListTodoProps {
  items: TodoType[];
  onDelete: (id: number) => void;
  onEdit: (
    id: number,
    updatedTask: string,
    updatedStatus: TodoType["status"]
  ) => void;
}

const ListTodo = ({ items, onDelete, onEdit }: ListTodoProps) => {
  if (!items || !items.length) return <NoTodo />;

  return (
    <div className="list-container" role="region" aria-label="Todo list">
      <ul
        aria-label={`Todo items (${items.length})`}
        aria-live="polite"
        aria-relevant="additions removals"
      >
        {items.map((item) => (
          <ItemTodo
            item={item}
            key={item.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
