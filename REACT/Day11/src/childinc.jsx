import { useState } from "react"
import ChildDec from "./childDec"

export default function ChildInc(){

    const [counts , setCounts]=useState(0)  //how can i use this in ChildDec, what if we make initiate this in 'most common ancestor'   this is called Stateup lifting

    return(
        <>
        <h2>Child :{counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        {/* <ChildDec/> */}
        </>

    )
}