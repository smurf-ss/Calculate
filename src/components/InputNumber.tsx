import React from "react";

import { useField } from "react-final-form";

import { InputNumber as InputNumberAntd } from "antd";

type InputNumberProps = {
  name: string;
};

const InputNumber: React.FC<InputNumberProps> = ({ name }) => {
  const field = useField<number>(name);

  return (
    <InputNumberAntd
      {...field.input}
      onChange={(value: number) => {
        const integer = Math.round(value);
        if (Math.sign(integer) === -1) {
          field.input.onChange(1);
        } else {
          field.input.onChange(integer);
        }
      }}
    />
  );
};

export default InputNumber;
