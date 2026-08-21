import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function First(){

console.log(0)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<First/>)