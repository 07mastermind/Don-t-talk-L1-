import ReactDOM from 'react-dom/client'
import Add from './Add'
import { useState } from 'react'

// https://excalidraw.com/#json=R8y4k5MPb62uHAG5n96Rm,U_p7T1mNv61_WEiLHXSAdA

function App(){

    const [language,setlanguage]=useState(['TS','JS','Java'])

    function handleClick(){
        setlanguage(['C++',...language])
    }


    const VirtualDOM=<h1>Hello Everyone</h1>

    const RealDOM=document.createElement('h1')
    RealDOM.innerText='Hello Everyone'

    console.log(VirtualDOM)
    console.dir(RealDOM)


    return(
       <>
       <div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'40px'}}>
        {language.map((value, index)=><Add key={value} value={value}></Add>)}
        </div>
        <br /><br />
        <br /><br />    
       <div style={{display:'flex', justifyContent:'center'}}>
       <button onClick={handleClick} >Add Language</button>
       </div>
       </>
    )
}

ReactDOM.createRoot((document.getElementById('root'))).render(<App></App>)