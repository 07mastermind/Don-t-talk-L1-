import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './counter'
import { Provider } from 'react-redux'
import stores from './Store'
function App(){


    return(

        <>
        <Provider store={stores}>
        <Counter/>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)