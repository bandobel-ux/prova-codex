import assert from "node:assert/strict";
import test from "node:test";
import { readCounter, saveCounter, STORAGE_KEY } from "./counter.js";

function createStorage(initialValue = null) {
  const values = new Map(initialValue === null ? [] : [[STORAGE_KEY, initialValue]]);
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test("il contatore parte da zero senza un valore salvato", () => {
  assert.equal(readCounter(createStorage()), 0);
});

test("il contatore recupera il valore salvato", () => {
  assert.equal(readCounter(createStorage("12")), 12);
});

test("valori non validi vengono riportati a zero", () => {
  assert.equal(readCounter(createStorage("non-un-numero")), 0);
  assert.equal(readCounter(createStorage("-3")), 0);
});

test("il contatore salva un nuovo valore", () => {
  const storage = createStorage();
  saveCounter(storage, 1);
  assert.equal(readCounter(storage), 1);
});
