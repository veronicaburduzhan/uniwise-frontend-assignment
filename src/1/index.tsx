import { useState } from "react";
import "./index.scss";
import { LoginInputForm } from "./components/LoginInputForm";
import AlternativeLogin from "./components/AlternativeLogin";
import Separator from "./components/Separator";
import { LoginFormError } from "./components/ErrorMessage";

// TEST VALUES TO SEE FORM UI RESPONSES
const EMAIL = "test@test.com";
const PASSWORD = "test1";

const Task1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginFormError | null>(null);

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
    <main id="task-1">
      <div className="main-container">
        <header className="header-container">
          <h1 className="header-text">Log in</h1>
        </header>
        <form onSubmit={onSubmit} className="form-container" noValidate>
          <p className="form-header">Welcome back!</p>
          <AlternativeLogin />
          <Separator />
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
    </main>
  );
};

export default Task1;
