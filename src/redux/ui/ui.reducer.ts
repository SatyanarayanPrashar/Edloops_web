import { IUiState } from "@/interfaces/ui";
import { ADD_NOTES_MODAL } from "../types";
import { IAction } from "@/interfaces/ui/redux.interfaces";

const initialState: IUiState = {
    showNotesModal: false,
}

const uiReducer = (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ADD_NOTES_MODAL:
            return {
                ...state,
                showNotesModal: payload.show,
            };
            default:
            return state;
    }
}

export default uiReducer