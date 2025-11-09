import "../index.scss";
import { ReactComponent as GoogleIcon } from "../assets/google-icon.svg";
import { ReactComponent as AppleIcon } from "../assets/apple-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook-icon.svg";

type LoginButton = {
  label: string;
  icon: JSX.Element;
};

const AlternativeLogin = () => {
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

  return (
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
  );
};

export default AlternativeLogin;
