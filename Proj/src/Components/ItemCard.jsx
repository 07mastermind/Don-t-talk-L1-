import {useState} from 'react'
import { addItem,incrementItem, decrementItem } from '../store/cartSlicer'
import {useDispatch, useSelector} from 'react-redux'

export default function ItemCard({itemInfo}){
// itemInfo:{}{}{}{}{}{}{}

    // const [count, setCount]=useState(0)  //local state variable state ko loose krdete hai when we go to different route
    const dispatch=useDispatch();

    const item=useSelector(state=>state.cartSlice.items)
    const element=item.find(value=>value.id===itemInfo.id)
    const count=element? element.quantity:0

    function handleAdd(){
        // setCount(1)
        dispatch(addItem(itemInfo))
    }

    function handleIncrement(){
        // setCount(count+1)
        dispatch(incrementItem(itemInfo))
    }
    function handleDecrement(){
        // setCount(count-1)
        dispatch(decrementItem(itemInfo))
    }

    return(
        <>
        <div className="flex justify-between w-[95%] py-7 pb-12 border-b border-gray-300">
            <div className="w-[70%]">
                <p className="text-lg text-gray-700 font-bold ">{itemInfo?.name}</p>
                <p className="font-bold ">{"₹"+('defaultPrice' in itemInfo ? itemInfo?.defaultPrice/100 : itemInfo?.price/100)}</p>
                <div className="flex items-center text-sm gap-0.5 my-2">
                <svg
                            className="h-4 w-4 fill-emerald-700 text-emerald-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="m12 2.5 2.93 5.94 6.57.95-4.75 4.63 1.12 6.54L12 17.47l-5.87 3.09 1.12-6.54L2.5 9.39l6.57-.95L12 2.5Z" />
                </svg>
                <span className="font-bold text-emerald-700">{itemInfo?.ratings?.aggregatedRating?.rating}</span>
                <span className="text-gray-600">{'('+itemInfo?.ratings?.aggregatedRating?.ratingCountV2+')'}</span>
                </div>
                <p className="text-gray-600 text-lg ">{itemInfo?.description}</p>
            </div>
            <div className=" relative ">
                <img className="w-41 h-38 rounded-2xl object-cover" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+itemInfo?.imageId} alt=" " />
                {
                    count==0?(
                        <button className="w-32 h-11 font-bold text-xl text-[#1ba672] bg-white border border-gray-300 rounded-xl absolute top-32 left-5 shadow-gray-200 shadow-md cursor-pointer hover:bg-gray-200" onClick={()=>handleAdd()}>ADD</button>
                    ):(
                        <div className='w-32 h-11 font-bold text-xl text-[#1ba672] bg-white border border-gray-300 rounded-xl absolute top-32 left-5 shadow-gray-200 shadow-md cursor-pointer flex justify-center items-center gap-8 '>
                            <button  onClick={()=>handleDecrement()} className='  hover:bg-gray-200 '>-</button>
                            <span className='w-[10%]'>{count}</span>
                            <button onClick={()=>handleIncrement()} className=' hover:bg-gray-200 '>+</button>
                        </div>
                    )
                }
                
            </div>
        </div>
        </>
    )
}