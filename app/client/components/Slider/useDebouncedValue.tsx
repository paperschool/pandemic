import { useState, useEffect } from "react";

const useDebouncedValue = (input: any, debounceDelay: number = 1000) => {

    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(input);
        }, debounceDelay)

        return () => {
            clearTimeout(timeout);
        }
    }, [input, debounceDelay])

    return debouncedValue;
}

export default useDebouncedValue;