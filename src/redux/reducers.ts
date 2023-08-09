import { combineReducers } from "redux";
import uiReducer from "./ui/ui.reducer";

const reducers = combineReducers({
    uiState: uiReducer
});

export default reducers;
