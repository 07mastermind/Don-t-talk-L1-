import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemsCards from "./ItemsAPI"
import ItemsData from "./ItemsData"

export default function RestMenu(){

    // let {id}=useParams()
    // console.log(id)

    
    // const [RestData, setRestData]=useState([])

    // useEffect(() => {
    //     async function fetchData() {
    //         const ProxyServer = "https://cors-anywhere.herokuapp.com/";
    //         const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}`;

    //         const response= await fetch(ProxyServer+ SwiggyAPI)
    //         const data= await response.json()

    //         setRestData(data)

    //     }

    //     fetchData();
    // }, []);

    // // console.log(RestData)

    const RestData=ItemsCards

    const FilteredData= RestData.filter((items)=> 'categoryId' in items?.card?.card)
    // console.log(FilteredData)
    return(
        <div className="w-[65%] container mx-auto">
            {
                FilteredData.map((items)=><ItemsData key={items?.card?.card?.title} items={items?.card?.card}/>)
            }
        </div>
    )
}   