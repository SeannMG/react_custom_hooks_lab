import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    if (stored !== null) {
      return stored;
    }

    return initialValue ?? null;
  });

  useEffect(() => {
    if (value === undefined) return;
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}