import { imageGridCard } from "../utils/foodData"
import FoodCard from "./FoodCard"

export default function FoodOptions(){

    return(
        <>
        <div className=" w-[80%] flex flex-wrap container mx-auto mt-30">
            <h1 className="font-bold text-[22px] mb-8">Order our best food options</h1>
            <div className="flex flex-wrap gap-3">
            {
                imageGridCard.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} ></FoodCard>)
            } 
            </div>
        </div>
        </>
    )
}