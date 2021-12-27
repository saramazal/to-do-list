import { useEffect, useState } from "react"

export default function Clock() {
    let interval
    const [time, setTime] = useState(new Date())

    console.log('re-render')
    useEffect(startClock, [])

    function startClock() {
        console.log('start')
        interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            console.log('end')
            clearInterval(interval)
        }
    }

    return <div className="time">{time.toLocaleTimeString()}</div>
}