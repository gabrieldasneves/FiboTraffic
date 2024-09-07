import { useState } from "react";

export function useFibonacci() {
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibonacciCalculation = (n: number) => {
    setIsCalculating(true);
    setTimeout(() => {
      const fibResult = fibonacci(n);
      setResult(fibResult);
      setIsCalculating(false);
    }, 1500);
  };

  return { result, isCalculating, fibonacciCalculation };
}
