import { IUiState } from "@/interfaces/ui";
import {
  ADD_NOTES_MODAL,
  FIREBASE_USER_INFO,
  REFERRAL_CODE,
  REFERRAL_MODAL,
  USER_INFO,
} from "../types";
import { LOGGED_IN_USER } from "../types";
import { CALL_USER_API } from "../types";
import { IAction } from "@/interfaces/ui/redux.interfaces";

const initialState: IUiState = {
  showNotesModal: false,
  loggedInUser: false,
  loggedInUserId: "",
  callUserApi: false,
  userInfo: {},
  firebaseUserInfo: {},
  showReferralModal: false,
  referralUsed: false,
};

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
        loggedInUserId: payload.loggedInUser,
        referralUsed: payload.isReferralUsed,
      };
    case CALL_USER_API:
      return {
        ...state,
        callUserApi: payload.call,
      };
    case USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    case FIREBASE_USER_INFO:
      return {
        ...state,
        firebaseUserInfo: payload,
      };
    case REFERRAL_MODAL:
      return {
        ...state,
        showReferralModal: payload.show,
      };
    default:
      return state;
  }
};

export default uiReducer;
