import { useEffect, useState } from "react";

export default function LiveClock() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US"))

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString("en-US"))
        }, 1000)
        return () => clearInterval(timeInterval)
    }, [])

    return (
        <p>{currentTime}</p>
    )


}