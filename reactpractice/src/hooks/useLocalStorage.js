// src/hooks/useLocalStorage.js
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Check if there's any saved data in localStorage
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : initialValue;

  const [value, setValue] = useState(initial);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
