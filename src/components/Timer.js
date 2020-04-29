import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Timer = () => {
    const [ time, setTime ] = useState(60)
    const [ isActive, setIsActive ] = useState(false)
    // const timeRef = useRef(time)

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    })

    const toggle = () => {
        setIsActive(!isActive)
    }

    return (
        <Time>
            {time}

            <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
        </Time>
    )
}

export default Timer

const Time = styled.div`
    font-size: 60px;
`