import { useState } from 'react';

/**
 * Reference: https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
 *
 * Syncs up the state with local storage
 *
 * @param keyName The key of the item to store
 * @param defaultValue Default value of this item
 * @returns A useState containing the value of the item in local storage
 */
export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
