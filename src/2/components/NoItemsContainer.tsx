import "../index.scss";

interface NoItemsContainerProps {
  text: string;
}

const NoItemsContainer = ({ text }: NoItemsContainerProps) => {
  return (
    <div className="list-container">
      <div className="no-items-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NoItemsContainer;
