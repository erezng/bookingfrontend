import { fetchHotels } from './Hotelslist';
import { Hotel, Hotels } from './../@types.d';
import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

const initialState: Hotels = {
  hotels: [],
  error: "",
  loading: false,
};
export const fetchhotellist=createAsyncThunk<Hotel[]>('fetchhotels',fetchHotels);

export const cardsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    toggleCart: (fetchhotellist, { payload }: PayloadAction<any>) => {
      console.log(fetchhotellist);
      
      const index = fetchhotellist.hotels.findIndex((a) => a._id === payload);
      if (index !== -1) {
      //   fetchhotellist.hotels[index].isfav = !fetchhotellist.hotels[index].isfav;
      }
      const isCart=localStorage.getItem("cart");
      if(isCart){
        const cartArr=JSON.parse(isCart);
        cartArr.push(payload);
        localStorage.setItem("cart",JSON.stringify(cartArr));
      }
      else{
        let myIdArray:string[]  =[];
        myIdArray.push(payload)
        localStorage.setItem("cart",JSON.stringify(myIdArray));
      }
      // localstorage cart : ["page"]
      //  localstorage: ["amazing hotel"] undefined.push
    },
    toggleFavorite: (fetchhotellist, { payload }: PayloadAction<any>) => {
      console.log(fetchhotellist);
      const index = fetchhotellist.hotels.findIndex((a) => a._id === payload);
      if (index !== -1) {
        fetchhotellist.hotels[index].isfav = !fetchhotellist.hotels[index].isfav;
      }
      localStorage.setItem(JSON.stringify(payload),"fav");
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
        state.hotels = action.payload;
      });
  },
});

export const { toggleFavorite,toggleCart } =
  cardsSlice.actions;
export default cardsSlice.reducer;
