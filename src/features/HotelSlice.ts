import  axios from 'axios';
import { fetchHotels } from './Hotelslist';
import { Hotel, Hotels } from './../@types.d';
import { createSlice, PayloadAction,createAsyncThunk,current } from "@reduxjs/toolkit";

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
    // console.log(data);
    return data
  }
)

export const cardsSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    toggleCart: (state, { payload }: PayloadAction<any>) => {
      const index = state.hotels.findIndex((a) => a._id === payload);
      state.hotels[index].cart=true
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
