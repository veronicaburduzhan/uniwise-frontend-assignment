import React from "react";

type Option<T extends string> = { label: string; value: T };

type SelectMenuProps<T extends string> = {
  name: string;
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  className?: string;
};

export default function SelectMenu<T extends string>({
  name,
  value,
  onChange,
  options,
  className,
}: SelectMenuProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <div className={className}>
      <select name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
