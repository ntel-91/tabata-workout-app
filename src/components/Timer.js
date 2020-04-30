import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Timer = () => {
    const [ time, setTime ] = useState(5)
    const [ isActive, setIsActive ] = useState(false)
    const [ isRestTime, setIsRestTime ] = useState(false)
    

    
    let workTime = [5, 5]
    let restTime = [3, 3, 3]

    useEffect(() => {
        let interval = null
        if (isActive && time !== 0) {
            interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)
        } else if (restTime.length !== 0 && isActive) {
            let nextTime = isRestTime ? workTime.shift() : restTime.shift()
            setIsRestTime(!isRestTime)
            setTime(nextTime)
            console.log("WORK: ", workTime)
            console.log("REST: ", restTime)
            // setIsRestTime(!isRestTime)
            // setTime(nextTime)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    })

    const toggle = () => {
        setIsActive(!isActive)
    }

    const reset = () => {
        setTime(60)
        setIsActive(false)
    }

    return (
        <Time>
            {time}
            <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </Time>
    )
}

export default Timer

const Time = styled.div`
    font-size: 60px;
`