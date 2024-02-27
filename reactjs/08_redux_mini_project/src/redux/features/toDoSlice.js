import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoData: []
}

const toDoSlice = createSlice({
    name: "to-do",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            // console.log("action >>", action.payload)
            const toDoObj = action.payload;
            state.toDoData.push(toDoObj);
        }
    }
});

export const { addToDo } = toDoSlice.actions;

export default toDoSlice.reducer