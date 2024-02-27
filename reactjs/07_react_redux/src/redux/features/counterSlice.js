import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1,
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: initialState,
    reducers: {
        incrementCount: (state, action) => {
            state.count = state.count + 1
        },
        decrementCount: (state) => {
            state.count = state.count - 1
        }
    }
});

export const { incrementCount, decrementCount } = counterSlice.actions

export default counterSlice.reducer


// Update Value in store => useDispatch
// Get value from store => useSelector