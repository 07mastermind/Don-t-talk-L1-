import { useContext } from "react"
import GlobalContext from "./global"


export default function Child2(){

    // const  data=useContext(GlobalContext)
    const {count, setCount}= useContext(GlobalContext)

    return(
        <>
        <h3>Iam third {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>

    )
}  // this is "props drilling"--intro to useContext