// Style
import "../index.scss";
import "./LoginInputForm.scss";

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
  const onClickForgotPassword = () => {
    alert(
      `Correct credentials: \nEmail: test@test.com \nPassword: test1 \nTry to use incorrect values to see error response`
    );
  };

  return (
    <div className="login-input-form-container">
      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : null}
      <div className={`login-input-group ${error ? "has-error" : ""}`}>
        <div
          className={`floating-input ${email ? "has-value" : ""} ${
            error ? "has-error" : ""
          }`}
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={setEmail}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={`separator ${error ? "has-error" : ""}`} />
        <div
          className={`floating-input ${password ? "has-value" : ""} ${
            error ? "has-error" : ""
          } `}
        >
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div>
        <p className="forgot-password-text" onClick={onClickForgotPassword}>
          Forgot password?
        </p>
      </div>
    </div>
  );
};
