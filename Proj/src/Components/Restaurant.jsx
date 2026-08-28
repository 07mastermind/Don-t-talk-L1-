import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){

    const [RestData, setRestData]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const ProxyServer="https://cors-anywhere.herokuapp.com/"
            const SwiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

            const response= await fetch(ProxyServer+ SwiggyAPI)
            const data= await response.json()

            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        }
        
        fetchData()
    },[])

    // console.log(RestData)

    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return(
        <div className=" w-[90%] flex flex-wrap mx-auto my-30 gap-7">
            {
                RestData.map((restInfo)=><RestaurantCard key={restInfo?.info?.id} restInfo={restInfo}/>)
            }
        </div>
    )


}


// Proxy Server: "https://cors-anywhere.herokuapp.com/"
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING