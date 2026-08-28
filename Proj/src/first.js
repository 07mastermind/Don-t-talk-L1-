import ReactDOM from 'react-dom/client'
import Restaurant from './Components/Restaurant'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import RestMenu from './Components/RestMenu'

function App(){

    return(
        <>
        <BrowserRouter  future={{ v7_relativeSplatPath: true , v7_startTransition: true }} >
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/city/hyderabad/:id' element={<RestMenu/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)