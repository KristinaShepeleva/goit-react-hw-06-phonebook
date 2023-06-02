import { createSlice } from "@reduxjs/toolkit";


const contactInitialState = { items: [] };

const contactSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
        state.items.push(action.payload);
      },
    
    deleteontact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
   
  },
});

export const { addContact, deleteontact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
