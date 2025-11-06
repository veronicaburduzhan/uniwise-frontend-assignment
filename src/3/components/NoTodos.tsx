import "../index.scss";

interface NoTodoProps {
  text: string;
}

const NoTodo = ({ text }: NoTodoProps) => {
  return (
    <div className="list-container">
      <div>
        <p>No todos</p>
      </div>
    </div>
  );
};

export default NoTodo;
