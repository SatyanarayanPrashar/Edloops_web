import { IUiState } from "@/interfaces/ui";
import { ADD_NOTES_MODAL } from "../types";
import { LOGGED_IN_USER } from "../types";
import { CALL_USER_API } from "../types";
import { IAction } from "@/interfaces/ui/redux.interfaces";

const initialState: IUiState = {
    showNotesModal: false,
    loggedInUser: false,
    loggedInUserId: "",
    callUserApi: false
}

const uiReducer = (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ADD_NOTES_MODAL:
            return {
                ...state,
                showNotesModal: payload.show,
            };
        case LOGGED_IN_USER:
        return {
            ...state,
            loggedInUser: payload.isLoggedIn,
            loggedInUserId: payload.loggedInUser
        };
        case CALL_USER_API:
            return {
                ...state,
                callUserApi: payload.call,
            };
        default:
        return state;
    }
}

export default uiReducer