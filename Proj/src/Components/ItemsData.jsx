import { useState } from "react";
import ItemCard from "./ItemCard";

export default function ItemsData({items}){
    //items:{}{}{}{}{}{}{}{}{}
    

    const [isOpen, setIsOpen]=useState(true)

    if('categories' in items){
        return(
            <div>
                <p className="text-[20px] font-bold mt-5">{items?.title}</p>
                <div>
                    {
                        items?.categories?.map((itemInfo)=><ItemsData key={itemInfo?.title} items={itemInfo}/>)
                    }
                </div>
            </div>
        )
    } 

    if(!isOpen){
        return(
            <div>
                <div className="my-5 flex justify-between">
                    <p className="text-lg font-bold">{items?.title+" ("+(items?.itemCards?.length??0)+")"}</p>
                    <button className="pr-14" onClick={()=>setIsOpen(!isOpen)} >{isOpen? '⮝':'⮟'}</button>
                </div>
                <div className="bg-gray-200 h-2"></div>
            </div>
           
        )
    }
    
    return(
        <div>
            <div className="my-5 flex justify-between">
                    <p className="text-lg font-bold">{items?.title+" ("+(items?.itemCards?.length??0)+")"}</p>
                    <button className="pr-14" onClick={()=>setIsOpen(!isOpen)} >{isOpen? '⮝':'⮟'}</button>
            </div>
            <div>
                {
                    items?.itemCards?.map((itemInfo)=><ItemCard key={itemInfo?.card?.info?.id} itemInfo={itemInfo?.card?.info}/>)
                } 
            </div>
        </div>
    )
}