

export default function RestaurantCard({restInfo}){

    return(
        <div className="w-70  transform transition hover:scale-95 duration-300 shadow-gray-200 shadow-md rounded-2xl">
            <div className="relative">
                <img className="w-70 h-46 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId} alt="" />
                <p className="font-bold text-white text-m absolute bottom-1 left-3 z-1">{restInfo?.info?.aggregatedDiscountInfoV3?.header} {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                <div className="absolute left-0 right-0 bottom-0 h-12 bg-linear-to-t from-black rounded-b-2xl"></div>
            </div>
            <div className="w-[95%] mx-auto mb-4 mt-3 space-y-1">
                <div className="text-lg font-bold truncate">{restInfo?.info?.name}</div>
                <div className="text-sm flex items-center gap-1 ">
                    <svg
                            className="h-4 w-4 fill-emerald-700 text-emerald-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="m12 2.5 2.93 5.94 6.57.95-4.75 4.63 1.12 6.54L12 17.47l-5.87 3.09 1.12-6.54L2.5 9.39l6.57-.95L12 2.5Z" />
                    </svg>
                    <span>{restInfo?.info?.avgRating}</span>
                    <span className="font-bold">{restInfo?.info?.sla?.slaString}</span>
                </div>
                <div className="text-gray-600 text-sm truncate">{restInfo?.info?.cuisines.join(" ")}</div>
                <div className="text-gray-700 text-sm ">{restInfo?.info?.areaName}</div>
            </div>
        </div>
    )
}