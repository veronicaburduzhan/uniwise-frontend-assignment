// Style
import { useState } from "react";
import "./index.scss";
import { LoginFormError, LoginInputForm } from "./components/LoginInputForm";
import { ReactComponent as GoogleIcon } from "./assets/google-icon.svg";
import { ReactComponent as AppleIcon } from "./assets/apple-icon.svg";
import { ReactComponent as FacebookIcon } from "./assets/facebook-icon.svg";

// TEST VALUES TO SEE FORM UI RESPONSES
const EMAIL = "test@test.com";
const PASSWORD = "test1";

type LoginButton = {
  label: string;
  icon: JSX.Element;
};

const Task1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginFormError | null>(null);

  const alternativeLoginButtons: LoginButton[] = [
    {
      label: "Google",
      icon: <GoogleIcon className="social-media-icon" />,
    },
    {
      label: "Facebook",
      icon: <FacebookIcon className="social-media-icon" />,
    },
    {
      label: "Apple",
      icon: <AppleIcon className="social-media-icon" />,
    },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setError(null);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) return setError(LoginFormError.empty);

    if (email !== EMAIL || password !== PASSWORD)
      return setError(LoginFormError.incorrectValues);

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <div className="main-container">
        <header className="header-container">
          <h1 className="header-text">Log in</h1>
        </header>
        <form onSubmit={onSubmit} className="form-container" noValidate>
          <p className="form-header">Welcome back!</p>
          <div className="alternative-login-container">
            {alternativeLoginButtons.map((method, i) => (
              <button
                key={i}
                className="secondary-button"
                type="button"
                onClick={() => {}}
              >
                {method.icon}Continue with {method.label}
              </button>
            ))}
          </div>
          <div className="separator-container">
            <div className="separator" />
            <span>or</span>
            <div className="separator" />
          </div>
          <LoginInputForm
            email={email}
            password={password}
            setEmail={handleEmailChange}
            setPassword={handlePasswordChange}
            error={error}
          />
          <button className="primary-button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Task1;
