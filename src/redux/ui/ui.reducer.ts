import { IUiState } from "@/interfaces/ui";
import { ADD_NOTES_MODAL } from "../types";
import { LOGGED_IN_USER } from "../types";
import { IAction } from "@/interfaces/ui/redux.interfaces";

const initialState: IUiState = {
    showNotesModal: false,
    loggedInUser: false,
    loggedInUserId: "",
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
        default:
        return state;
    }
}

export default uiReducer