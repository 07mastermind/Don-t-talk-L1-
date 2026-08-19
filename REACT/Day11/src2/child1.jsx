import Child2 from "./child2"

export default function Child1({count1, setCount1}){

    return(
        <>
        <h1>Iam second</h1>
        <h1>Counter: {count1}</h1>
        <Child2 count2={count1} setCount2={setCount1}/>
        </>
    )
}