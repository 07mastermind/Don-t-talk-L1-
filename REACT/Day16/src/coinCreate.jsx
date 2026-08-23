import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slice";
import CoinCard from "./CoinCard";


export default function CoinCreate(){

    const dispatch=useDispatch()
    const {data, loading, error}= useSelector((state)=>state.slice1)

    useState(()=>{
        dispatch(FetchData(20)) //FetchData is a fn, not action, it does not have type
    },[])

    // display information of 20
    if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error has occured</h1>
    }

    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:"center", gap:'20px'}}>
            {data.map((value)=><CoinCard key={value.id} coin={value}></CoinCard>)}
        </div>
    )
}
