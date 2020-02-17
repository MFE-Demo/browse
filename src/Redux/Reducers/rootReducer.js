import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flixReducer from "./flixReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entry"]
};

const rootReducer = combineReducers({
  flix: flixReducer
});

export default persistReducer(persistConfig, rootReducer);
