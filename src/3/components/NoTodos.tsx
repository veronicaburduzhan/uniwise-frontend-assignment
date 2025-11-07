import "../index.scss";

const NoTodo = () => {
  return (
    <div className="list-container">
      <div
        className="empty-list-text"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-label="No todos left"
      >
        <p className="title">Congratulations 🎊</p>
        <p>You’ve finished all of today’s tasks!</p>
      </div>
    </div>
  );
};

export default NoTodo;
