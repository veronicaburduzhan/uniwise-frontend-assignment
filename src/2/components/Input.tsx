import "../index.scss";

interface InputProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ searchTerm, onChange }: InputProps) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder="Search users..."
        name="search"
        id="search"
      />
    </div>
  );
};

export default Input;
