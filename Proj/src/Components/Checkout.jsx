import { useSelector } from "react-redux"



export default function CheckOut(){

    const data=useSelector((state)=>state.cartSlice.items)
    return(
        <>
        {
            data.map((value)=> <div key={value.id}>{value.name}</div>)
        }
        </>
    )
}