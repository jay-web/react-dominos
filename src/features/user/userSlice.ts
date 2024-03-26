import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../../services/apiGeocoding";
import { IUser, STATUS } from "../../types";

function getPosition():Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}



const initialState:IUser = {
  username: '',
  status: STATUS.IDLE,
  address: '',
  position:{},
  error: '',
  order: []
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async function(){

   // 1) We get the user's geolocation position
   const positionObj:GeolocationPosition = await getPosition();
   const position = {
     latitude: positionObj.coords.latitude,
     longitude: positionObj.coords.longitude,
   };
 
   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
   const addressObj = await getAddress(position);
   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
 
   // 3) Then we return an object with the data that we are interested in
   return { position, address };
})

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    updateName: (state, action) => {
      state.username = action.payload
    },
    addOrder: (state, action) => {
      state.order.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = STATUS.LOADING
    })
    .addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload.address;
      state.position = action.payload.position;
      state.status = STATUS.IDLE
    })
    .addCase(fetchAddress.rejected, (state) => {
      state.status = STATUS.ERROR
      state.error = "Unable to fetch your location. Please enter address manually to get delivered your pizzas"
    })
  },
});


export const { updateName,addOrder } = UserSlice.actions;

export default UserSlice.reducer;


export const getUser = (state) => state.user;