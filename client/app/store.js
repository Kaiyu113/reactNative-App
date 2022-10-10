import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  blacklist: [""], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedReducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);
