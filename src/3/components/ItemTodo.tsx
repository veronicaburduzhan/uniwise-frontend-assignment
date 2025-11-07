import { useState } from "react";
import "../index.scss";
import Input from "./Input";
import { TodoType } from "../types";
import IconButton, { IconButtonProps } from "./IconButton";

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

  const newStatus = doneTodo ? "active" : "completed";

  const todoActions: IconButtonProps[] = [
    {
      iconName: "edit_square",
      onClick: () => setIsEditing(true),
      ariaLabel: `Edit todo: ${task}`,
    },
    {
      iconName: "delete",
      onClick: () => onDelete(id),
      ariaLabel: `Delete todo: ${task}`,
    },
  ];

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
        submitAriaLabel="Save changes"
        cancelAriaLabel="Cancel editing"
        inputAriaLabel="Edit todo"
      />
    );

  return (
    <li>
      <div className="checkbox-input" onClick={handleStatusChange}>
        <span
          className="material-symbols-outlined small-icon"
          aria-hidden="true"
        >
          {doneTodo ? `check_box` : `check_box_outline_blank`}
        </span>
        <label
          className={`checkbox-input ${doneTodo ? "checked" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            name={`todo-${id}`}
            checked={doneTodo}
            onChange={handleStatusChange}
            aria-label={
              doneTodo
                ? `Mark "${task}" as active`
                : `Mark "${task}" as completed`
            }
          />
          {task}
        </label>
      </div>
      <div className="todo-actions" role="group" aria-label="Item actions">
        {todoActions.map((action) => (
          <IconButton
            key={`${action.iconName}-${id}`}
            iconName={action.iconName}
            onClick={action.onClick}
            ariaLabel={action.ariaLabel}
          />
        ))}
      </div>
    </li>
  );
};

export default ItemTodo;
