export function getStorageData<T>(key: string): T | undefined {
  const storageData = localStorage.getItem(key);
  if (storageData) {
    return JSON.parse(storageData) as T
  }
} 

export function setStorageData<T>(key: string, data:T): void {
  localStorage.setItem(key, JSON.stringify(data));
}