import { useState } from "react";
import "../index.scss";

export enum LoginFormError {
  empty = "Please fill in missing fields",
  incorrectValues = "Please input correct email and password",
}

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
      {error ? (
        <div className="error-message">
          <p
            id="login-error"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {error}
          </p>
        </div>
      ) : null}
      <div className={`login-input-group ${errorClass}`}>
        <div
          className={`floating-input ${email ? "has-value" : ""} ${errorClass}`}
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={setEmail}
            required
            aria-invalid={!!error}
            aria-describedby={error ? "login-error" : undefined}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={`separator ${errorClass}`} />
        <div
          className={`floating-input ${
            password ? "has-value" : ""
          } ${errorClass} `}
        >
          <input
            type={inputPasswordType}
            name="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
            aria-invalid={!!error}
            aria-describedby={error ? "login-error" : undefined}
          />
          <label htmlFor="password">Password</label>
          <button
            className="material-symbols-outlined icon-button"
            onClick={handlePasswordVisibility}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            type="button"
          >
            {isPasswordVisible ? "visibility" : "visibility_off"}
          </button>
        </div>
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
