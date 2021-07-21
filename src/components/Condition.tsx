import React from "react";

type ConditionProps = { when: string; is: string };

const Condition: React.FC<ConditionProps> = ({ when, is, children }) => {
  return <>{when === is && children}</>;
};

export default Condition;
