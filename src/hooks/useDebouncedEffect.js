import { useEffect } from 'react';

/**
 * useEffect with debounce
 * @param effect callback function
 * @param deps hook dependencies
 * @param delay debounce delay
 */
const useDebouncedEffect = (effect, deps = [], delay = 1000) => {
  useEffect(() => {
    const handler = setTimeout(effect, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
};

export default useDebouncedEffect;
