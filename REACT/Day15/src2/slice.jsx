import {createSlice} from '@reduxjs/toolkit'

const FoodReducer=createSlice({
    name:'slice2',
    initialState:{count:0},
    reducers:{
        addItem:(state)=>{state.count++},
        removeItem:(state)=>{state.count--}
    }
})

export default FoodReducer.reducer;
export const {addItem, removeItem }=FoodReducer.actions