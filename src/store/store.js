import searchCacheSlice from "./searchCacheSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({ reducer: { searchCache: searchCacheSlice } });

export default store;
