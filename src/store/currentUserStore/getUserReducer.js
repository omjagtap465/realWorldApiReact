import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApiResponse";
export const getCurrentUser = createAsyncThunk(
  "currentUser/getCurrentUser",
  async (token) => {
    const payload = {
        method: "get",
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      };
    const response = await fetchApi(userData.apiUrl, payload);
    return response;
  }
);
const getCurrentUserReducer = createSlice({
  name: "getCurrentUser", //reducer name
  initialState: {
    value: null,
    isLoggedIn: false,
    token:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state) => {
       state
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      const data = action.payload.user;
      state.value = data;
      state.isLoggedIn = true;
      state.token = data.token ;
      localStorage.setItem("token", data.token);
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.value = action.error.message;
    });
  },
});

export default getCurrentUserReducer.reducer;