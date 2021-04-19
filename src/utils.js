import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handleDebounce = setTimeout(() => {
                setDebouncedValue(value);
            }, delay)
            return () => {
                clearTimeout(handleDebounce);
            }
        }
    , [value, delay]);

    return debouncedValue;
}

export const apiCall = async (search) => {
    const query = search.length ? `name/${search}` : "all";
    try {
      const resp = await fetch(`https://restcountries.eu/rest/v2/${query}`);
      return await resp.json();
    } catch (err) {
      return console.log("oops", err);
    }
  };