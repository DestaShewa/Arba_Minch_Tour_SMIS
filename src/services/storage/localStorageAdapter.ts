/**
 * Generic abstraction over localStorage to ensure all writes/reads are safe
 * and ready to be substituted by SQLite / IndexedDB later.
 */
export const storageAdapter = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (err) {
      console.error(`Error reading ${key} from storage:`, err);
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Error writing ${key} to storage:`, err);
    }
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  }
};