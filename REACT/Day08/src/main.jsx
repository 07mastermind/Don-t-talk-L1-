import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'

// console.log('check') //useState will rerender its own component only

function Main(){
// console.log('final')
// console.log('9check')  //will be renderd

    const [password, setPassword]=useState('ABASDSADFK');
    const [length, setLength] =useState(10)
    const [numberchange, setNumberchange]=useState(false)
    const [charchange, setCharchange]=useState(false);

    const generatepassword= useCallback(()=>{
        let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(numberchange)
            str+='1234567890'
        if(charchange)
            str+=')(*^&^%#!$@{}"?<|'

        let ans=''

        for(let i=0; i<length; i++){
            ans+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(ans)

    },[length, numberchange, charchange])


    // generatepassword() padh gaya pura!   infinite loop pe chalegaya, coz hamne fncall ko khule chod diya 

    useEffect(()=>{
        generatepassword();
    },[generatepassword])

    return(
        <>
        <h1>{password}</h1>
        <div id="edit">
            <input type="range" id="range" min={5} max={30} value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="range">Length({length})</label>

            <input type="checkbox" id="num" defaultChecked={numberchange} onChange={()=>setNumberchange(!numberchange)} />
            <label htmlFor="num">Number</label>

            <input type="checkbox" id="char" defaultChecked={charchange} onChange={()=>setCharchange(!charchange)} />
            <label htmlFor="char">Character</label>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)