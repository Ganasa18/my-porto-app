import { useState, useEffect } from "react";

const useSessionStorage = (name: string) => {
  const [value, setValue] = useState<String | null>(null);

  useEffect(() => {
    setValue(sessionStorage.getItem(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

export default useSessionStorage;
