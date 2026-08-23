// npm install react-redux
// npm install @reduxjs/toolkit 

import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './src1/counter'
import { Provider } from 'react-redux'
import stores from './src1/Store'
import CustomCounter from './src1/Customcounter'
function App(){


    return(

        <>
        <Provider store={stores}>
        <Counter/>
        <br></br>
        <br></br>
        <CustomCounter/>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)