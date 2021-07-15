import { createStore } from "redux";
import  {rootReducer } from "./reducer";

const reduxdevtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

 const store=createStore(rootReducer,reduxdevtools)

 export default store