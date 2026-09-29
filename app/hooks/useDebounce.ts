import { useEffect, useState } from "react";

export function useDebounse(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(
    function () {
      const timer = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
      return function () {
        clearTimeout(timer);
      };
    },
    [value, delay],
  );
  return debounceValue;
}
