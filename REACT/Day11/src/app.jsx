import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ChildInc from './childinc'
import ChildDec from './childDec'


function App(){
    

    return(
        <>
        <h1>Hello Everyone</h1>
        <ChildInc/>
        <ChildDec/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)