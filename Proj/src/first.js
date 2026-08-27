import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import FoodOptions from './Components/FoodOption'
import GroceryOption from './Components/GroceryOption'
import DineOptions from './Components/DineOptions'
import FoodDelivery from './Components/FoodDelivery'


function App(){

    return(
        <>
        <Header/>
        <FoodOptions/>
        <GroceryOption/>
        <DineOptions/>
        <FoodDelivery/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)