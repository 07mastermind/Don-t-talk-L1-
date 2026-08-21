import { useState } from "react"
import FoodCart from "./foodCart"

const FoodItems=[
    {id:1, food:'Pizza', price:200},
    {id:2, food:'Burger', price:300},
    {id:3, food:'Kebab', price:500},
    {id:4, food:'Chicken', price:400},
    {id:5, food:'Momos', price:300},
    {id:6, food:'Biryani', price:500},
    {id:7, food:'Rice', price:100},
    {id:8, food:'Chapati', price:100},
    {id:9, food:'Daal', price:500},
    {id:10, food:'Noodles', price:200},
    {id:11, food:'Manchuriya', price:300}
]

export default function Cart(){
 

    return(
        <div style={{display:'flex', justifyContent:'center', gap:'20px' , flexWrap:'wrap'}}>
            {FoodItems.map((value)=>{
                return(
                    <div key={value.id}>
                    <FoodCart values={value}/>   
                    </div>
                )
            })}
        </div>
    )
}