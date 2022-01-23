import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (arg: T | ((param?: T) => T)) => void] => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        e.newValue && setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  const setValueInLocalStorage = (newValue: T | ((val?: T) => T)): void => {
    setValue((currentValue: T) => {
      const result: T =
        newValue instanceof Function ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInLocalStorage];
};
