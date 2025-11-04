// Style
import "../index.scss";
import "./LoginInputForm.scss";

interface LoginInputFormProps {
  email: string;
  password: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

export const LoginInputForm = ({
  email,
  password,
  setEmail,
  setPassword,
  hasError,
}: LoginInputFormProps) => {
  return (
    <div className="login-input-form-container">
      <div className={`login-input-group ${hasError ? "has-error" : ""}`}>
        <div
          className={`floating-input ${email ? "has-value" : ""} ${
            hasError ? "has-error" : ""
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
        <div className={`separator ${hasError ? "has-error" : ""}`}></div>
        <div
          className={`floating-input ${password ? "has-value" : ""} ${
            hasError ? "has-error" : ""
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
      <div className={`error-message ${hasError ? "has-error" : ""}`}>
        <p>Incorrect email or password</p>
      </div>
    </div>
  );
};
