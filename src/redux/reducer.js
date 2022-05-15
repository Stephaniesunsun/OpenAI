import { createSlice } from '@reduxjs/toolkit';

const initialState={
    engine:'',
}

export const engineSlice = createSlice({
    name:'engine',
    initialState,
    reducers:{
        setEngine: (state, action)=>{
            state.engine=action.payload;
        },
    },
})

export const { setEngine } = engineSlice.actions;
export default engineSlice.reducer;