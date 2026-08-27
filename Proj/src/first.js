import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import FoodOptions from './Components/FoodOption'
import GroceryOption from './Components/GroceryOption'


function App(){

    return(
        <>
        <Header/>
        <FoodOptions/>
        <GroceryOption/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)