import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

// let money=0  //global var banaskte hai

function Main(){

    const [count, setCount] =useState(0)
    // let money =0; //phirse create hoga with 0, ye state var to hai ni, ki apne state ko maintain krke rakhe
    const money = useRef(0)  //Object {current:0}
    console.log(money.current)

    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        
        <h1>Money : {money.current}</h1>
        <button onClick={()=>{
            money.current=money.current+1
            console.log(money.current)
            }}>Decrement</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)