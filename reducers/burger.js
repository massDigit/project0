import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
};

export const burgerSlice = createSlice({
    name:'burger',
    initialState,
    reducers:{
        addBurgerToStore:(state, action)=>{
            state.value.push(action.payload);
        },
    },
});

export const {addBurgerToStore} = burgerSlice.actions;
export default burgerSlice.reducer;