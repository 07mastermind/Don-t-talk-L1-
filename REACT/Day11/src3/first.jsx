import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Child1 from './child1'
import GlobalContext from './global'
import Fourth from './fourth'

function First(){

    const [count, setCount]=useState(0)

    return(
        <>
        <h1>Iam Main {count}</h1>

        <Fourth/>
        <GlobalContext.Provider value={{count, setCount}}>
        <Child1/>
       
        </GlobalContext.Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<First/>)


// first create the context
// Provide data: decendent
// Consume the context