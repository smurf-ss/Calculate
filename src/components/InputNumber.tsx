import React from "react";
import { convertInteger, isNumber } from "../utils/input-number";

type InputNumberProps = {
  name: string;
  value?: number | string;
  onChange: (name: string, value: number | string) => void;
};

const InputNumber: React.FC<InputNumberProps> = ({
  value = "",
  onChange,
  name,
}) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(
        evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        const value = evt.target.value;

        onChange(name, value);
      }}
      onKeyPress={(event: any) => {
        if (event.key === "Enter") {
          const value = event.target.value;

          if (!isNumber(value)) {
            onChange(name, "");
            return;
          }

          const integer = convertInteger(value);

          if (Math.sign(integer) === -1) {
            onChange(name, 1);
          } else {
            onChange(name, integer);
          }
        }
      }}
    />
  );
};

export default InputNumber;
