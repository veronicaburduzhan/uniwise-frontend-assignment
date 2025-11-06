import "../index.scss";

interface ItemProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onClose: () => void;
  onBlur?: () => void;
  submitIcon?: string;
  cancelIcon?: string;
}

const Input = ({
  id = "newTodo",
  value,
  onChange,
  onSubmit,
  onClose,
  onBlur,
  submitIcon = "add_2",
  cancelIcon = "close",
}: ItemProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleFormBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    onBlur?.();
  };

  return (
    <li>
      <form onSubmit={handleSubmit} onBlur={handleFormBlur}>
        <input
          className="new-todo-input"
          name={id}
          id={id}
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="What should be done?"
          autoFocus
        />
        <div className="todo-actions">
          <button type="submit" className="naked-button">
            <span className="material-symbols-outlined small-icon">
              {submitIcon}
            </span>
          </button>
          <button type="button" className="naked-button" onClick={onClose}>
            <span className="material-symbols-outlined small-icon">
              {cancelIcon}
            </span>
          </button>
        </div>
      </form>
    </li>
  );
};

export default Input;
