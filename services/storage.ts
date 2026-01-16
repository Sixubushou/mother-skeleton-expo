type StorageValue = string | null;

const memoryStore = new Map<string, string>();

export async function getItem(key: string): Promise<StorageValue> {
  return memoryStore.has(key) ? memoryStore.get(key) ?? null : null;
}

export async function setItem(key: string, value: string): Promise<void> {
  memoryStore.set(key, value);
}

export async function removeItem(key: string): Promise<void> {
  memoryStore.delete(key);
}
