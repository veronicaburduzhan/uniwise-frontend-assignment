import "../index.scss";
import Input from "./Input";
import SelectMenu from "./SelectMenu";

export type GenderFilter = "male" | "female" | "default";

export type SortOrder = "default" | "asc" | "desc";

interface ToolbarProps {
  searchTerm: string;
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  genderFilter: GenderFilter;
  setGenderFilter: (value: GenderFilter) => void;
  sortOrder: SortOrder;
  setSortOrder: (value: SortOrder) => void;
}

const Toolbar = ({
  searchTerm,
  onSearchTermChange,
  genderFilter,
  setGenderFilter,
  sortOrder,
  setSortOrder,
}: ToolbarProps) => {
  return (
    <nav className="toolbar">
      <Input searchTerm={searchTerm} onChange={onSearchTermChange} />
      <div className="toolbar-select-menu">
        <SelectMenu<GenderFilter>
          name="filter"
          value={genderFilter}
          onChange={setGenderFilter}
          options={[
            { label: "Gender", value: "default" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          className="select-wrapper"
          aria-label="Filter by gender"
        />
        <SelectMenu<SortOrder>
          name="sort"
          value={sortOrder}
          onChange={setSortOrder}
          options={[
            { label: "Sort by", value: "default" },
            { label: "A–Z", value: "asc" },
            { label: "Z–A", value: "desc" },
          ]}
          className="select-wrapper"
          aria-label="Sort by name"
        />
      </div>
    </nav>
  );
};

export default Toolbar;
