import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client'
import Color from './component/color';

function Main(){

    const [count, setCount] =useState(0);
    return(

        <>
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>

        <Color name={count}/>   
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)