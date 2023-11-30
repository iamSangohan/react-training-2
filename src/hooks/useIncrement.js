import { useState } from "react";

export function useIncrement(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    return [
        count ,
        () => setCount(v => v + 1),
        () => setCount(v => v - 1),
    ]
}