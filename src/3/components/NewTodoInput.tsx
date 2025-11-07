import { useState } from "react";
import "../index.scss";
import Input from "./Input";

interface NewTodoInputProps {
  onAdd: (value: string) => void;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const NewTodoInput = ({
  onAdd,
  isVisible,
  setIsVisible,
}: NewTodoInputProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = (value: string) => {
    const formatted = value.trim();
    if (!formatted) return;

    onAdd(formatted);
    setIsVisible(false);
    setNewTodo("");
  };

  const handleOnClose = () => {
    setIsVisible(false);
    setNewTodo("");
  };

  if (!isVisible) return <></>;

  return (
    <Input
      value={newTodo}
      onChange={setNewTodo}
      onSubmit={handleSubmit}
      onClose={handleOnClose}
      inputAriaLabel="Enter new todo"
      submitAriaLabel="Add todo"
      cancelAriaLabel="Cancel adding todo"
    />
  );
};

export default NewTodoInput;
