const DATA_PREFIX = 'gh-interview::';
export function saveItem<T>(key: string, value: T): void {
  localStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
}

export function getItem<T>(key: string): T | null {
  const got = localStorage.getItem(`${DATA_PREFIX}${key}`);
  return got ? (JSON.parse(got) as T) : null;
}

export function exportData(): string | null {
  const data: { [key: string]: any } = {};
  for (let key in localStorage) {
    if (key.startsWith(DATA_PREFIX)) {
      const stored = localStorage.getItem(key);
      if (stored) {
        data[key] = JSON.parse(stored);
      }
    }
  }

  return data ? JSON.stringify(data) : null;
}

export function importData(dataStr: string) {
  const data = JSON.parse(dataStr);
  for (let [key, value] of Object.entries(data)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
