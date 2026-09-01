import ReactDOM from 'react-dom/client'
import Restaurant from './Components/Restaurant'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import RestMenu from './Components/RestMenu'
import Search from './Components/Search'
import SecondaryHome from './Components/SecondaryHome'
import {Provider} from 'react-redux'
import stores from './store/store'
import CheckOut from './Components/Checkout'

function App(){

    return(
        <>
        <Provider store={stores}>
        <BrowserRouter  future={{ v7_relativeSplatPath: true , v7_startTransition: true }} >
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route element={<SecondaryHome/>}>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/city/hyderabad/:id' element={<RestMenu/>}></Route>
        <Route path='/city/hyderabad/search' element={<Search/>}></Route>
        </Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)