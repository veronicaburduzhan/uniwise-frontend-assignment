import "../index.scss";
import { User } from "./List";
import { ReactComponent as AccountIcon } from "../assets/account_circle.svg";

interface ItemProps {
  item: User;
}

const Item = ({ item }: ItemProps) => {
  const { firstName, gender, age } = item;

  const capitalizedGender =
    gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

  return (
    <li>
      <div className="account-container">
        <AccountIcon className="account-icon" />
        <div className="name-age-container">
          <p className="name-text">{firstName}</p>
          <p>{age} years old</p>
        </div>
      </div>
      <div className="gender-tag">
        <p>{capitalizedGender}</p>
      </div>
    </li>
  );
};

export default Item;
