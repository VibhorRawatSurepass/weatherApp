import { configureStore, combineSlices } from "@reduxjs/toolkit";

const rootReducer = combineSlices({});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
