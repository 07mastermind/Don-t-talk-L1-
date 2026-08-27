export default function GroceryCard({GroceryData}){

    return(
        <div className='flex-none w-36 '>
        <a href={GroceryData?.action?.link}>
        <img className="w-36 h-45 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GroceryData?.imageId} alt="" />
        </a>
        <h2 className="text-gray-600 font-bold text-center text-lg">{GroceryData?.description}</h2>
        </div>
    )
}