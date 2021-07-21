import React from "react";

type SelectProps = {
  name: string;
  options: { value: string; label: string }[];
  value?: number | string;
  onChange: (name: string, value: number | string) => void;
};

const Select: React.FC<SelectProps> = ({ name, options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(name, event.target.value);
      }}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
