// Style
import { useState } from "react";
import "./index.scss";
import { LoginInputForm } from "./LoginInput/LoginInputForm";

// TEST VALUES TO SEE FORM UI RESPONSES
const EMAIL = "test@test.com";
const PASSWORD = "test1";

const Task1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== EMAIL || password !== PASSWORD) return setHasError(true);
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  const onClickForgotPassword = () => {
    alert(
      `Correct credentials: \nEmail: test@test.com \nPassword: test1 \nTry to use incorrect values to see error response`
    );
  };

  return (
    <div id="task-1">
      <div className="main-container">
        <header className="header-container">
          <h1 className="header-text">Log in</h1>
        </header>
        <form onSubmit={onSubmit} className="form-container">
          <p className="form-header">Welcome back!</p>
          <LoginInputForm
            email={email}
            password={password}
            setEmail={(e) => {
              setEmail(e.currentTarget.value);
              setHasError(false);
            }}
            setPassword={(e) => {
              setPassword(e.currentTarget.value);
              setHasError(false);
            }}
            hasError={hasError}
          />
          <div className="submit-button-container">
            <button className="primary-button">Continue</button>
            <button
              className="secondary-button"
              onClick={onClickForgotPassword}
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task1;
