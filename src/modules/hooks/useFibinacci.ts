import { useState } from "react";

export function useFibonacci() {
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;

    let previousNumber = 0,
      currentValue = 1,
      pivot = 0;

    for (let fibonacciIndex = 2; fibonacciIndex <= n; fibonacciIndex++) {
      pivot = currentValue + previousNumber;
      previousNumber = currentValue;
      currentValue = pivot;
    }
    return currentValue;
  };

  const fibonacciCalculation = (n: number) => {
    setIsCalculating(true);

    const fibResult = fibonacci(n);
    setResult(fibResult);
    setIsCalculating(false);
  };

  return { result, isCalculating, fibonacciCalculation };
}
