import { useState, useCallback } from 'react';

function useToggleValue<T, F>(truthyValue: T, falsyValue: F, truthy: boolean = true): [T | F, (nextValue?: boolean) => void] {
  const [value, setValue] = useState<boolean>(!!truthy);

  const toggleValue = useCallback((nextValue?: boolean) => {
    if (typeof nextValue !== 'undefined') {
      setValue(!!nextValue);
    } else {
      setValue(prevValue => !prevValue);
    }
  }, []);

  return [value ? truthyValue : falsyValue, toggleValue];
}

export default useToggleValue;
