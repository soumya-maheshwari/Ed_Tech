import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from "./authSlice";
import contactReducer from "./contactSlice";
import profileReducer from "./profileSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedContactReducer = persistReducer(persistConfig, contactReducer);
const persistedProfileReducer = persistReducer(persistConfig, profileReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contact: persistedContactReducer,
    profile: persistedProfileReducer,
  },

  middleware: [thunk],
});

const persistor = persistStore(store);

export { persistor, store };
