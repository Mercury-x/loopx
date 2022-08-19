export function getStorageData(key: string): string {
  return localStorage.getItem(key) || '';
} 

export function setStorageData<T>(key: string, data:T): void {
  localStorage.setItem(key, JSON.stringify(data));
}