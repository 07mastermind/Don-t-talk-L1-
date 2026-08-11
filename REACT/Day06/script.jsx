import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Counter(){
    let [count,setCount]=useState(0);  //setCount(fn): jaise hi mere andr ki value change hogi, mai execution st krdunga

    function increment(){
        setCount(count+1);
        // console.log(count)
        // document.querySelector('h1').innerText=`Count is:${count}`
    }

    function decrement(){
                            //count:0
        setCount(count-1)  //setCount(1)
        // document.querySelector('h1').innerText=`Count is:${count}`
    }

    return(
        <div className='first'>
            <h1>Count is:{count} </h1>
            <button onClick={increment}>Increment {count}</button>
            <button onClick={decrement}>Decrement {count}</button>
        </div>
       
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>) 