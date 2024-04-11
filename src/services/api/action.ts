// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getLocationAPI } from "./manager";

// export const locationData = createAsyncThunk(
//   `app/location`,
//   async (thunkApi) => {
//     try {
//       const response = await getLocationAPI();
//       const data = await response.data;
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       if (!error) {
//         throw error;
//       }
//       return thunkApi.rejectWithValue(error.response);
//     }
//   }
// );
