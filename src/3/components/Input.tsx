import "../index.scss";
import IconButton, { IconButtonProps } from "./IconButton";

interface ItemProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onClose: () => void;
  onBlur?: () => void;
  submitIcon?: string;
  cancelIcon?: string;
  submitAriaLabel?: string;
  cancelAriaLabel?: string;
  inputAriaLabel?: string;
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
  submitAriaLabel = "Add todo",
  cancelAriaLabel = "Cancel",
  inputAriaLabel = "New todo",
}: ItemProps) => {
  const todoActions: IconButtonProps[] = [
    {
      iconName: submitIcon,
      buttonType: "submit",
      ariaLabel: submitAriaLabel,
    },
    {
      iconName: cancelIcon,
      onClick: onClose,
      ariaLabel: cancelAriaLabel,
    },
  ];

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
          aria-label={inputAriaLabel}
          autoFocus
        />
        <div className="todo-actions" role="group" aria-label="Input actions">
          {todoActions.map((action) => (
            <IconButton
              key={`${action.iconName}-${action.ariaLabel}`}
              iconName={action.iconName}
              buttonType={action.buttonType}
              onClick={action?.onClick}
              ariaLabel={action.ariaLabel}
            />
          ))}
        </div>
      </form>
    </li>
  );
};

export default Input;
