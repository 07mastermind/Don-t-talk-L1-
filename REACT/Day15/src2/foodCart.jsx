import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "./slice"

export default function FoodCart({values}){

        const [inCart, setInCart]=useState(true)

        const dispatch=useDispatch()
        
        function handleClick(){
            if(inCart){
                setInCart(false)
                dispatch(addItem())
            }
            else{
                setInCart(true)
                dispatch(removeItem())
            }
        }

    return(
        <>
        <h1>{values.food}</h1>
        <h2>{values.price}</h2>
        <button onClick={handleClick}>{inCart?'Add':'Remove'}</button>
        </>
    )
}