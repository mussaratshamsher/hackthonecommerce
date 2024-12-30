import { useEffect, useState } from 'react';  

const CountdownTimer = () => {  
    const targetDate = new Date('2024-12-31T23:59:59').getTime(); // Set your target date  

    const [timeRemaining, setTimeRemaining] = useState({  
        days: 0,  
        hours: 0,  
        minutes: 0,  
        seconds: 0,  
    });  

    useEffect(() => {  
        const updateCountdown = () => {  
            const now = new Date().getTime();  
            const distance = targetDate - now;  

            if (distance < 0) {  
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });  
                return;  
            }  

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);  

            setTimeRemaining({ days, hours, minutes, seconds });  
        };  

        const interval = setInterval(updateCountdown, 1000);  
        updateCountdown(); // Run once immediately  

        return () => clearInterval(interval); // Cleanup on unmount  
    }, [targetDate]);  

    return (  
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>  
            <h1 className='font-bold text-1xl'>Days Hours Minutes Seconds</h1>  
            <div className='font-bold text-3xl'>  
                {String(timeRemaining.days).padStart(2, '0')} <span className='text-red-600'>: </span>   
                {String(timeRemaining.hours).padStart(2, '0')}  <span className='text-red-600'>: </span> 
                {String(timeRemaining.minutes).padStart(2, '0')} <span className='text-red-600'>: </span>   
                {String(timeRemaining.seconds).padStart(2, '0')}  
            </div>  
        </div>  
    );  
};  

export default CountdownTimer;