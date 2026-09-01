import {createSlice} from '@reduxjs/toolkit'


// item:{
// id:1
// name:'pasta',
// category:'veg',
// }

// items:[{id:132,quantity:1},{id:1324,quantity:1},{id:32,quantity:1},{id:13,quantity:1},{id:12,quantity:2}]

const cart = createSlice({
    name:'cartSlice',
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push({...action.payload, quantity:1})
            state.count++
        },
        incrementItem:(state, action)=>{
            // state.items.quantity+=1  //items ke andr {}s hai,quantity na hai
            const element=state.items.find(item=>item.id===action.payload.id) //{}
            element.quantity+=1
            state.count++
        },
        decrementItem:(state, action)=>{
            const element =state.items.find(item=>item.id===action.payload.id)
            if(element.quantity>1){
                element.quantity-=1
            }
            else{
                //remove the {} and immer want complete new or edit the existing array
                state.items=state.items.filter(item=>item.id!=action.payload.id)
            }
             state.count--   
        }
    }
})

export const {addItem, incrementItem, decrementItem}= cart.actions
export default cart.reducer