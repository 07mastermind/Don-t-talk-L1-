import { GroceryGridCards } from "../utils/groceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){


    return(
        <div className="w-[80%] container mx-auto mt-30">
            <h1 className="font-bold text-[22px] mb-8">Shop Groceries on Instamart</h1>
            <div className="gap-10 flex flex-nowrap overflow-x-auto mb-20 scrollbar-none ">
                    {
                        GroceryGridCards.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData} ></GroceryCard>)
                    } 
            </div>
        </div>
    )
}