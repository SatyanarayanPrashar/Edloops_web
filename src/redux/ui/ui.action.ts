import { ADD_NOTES_MODAL } from "../types";

export const updateNotesModal = (data: {
    show: boolean;
}) => {
    return {
        type: ADD_NOTES_MODAL,
        payload: data
    };
};