import { rootReducer } from "./rootReducer";
import { legacy_createStore } from "redux";


let store = legacy_createStore(rootReducer);

export { store };