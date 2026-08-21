import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Header from './Header.jsx'
import Cart from './Cart'
import stores from './Store2.jsx'

function App(){


    return(

        <>
        <Provider store={stores}>
        <Header/>
        <Cart/>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)