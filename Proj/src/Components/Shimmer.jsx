export default function Shimmer(){
    const shimmerCards = [];

    for(let i = 0; i < 20; i++){
        shimmerCards.push(
            <div className="w-70" key={i}>
                <div className="w-70 h-46 rounded-2xl bg-gray-200"></div>
                <div className="w-[95%] mx-auto mt-3 mb-4 space-y-1">
                    <div className="w-full h-6 bg-gray-200"></div>
                    <div className="w-full h-5 bg-gray-100"></div>
                    <div className="w-full h-5 bg-gray-100"></div>
                    <div className="w-full h-5 bg-gray-100"></div>
                </div>
            </div>
        );
    }

    return(
        <div className="w-[90%] flex flex-wrap mx-auto my-30 gap-7">
            {shimmerCards}
        </div>
    )
}