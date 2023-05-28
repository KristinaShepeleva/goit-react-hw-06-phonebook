import { createSlice } from "@reduxjs/toolkit";


const phoneInitialState = { items: [] };

const phoneSlice = createSlice({
  name: "phone",
  initialState: phoneInitialState,
  reducers: {
    addPhone: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deletePhone(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
   
  },
});

export const { addPhone, deletePhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
