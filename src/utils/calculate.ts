export const isPrime = (number: number) => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return number > 1;
};

export const isFibonacci = (number: number, count = 1, last = 0): boolean => {
  if (count < number) {
    return isFibonacci(number, count + last, count);
  }
  if (count === number) {
    return true;
  }
  return false;
};
