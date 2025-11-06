import { useState } from "react";
import "../index.scss";
import Input from "./Input";
import { TodoType } from "../types";

interface ItemTodoProps {
  item: TodoType;
  onDelete: (id: number) => void;
  onEdit: (
    id: number,
    updatedTask: string,
    updatedStatus: TodoType["status"]
  ) => void;
}

const ItemTodo = ({ item, onDelete, onEdit }: ItemTodoProps) => {
  const [todoToEdit, setTodoToEdit] = useState<string>(item.task);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { id, task, status } = item;

  const doneTodo = status === "completed";

  const newStatus = status === "completed" ? "active" : "completed";

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent
  ) => {
    e.stopPropagation();
    onEdit(id, task, newStatus);
  };

  const handleOnEdit = (value: string) => {
    const formatted = value.trim();
    if (!formatted) return;

    onEdit(id, formatted, status);
    setIsEditing(false);
    setTodoToEdit(formatted);
  };

  if (isEditing)
    return (
      <Input
        value={todoToEdit}
        onChange={setTodoToEdit}
        onSubmit={handleOnEdit}
        onClose={() => setIsEditing(false)}
        onBlur={() => setIsEditing(false)}
        submitIcon="check"
      />
    );

  return (
    <li>
      <div className="checkbox-input" onClick={handleStatusChange}>
        <span className="material-symbols-outlined small-icon">
          {doneTodo ? `check_box` : `check_box_outline_blank`}
        </span>
        <label
          className={`checkbox-input ${doneTodo ? "checked" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            name="todo"
            checked={doneTodo}
            onChange={handleStatusChange}
          />
          {task}
        </label>
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className="naked-button"
          onClick={() => setIsEditing(true)}
        >
          <span className="material-symbols-outlined small-icon">
            edit_square
          </span>
        </button>
        <button
          type="button"
          className="naked-button"
          onClick={() => onDelete(id)}
        >
          <span className="material-symbols-outlined small-icon">delete</span>
        </button>
      </div>
    </li>
  );
};

export default ItemTodo;
