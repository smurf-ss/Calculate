import React from "react";

import { useField } from "react-final-form";

import { Select as SelectAntd } from "antd";

const { Option } = SelectAntd;

type SelectProps = {
  name: string;
  options: { value: string; label: string }[];
};

const Select: React.FC<SelectProps> = ({ name, options }) => {
  const field = useField<number>(name);
  return (
    <SelectAntd {...field.input}>
      {options.map(({ value, label }) => (
        <Option value={value} key={value}>
          {label}
        </Option>
      ))}
    </SelectAntd>
  );
};

export default Select;
