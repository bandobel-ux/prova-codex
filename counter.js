export const STORAGE_KEY = "prova-codex-counter";

export function readCounter(storage) {
  const savedValue = Number.parseInt(storage.getItem(STORAGE_KEY) ?? "0", 10);
  return Number.isSafeInteger(savedValue) && savedValue >= 0 ? savedValue : 0;
}

export function saveCounter(storage, value) {
  storage.setItem(STORAGE_KEY, String(value));
  return value;
}
