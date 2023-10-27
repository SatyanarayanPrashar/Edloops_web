import { ADD_NOTES_MODAL } from "../types";
import { LOGGED_IN_USER } from "../types";
import { CALL_USER_API } from "../types";

export const updateNotesModal = (data: {
    show: boolean;
}) => {
    return {
        type: ADD_NOTES_MODAL,
        payload: data
    };
};
export const checkLoggedInUser = (data: {
    isLoggedIn: boolean;
    loggedInUser?:string;
}) => {
    return {
        type: LOGGED_IN_USER,
        payload: data
    };
};

export const callUserApi = (data: {
    call: boolean;
}) => {
    return {
        type: CALL_USER_API,
        payload: data
    };
};

