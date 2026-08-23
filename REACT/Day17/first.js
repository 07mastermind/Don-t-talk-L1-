import ReactDOM from 'react-dom/client'
import Add from './Add'
function App(){

    const arr=[1,2,3,4]
    return(
        <>
        {arr.map((value)=><Add key={value}></Add>)}  
        </> //kisi bhi child component ki state uske key se attach hoti hai.,
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)