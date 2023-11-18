import { ADD_NOTES_MODAL, REFERRAL_MODAL, USER_INFO } from "../types";
import { LOGGED_IN_USER } from "../types";
import { CALL_USER_API } from "../types";

export const updateNotesModal = (data: { show: boolean }) => {
  return {
    type: ADD_NOTES_MODAL,
    payload: data,
  };
};
export const checkLoggedInUser = (data: {
  isLoggedIn?: boolean;
  loggedInUser?: string;
  isReferralUsed?: boolean;
}) => {
  return {
    type: LOGGED_IN_USER,
    payload: data,
  };
};

export const callUserApi = (data: { call: boolean }) => {
  return {
    type: CALL_USER_API,
    payload: data,
  };
};

export const userInfoData = (data: any) => {
  return {
    type: USER_INFO,
    payload: data,
  };
};
export const updateReferralModal = (data: { show: boolean }) => {
  return {
    type: REFERRAL_MODAL,
    payload: data,
  };
};
