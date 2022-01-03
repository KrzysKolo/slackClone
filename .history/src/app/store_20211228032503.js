import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlicer";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});