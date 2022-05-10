import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => [...state, action.payload],
  },
});

export const { addItem: addItemActionCreator } = itemsSlice.actions;
export default itemsSlice.reducer;
