import React, { useState } from "react";

import styled from "styled-components";

import Condition from "../components/Condition";
import InputNumber from "../components/InputNumber";
import Select from "../components/Select";

import {
  calculateType as calculateTypeConstant,
  calculateTypeOptions,
} from "../constants/calculate";
import { isFibonacci, isPrime } from "../utils/calculate";

const Container = styled.div`
  display: flex;
  x-justify-content: space-around;
  x-align-items: stretch;
  min-height: 100vh;

  @media (max-width: 600px) {
    overflow-x: auto;
  }
`;

const ColFirst = styled.div`
  width: 200px;
  flex: 0 0 200px;
  border-right: 2px solid black;
`;

const ColMiddle = styled.div`
  max-width: 100%;
  min-width: 100px;
  flex: auto;
  border-right: 2px solid black;
`;

const ColLast = styled.div`
  width: 300px;
  flex: 0 0 300px;
`;

type CalculateFormState = {
  number: number | string;
  calculateType: string;
};

const Calculate = () => {
  const [formState, setFormState] = useState<CalculateFormState>({
    number: "",
    calculateType: calculateTypeConstant.Prime,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (name: string, value: any) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <ColFirst>
          <InputNumber
            value={formState?.number}
            onChange={handleChange}
            name='number'
          />
        </ColFirst>
        <ColMiddle>
          <Select
            name='calculateType'
            options={calculateTypeOptions}
            value={formState?.calculateType}
            onChange={handleChange}
          />
        </ColMiddle>
        <ColLast>
          <Condition
            when={formState?.calculateType}
            is={calculateTypeConstant.Prime}>
            {typeof formState?.number === "number" &&
              String(isPrime(formState.number))}
          </Condition>

          <Condition
            when={formState?.calculateType}
            is={calculateTypeConstant.Fibonacci}>
            {typeof formState?.number === "number" &&
              String(isFibonacci(formState.number))}
          </Condition>
        </ColLast>
      </Container>
    </form>
  );
};

export default Calculate;
