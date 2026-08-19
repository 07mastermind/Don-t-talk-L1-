import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'


// Old function(not rerender one) (time=0)->setInterval(): setTime() call after every sec
function StopWatch(){

    const [time, setTime]=useState(0)
    const [isRunning, setIsRunning]=useState(false)
    const internalRef=useRef(null)
 
    function start(){
        if(!isRunning){
        internalRef.current=setInterval(()=>{
            setTime(latestval=>latestval+1) //iske pass bhi ek callback fn hota hai
        },1000)   //ispr clear interval lagaa ne ke liya iska ref cahiye, jo setTime ki 
        setIsRunning(true)
    }
        
    //     if(internalRef.current===null){
    //     internalRef.current=setInterval(()=>{
    //         setTime(latestval=>latestval+1) //iske pass bhi ek callback fn hota hai
    //     },1000)   //ispr clear interval lagaa ne ke liya iska ref cahiye, jo setTime ki 
    //     internalRef.current!=null
    // }
    }

    function stop(){
    if(isRunning){
        clearInterval(internalRef.current)
        setIsRunning(false)
    }
    //   if(internalRef.current!==null){
    //     clearInterval(internalRef.current)
    //     internalRef.current=null
    // }
    }

    function reset(){
        clearInterval(internalRef.current)
        setTime(0)
    }

    return(
        <>
        <h1>StopWatch: {time}</h1>
        <br />
        <button onClick={start}>Start</button>
        <br /><br />
        <button onClick={stop}>Stop</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>)