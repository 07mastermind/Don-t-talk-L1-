import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOptions(){

    return(
        <div className="w-[80%] container mx-auto mt-30">
            <p className="font-bold text-[22px] mb-8">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto scrollbar-none gap-10 mb-30">
                {
                    dineoutRestaurants.map((restInfo)=><DineCard key={restInfo.info.id} restInfo={restInfo}/>)
                }
            </div>
        </div>
    )
}