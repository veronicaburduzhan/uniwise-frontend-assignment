import Item from "./Item";
import "../index.scss";
import NoItemsContainer from "./NoItemsContainer";

export type User = {
  id: number;
  firstName: string;
  age: number;
  gender: string;
};

interface ListProps {
  items: User[];
  loading: boolean;
  error: string;
}

const List = ({ items, loading, error }: ListProps) => {
  if (loading) return <NoItemsContainer text="Loading users..." />;

  if (error)
    return (
      <NoItemsContainer text="Oops! Something went wrong. Please, try again." />
    );

  if (!items || !items.length)
    return <NoItemsContainer text="No users found" />;

  return (
    <div className="list-container">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
