import { useEffect, useState } from "react";


export default function FoodDelivery(){

    const [RestData, setRestData]=useState({})

    useEffect(()=>{
        async function fetchData(){
            const ProxcyServer="https://cors-anywhere.herokuapp.com/"
            const SwiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

            const response= await fetch(ProxcyServer+ SwiggyAPI)
            const data= await response.json()

            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        }
        
        fetchData()
    },[])

    console.log(RestData)
}


// Proxy Server: "https://cors-anywhere.herokuapp.com/"
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING