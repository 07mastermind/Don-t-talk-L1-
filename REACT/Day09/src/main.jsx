import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/header'
import Body from './component/body'

function Main(){



    return(
        <>
        <Header/>
        <Body/>      
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)