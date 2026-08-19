import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

// useMemo hook
// 1:counter
// 2:fibbonachi number
// 0 1 1 2 3 5 8 13 21 34


function Fibbonachi(n){
    if(n<=1)
        return n;
        
    return Fibbonachi(n-1)+Fibbonachi(n-2);
} //use callback bhi use krna hai usse bhi krskte hai, pr bahr likdo ge aur better hoga


function Main(){

    const [count, setCount]= useState(0)
    const [number, setNumber]= useState('')
    
    const [value, setValue]=useState('')

    // // const value=Fibbonachi(number)
    // const value = useMemo(()=>Fibbonachi(number),[number])
    
    const Fibbonachi=useCallback((n)=>{
        if(n<=1)
            return n;
        
        return Fibbonachi(n-1)+Fibbonachi(n-2);
    },[])

    useEffect(()=>{
        // const value=Fibbonachi(number) //ab ye mtkr dena ,ui me value kaise jaegi, this is the proof that useEffect last me execute hoga
        setValue(Fibbonachi(number)) //bs ek baar aur render hoga
    },[number])

    return(
        <>
        <h1>Counter: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <div>
            <h1>Fibbonachi:{value}</h1>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)