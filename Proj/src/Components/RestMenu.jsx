import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemsCards from "./ItemsAPI"
import ItemsData from "./ItemsData"
import { Link } from "react-router-dom"

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

    const [selected, setSelected ]=useState(null)

    // if(selected==='veg'){  //we did it all inculding count,but now this will not display categories, it will become lengthy for category
    //     return(
    // <div>
    //     <div className="w-[62%] mx-auto ml-60 my-4 py-7 border-b border-gray-200 ">
    //         <button className={`text-lg font-bold border border-gray-300 rounded-2xl px-8 py-1 mr-4 ${selected==='veg'? 'bg-green-500':'bg-gray-300'}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
    //         <button className={`text-lg font-bold border border-gray-300 rounded-2xl px-4 py-1 ${selected==='nonveg'?'bg-red-500':'bg-gray-300'}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
    //     </div>

    //     <div className="w-[65%] container mx-auto">
    //         {
    //           FilteredData?.map((items)=>{
    //                 const vegItems = items?.card?.card?.itemCards?.filter((value) =>'isVeg' in value?.card?.info)
    //                 return <ItemsData key={items?.card?.card?.title} items={{...items?.card?.card, itemCards: vegItems}} selected={selected}/>
    //         })
    //     }
    //     </div>
    // </div>
    // )
    // } 
    
    return(
    <div>

        <div className="w-[65%] mx-auto my-10 cursor-pointer ">
            <Link to={"/city/hyderabad/search"}>
            <p className="text-center text-m font-bold py-3 bg-gray-200 rounded-xl border border-gray-300 text-gray-600">Search for Dishes..</p>
            </Link>
        </div>


        <div className="w-[62%] mx-auto ml-60 my-4 py-7 border-b border-gray-200 ">
            <button className={`text-lg font-bold border border-gray-300 rounded-2xl px-8 py-1 mr-4 ${selected==='veg'? 'bg-green-500':'bg-gray-200'}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-lg font-bold border border-gray-300 rounded-2xl px-4 py-1 ${selected==='nonveg'?'bg-red-500':'bg-gray-200'}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
        </div>

        <div className="w-[65%] container mx-auto">
            {
                FilteredData.map((items)=><ItemsData key={items?.card?.card?.title} items={items?.card?.card} selected={selected}/>)
            }
        </div>
    </div>
    )
}   