import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Child1 from './child1'


function First(){

    const [count, setCount]=useState(0)

    return(
        <>
        <Child1 count1={count} setCount1={setCount}/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<First/>)