import "../index.scss";

export enum LoginFormError {
  empty = "Please fill in missing fields",
  incorrectValues = "Please input correct email and password",
}

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return <></>;

  return (
    <div className="error-message">
      <p id="login-error" role="alert" aria-live="assertive" aria-atomic="true">
        {error}
      </p>
    </div>
  );
};

export default ErrorMessage;
