import { useSyncExternalStore, useCallback } from "react";

const useSessionStorage = <T,>(key: string, initialValue: T) => {
  // セッションストレージから値を読み込む
  const getStoredValue = useCallback(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  }, [key, initialValue]);

  // React に外部データソースの変更を通知するための関数
  const subscribe = useCallback(
    (notifyChange: () => void) => {
      const handleChange = (event: StorageEvent) => {
        if (event.key === key) {
          notifyChange();
        }
      };
      window.addEventListener("storage", handleChange);
      return () => window.removeEventListener("storage", handleChange);
    },
    [key]
  );

  // useSyncExternalStore を使用して、セッションストレージの値と同期
  const value = useSyncExternalStore(subscribe, getStoredValue);

  // セッションストレージに値を設定する関数
  const setValue = useCallback(
    (newValue: T) => {
      const stringifiedValue = JSON.stringify(newValue);
      sessionStorage.setItem(key, stringifiedValue);
      // subscribeを通じて変更を手動で通知する場合、ここに処理を追加する
    },
    [key]
  );

  return [value, setValue];
};

export { useSessionStorage };
