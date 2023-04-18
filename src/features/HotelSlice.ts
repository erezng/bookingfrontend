import  axios from 'axios';
import {  Hotels } from './../@types.d';
import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

export const initialState: Hotels = {
  hotels: [],
  error: "",
  loading: false,
};

export const fetchhotellist = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('http://localhost:3001/api/hotels/allhotels')
    const data = await res.data
    return data
  }
)

export const cardsSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    toggleCart: (state, { payload }: PayloadAction<any>) => {
      const index = state.hotels.findIndex((a) => a._id === payload);
      state.hotels[index].cart++;
      console.log(state.hotels[index].cart);
     
    },
    toggleFavorite: (state, { payload }: PayloadAction<any>) => {
      const index=state.hotels.findIndex((e:any)=>e._id===payload);
      state.hotels[index].isfav=!state.hotels[index].isfav

     },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchhotellist.pending, (state, action) => {
        state.loading = true;
        state.error = "";
        state.hotels = [];
      })
      .addCase(fetchhotellist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
        state.hotels = [];
      })
      .addCase(fetchhotellist.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.hotels = action.payload
      });

  },
});

export const { toggleFavorite,toggleCart } =
  cardsSlice.actions;
export default cardsSlice.reducer;
