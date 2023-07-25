
import React from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Splash() {  
    
    const navigate = useNavigate()

    useEffect(()=>{
        const timer= setTimeout(()=>{
           navigate("/game")
        }, 5000)
        return()=> clearTimeout(timer);
    }, [navigate]);

    const redirectToGame = () => {
        navigate("/game")
    }

    return (
    <React.Fragment>
      <h1>WELCOME!</h1>
      <p>Redirecting in 5 seconds</p>
      <button onClick={redirectToGame}>Redirect to Game!</button>
    </React.Fragment>
  );
}

// useEffect 2nd argument, tell it to rerun only if the variable changes
// useEffect is basically componentDidMount


