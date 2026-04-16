import { useState, useEffect } from "react";

function useLocalStorage(storageKey, defaultStorageValue) {
  const [storeValue, setStoreValue] = useState(() => {
    const isStoredKeyValue = localStorage.getItem(storageKey);

    return isStoredKeyValue
      ? JSON.parse(isStoredKeyValue)
      : defaultStorageValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storeValue));
  }, [storageKey, storeValue]);

  return [storeValue, setStoreValue];
}

export default useLocalStorage;
