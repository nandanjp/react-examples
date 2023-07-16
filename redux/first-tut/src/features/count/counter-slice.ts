import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState
{
    value: number;
}

const initialState: CounterState = {
    value: 10
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented(state)
        {
            //immer makes this immutable (does stuff for you already)
            state.value++;
        },
        ammountAdded(state, action: PayloadAction<number>) 
        {
            state.value += action.payload;
        },
        decremented(state)
        {
            state.value++;
        },
        addedTwo(state)
        {
            state.value += 2;
        }
    }
});

export const { incremented, decremented, addedTwo, ammountAdded } = counterSlice.actions;
export default counterSlice.reducer;