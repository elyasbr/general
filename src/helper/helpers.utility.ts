  export function getKeyByValue<T extends Record<string, string>>(
    enumObj: T,
    value: string,
    fallback?: keyof T
  ): keyof T | undefined {
    return (Object.entries(enumObj).find(([_, v]) => v === value)?.[0] as keyof T) || fallback;
  }