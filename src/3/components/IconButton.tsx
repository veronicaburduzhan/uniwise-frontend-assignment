import "../index.scss";

export interface IconButtonProps {
  iconName: string;
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  ariaLabel?: string;
}

const IconButton = ({
  iconName,
  onClick,
  buttonType = "button",
  ariaLabel,
}: IconButtonProps) => {
  return (
    <button
      type={buttonType}
      className="naked-button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <span className="material-symbols-outlined small-icon" aria-hidden="true">
        {iconName}
      </span>
    </button>
  );
};

export default IconButton;
