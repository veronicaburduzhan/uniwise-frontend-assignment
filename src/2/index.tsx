import { useEffect, useMemo, useState } from "react";
import "./index.scss";

import List, { User } from "./components/List";
import Input from "./components/Input";
import SelectMenu from "./components/SelectMenu";

export type GenderFilter = "male" | "female" | "default";

export type SortOrder = "default" | "asc" | "desc";

const Task2 = () => {
  const [apiUsers, setApiUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("default");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setApiUsers(data.users))
      .catch((err: string) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const userList = useMemo(() => {
    let list = apiUsers;

    // Search by search term
    const term = searchTerm.trim().toLowerCase();
    if (term) {
      list = list.filter((item) => item.firstName.toLowerCase().includes(term));
    }

    // Filter by gender
    if (genderFilter !== "default") {
      list = list.filter(
        (item) => item.gender.toLowerCase() === genderFilter.toLowerCase()
      );
    }

    // Sort by firstName
    if (sortOrder !== "default") {
      const sorted = [...list].sort((a, b) =>
        a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
      );
      if (sortOrder === "desc") sorted.reverse();
      list = sorted;
    }

    return list;
  }, [apiUsers, searchTerm, genderFilter, sortOrder]);

  return (
    <div id="task-2">
      <div className="main-container">
        <div className="toolbar">
          <Input searchTerm={searchTerm} onChange={handleInputChange} />
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
        </div>
        <List items={userList} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default Task2;
