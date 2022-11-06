import React, {FC, useState, useEffect} from 'react'
import './TimerSendEmail.scss'

interface TimerSendEmailProps {
    setShowTimer: (prev: any) => void
}


const TimerSendEmail: FC <TimerSendEmailProps> = ({setShowTimer}) => {



    const [seconds, setSeconds] = useState<number>(59);

    const startTimer = () => {
        setSeconds((prev) => prev - 1)
    };

    useEffect(() => {
        const interval = setInterval(() => startTimer(), 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(seconds === 0){
            setShowTimer((prev: boolean) => !prev)
        }
    }, [seconds])

    return (
        <div className='container'>
            <p>{seconds}</p>
            <p>Повторить еще раз</p>
        </div>
    )
}

export default TimerSendEmail