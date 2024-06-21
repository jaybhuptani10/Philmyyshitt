// src/store/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosconfig.js" // Import axios with the interceptor setup

// Async thunk for fetching user profile data
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user/profile', {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  user: null,
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("authToken"); // Clear the token on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isLoggedIn = true; // Set isLoggedIn to true on successful fetch
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
