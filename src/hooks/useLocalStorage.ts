import { useSyncExternalStore } from 'react';

let listeners: (() => void)[] = [];

export const useLocalStorage = (
  key: string
): [string | null, (newValue: string) => void] => {
  const value = useSyncExternalStore(subscribe, () => getSnapshot(key));

  const setValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    emitChange();
  };

  return [value, setValue];
};

const getSnapshot = (key: string) => {
  return localStorage.getItem(key);
};

const subscribe = (listener: () => void) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter(li => li !== listener);
  };
};

const emitChange = () => {
  listeners.forEach(listener => {
    listener();
  });
};
