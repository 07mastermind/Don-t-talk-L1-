import { useState } from "react"
import { useDispatch } from "react-redux"
import { CustomIncrement } from "./Slicer1"

export default function CustomCounter(){

    const [number, setNumber]= useState('')
    const dispatch=useDispatch()
    function handleClick(){
        dispatch(CustomIncrement(Number(number)))
        setNumber('')
        // {type: slice/CustomIncrement paylayout: number}
    }

    return(
        <>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={handleClick}>Add</button>
        </>
    )
}