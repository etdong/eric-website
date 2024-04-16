import { useEffect, useState } from "react";

export function useTypingEffect(
    text,
    strokeDelay
) {
    const [pos, nextPos] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>{
            nextPos((value) => value + 1)
        }, strokeDelay)
        return () => {
            clearInterval(intervalId)
        }
    },[strokeDelay])

    return text.substring(0, pos)
}