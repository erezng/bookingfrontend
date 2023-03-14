import { Hotel } from "../@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardsState = {
  cards: Hotel[];
};
const initialState: CardsState = {
  cards: [],
};
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Hotel>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action) => {
      const CardToEdit = action.payload;
      const index = state.cards.findIndex((c) => c._id === action.payload.id);
      state.cards[index] = CardToEdit;
    },
    deleteCard: (state, action) => {
      const index = state.cards.findIndex((c) => c._id === action.payload);
      state.cards.splice(index, 1);
    },
    toggleFavorite: (state, { payload }: PayloadAction<string>) => {
      const index = state.cards.findIndex((a) => a._id === payload);
      if (index !== -1) {
        // state.cards[index].isfavorite = !state.cards[index].isfavorite;
      }
    },
  },
});
export const { addCard, deleteCard, editCard, toggleFavorite } =
  cardsSlice.actions;
export default cardsSlice.reducer;
