import React, { useEffect, useState } from 'react'

const useCounterDown = () => {
    const [days, setDays] = useState(170)
    const [hours, setHours] = useState(13)
    const [minutes, setMinutes] = useState(39)
    const [seconds, setSeconds] = useState(20)

    useEffect(() => {
        // ToDo: Add logic to counter Down
    }, [])

    return {
        days,
        hours,
        minutes,
        seconds
    };
}
 
export default useCounterDown;