import React, { useEffect, useState } from "react"
import { FaClock } from "react-icons/fa";
import "./Timer.css"

interface TimerProps {
    initialTime : number,
    onTimeUp : () => void,
}
export const Timer : React.FC<TimerProps> = ({initialTime,onTimeUp}) => {
    const [time,setTime] = useState<number>(initialTime)

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time-1),1000);
        if (time === 0){
            onTimeUp();
        }
        return () => {
            if(timer){
                clearInterval(timer)
            }}
    }, [time,onTimeUp]);

    const formatTime = () : string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
    return (
        <div className="timer"><FaClock/>{formatTime()}</div>
    )
}