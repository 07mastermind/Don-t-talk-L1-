

export default function DineCard({restInfo}){

    return(
        
        <div className="flex-none w-81 relative">
            <a target="_blank" href={restInfo?.cta?.link}> 
            <img className="w-81 h-47 rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.mediaFiles[0]?.url} alt="" />
            <p className="font-bold text-white text-xl absolute bottom-3 left-3 z-1">{restInfo?.info?.name}</p>
            <p className="font-bold text-white text-xl absolute bottom-3 right-3 z-1">{restInfo?.info?.rating?.value}</p>
            <div className="absolute left-0 right-0 bottom-0 h-16 bg-linear-to-t from-black"></div>
            </a>
        </div>
    )
}

// cta-call to action 

