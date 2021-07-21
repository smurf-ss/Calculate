export const isNumber = (value: string) => {
  const newValue = parseFloat(value);

  return !Number.isNaN(newValue);
};

export const convertInteger = (value: any) => Math.round(value);
