import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count: 0
}  //react me ek pura naya obj ko insert kr na padhega initialState me, then only the value will be changed [...arr] , coz it is stored as reference


const reactSlicer=createSlice({
    name:'Slice1',
    initialState,
    reducers:{
        Increment:(state)=>{
            state.count=state.count+1
        },
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0}

    }
})

//old days
Increment: (state)=>{
    return{...state,count:state.count+1} //return a new obj  // {count:0, count:1}  takes the latest value
}
//Immer:says ya to aap new obj create karo || ya Draft diya usko update karo 
// New Draft create krta hai, and if that is changed , it will update
// Original obj- Draft(duplicate obj)- update maardega
// {count:0}      {count:1}       {count:1} 

        // Increment:(state)=>{                 Increment:(state)=>state.count++, it will return 1 not count=1, no sense! ^-^ 
        //     retutn state.count=state.count+1 // blunder^-^
        // }, 

export const {Increment, Decrement, Reset} =reactSlicer.actions
export default reactSlicer.reducer;
