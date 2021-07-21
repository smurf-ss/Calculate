import React from "react";

import { Form } from "react-final-form";

import InputNumber from "../components/InputNumber";
import Select from "../components/Select";

import { calculateType, calculateTypeOptions } from "../constants/calculate";

const CalculateView = () => {
  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        calculateType: calculateType.Prime,
      }}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputNumber name='number' />
            <Select name='calculateType' options={calculateTypeOptions} />
          </form>
        );
      }}
    </Form>
  );
};

const Calculate = () => {
  return <CalculateView />;
};

export default Calculate;
