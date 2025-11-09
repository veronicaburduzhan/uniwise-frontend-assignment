import { useState } from "react";
import "../index.scss";
import ErrorMessage from "./ErrorMessage";
import FloatingInput from "./FloatingInput";

interface LoginInputFormProps {
  email: string;
  password: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

export const LoginInputForm = ({
  email,
  password,
  setEmail,
  setPassword,
  error,
}: LoginInputFormProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [inputPasswordType, setInputPasswordType] = useState("password");

  const errorClass = error ? "has-error" : "";

  const onClickForgotPassword = () => {
    alert(
      `Correct credentials: \nEmail: test@test.com \nPassword: test1 \nTry to use incorrect values to see error response`
    );
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);

    if (inputPasswordType === "password") return setInputPasswordType("text");

    return setInputPasswordType("password");
  };

  return (
    <div
      className="login-input-form-container"
      role="form"
      aria-labelledby="login-form-title"
    >
      <ErrorMessage error={error} />
      <div className={`login-input-group ${errorClass}`}>
        <FloatingInput
          value={email}
          onChange={setEmail}
          hasError={!!error}
          inputType="email"
          label="Email"
        />
        <div className={`separator ${errorClass}`} />
        <FloatingInput
          value={password}
          onChange={setPassword}
          hasError={!!error}
          inputType={inputPasswordType}
          label="Password"
          children={
            <button
              className="material-symbols-outlined icon-button"
              onClick={handlePasswordVisibility}
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              type="button"
            >
              {isPasswordVisible ? "visibility" : "visibility_off"}
            </button>
          }
        />
      </div>
      <div>
        <button
          className="text-button"
          onClick={onClickForgotPassword}
          type="button"
        >
          Forgot password?
        </button>
      </div>
      <div>
        <label className="remember-me-checkbox">
          <input type="checkbox" id="remember-me" name="remember" />
          Remember me?
        </label>
      </div>
    </div>
  );
};
