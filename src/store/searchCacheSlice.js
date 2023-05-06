import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: { results: {} },
  reducers: {
    cacheResults: (state, action) => {
      state.results = { ...state.results, ...action.payload };
    },
  },
});

export const { cacheResults } = searchCacheSlice.actions;

export default searchCacheSlice.reducer;
