export default function Child2({count2, setCount2}){

    return(
        <>
        <h2>Iam third</h2>
        <button onClick={()=>setCount2(count2+1)}>Increment</button>
        <button onClick={()=>setCount2(count2-1)}>Decrement</button>
        </>

    )
}  // this is "props drilling"--intro to useContext