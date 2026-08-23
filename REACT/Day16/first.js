import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import stores from './src/store'
import CoinCreate from './src/coinCreate'


function App (){

    return(
        <>
        <Provider store={stores}>
        <CoinCreate/>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)






// function Fetchuser(){

//     useEffect(async()=>{
//         dispatch(LoadingData(false))
//         try{
//         const response=await fetch('');
//         const data=await response.json();
//         dispatch(UpdateData(data))
//         }
//         catch{
//             dispatch(ErrorData("Error Message"))
//         }
//     })

// }