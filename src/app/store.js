import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dashboardReducer from "../redux/reducers/dashboardReducers";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboard: dashboardReducer,
  },
});
