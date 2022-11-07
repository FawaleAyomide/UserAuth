import {useState, useEffect} from 'react'

const getLocalValue = (key, initvalue) => {
    if (typeof window === 'undefined') return initvalue;

    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) return localValue;

    // return result of func
    if (initvalue instanceof Function) return initvalue;
    return initvalue; 
}

const useLocalStorage = (key, initvalue) => {
    const [value, setValue] = useState(() => {
        return getLocalValue(key, initvalue);
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
  return [value, setValue]
}

export default useLocalStorage