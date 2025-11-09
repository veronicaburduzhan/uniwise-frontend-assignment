import { ReactNode } from "react";
import "../index.scss";

interface FloatingInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  inputType: React.InputHTMLAttributes<HTMLButtonElement>["type"];
  label: string;
  children?: ReactNode;
}

const FloatingInput = ({
  value,
  onChange,
  hasError,
  children,
  inputType,
  label,
}: FloatingInputProps) => {
  const errorClass = hasError ? "has-error" : "";

  return (
    <div
      className={`floating-input ${value ? "has-value" : ""} ${errorClass} `}
    >
      <input
        type={inputType}
        name={value}
        id={value}
        value={value}
        onChange={onChange}
        required
        aria-invalid={hasError}
        aria-describedby={hasError ? "login-error" : undefined}
      />
      <label htmlFor={value}>{label}</label>
      {children}
    </div>
  );
};

export default FloatingInput;
