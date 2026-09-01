import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function RestHeader(){

    // const counter= useSelector((state)=>state.cartSlice.items)
    // console.log(counter) //[{},{}]
    const counter= useSelector((state)=>state.cartSlice.count)

    return(
        <div className="container mx-auto py-4 px-4 w-[80%] mt-2 rounded-2xl bg-gray-100 text-2xl flex justify-between counters-center">
            <p className="text-orange-500 font-bold">Swiggy</p>
            <Link to={'/checkout'}>
            <p>Cart {`(${counter})`}</p>
            </Link>
        </div>
    )
}