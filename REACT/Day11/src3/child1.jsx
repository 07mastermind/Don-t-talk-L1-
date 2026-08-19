import { useContext } from "react"
import Child2 from "./child2"
import GlobalContext from "./global"

export default function Child1(){

    // const value= useContext(GlobalContext)

    const {count, setCount }=useContext(GlobalContext)

    return(
        <>
        {/* <h2>Iam second {value}</h2> */}
        <h2>Counter: {count}</h2>
        <Child2/>
        </>
    )
}