import { useEffect, useState } from "react"

export const Timer= ({initialTime,onTimeUp}) => {
    const [time,setTime] = useState(initialTime)

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time-1),1000);
        if (time === 0){
            onTimeUp();
        }
        return () => clearInterval(timer);
    }, [time,onTimeUp]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
    return (
        <div>{formatTime(time)}</div>
    )
}