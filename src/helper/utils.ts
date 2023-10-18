// Write the common  function here

import { AxiosError, AxiosResponse } from "axios";
import { get } from "lodash";
import { message } from "../enums/message.enum";

export const ResponseHandler = (response: AxiosResponse<any>) => {
    return {
        status: get(response, "status", ""),
        statusCode: get(response, "status", 200),
        data: get(response, "data", {}),
        message: get(response, "data.message", "")
    };
};

export const ErrorHandler = (error: AxiosError) => {
    switch (get(error, "response.status", 0)) {
        case 401:
            // pass login api url here in place of static login
            if (window.location.pathname !== "login") {
                return {
                    status: get(error, "response.status", 0),
                    message: get(
                        error,
                        "response.data.message",
                        message.dontHavePermission
                    ),
                    errors: get(error, "response.data.error", [])
                };
            } else {
                return {
                    status: get(error, "response.status", 0),
                    message: get(
                        error,
                        "response.data.message",
                        message.invalidEmailPassword
                    ),
                    errors: get(error, "response.data.error", [])
                };
            }
        case 403:
            return {
                status: get(error, "response.status", 0),
                message: get(
                    error,
                    "response.data.message",
                    message.dontHavePermission
                ),
                errors: get(error, "response.data.error", [])
            };
        case 404:
            return {
                status: get(error, "response.status", 0),
                message: get(
                    error,
                    "response.data.message",
                    message.dataNotFound
                ),
                errors: get(error, "response.data.error", [])
            };
        case 422:
            return {
                status: get(error, "response.status", 0),
                message: get(
                    error,
                    "response.data.message",
                    message.unprocessableContent
                ),
                errors: get(error, "response.data.error", [])
            };
        case 500:
            return {
                status: get(error, "response.status", 0),
                message: message.internalServerError,
                errors: get(error, "response.data.error", [])
            };
        default:
            return {
                status: get(error, "response.status", 0),
                message: get(
                    error,
                    "response.data.message",
                    message.somethingWentWrong
                ),
                errors: get(error, "response.data.error", [])
            };
    }
};


export const isWatched = (id:any, store:any) => {
    localStorage.setItem(store,JSON.stringify(id));
}

// Initiaize Firebase
export const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyAXh96zo0-ZyO4W0U44Xg7pzuCggUnyN2E",
    authDomain: "edloops-3dbd7.firebaseapp.com",
    projectId: "edloops-3dbd7",
    storageBucket: "edloops-3dbd7.appspot.com",
    messagingSenderId: "875810968885",
    appId: "1:875810968885:web:0f25eda48981103c9d687c",
    measurementId: "G-0JNH7EQPV5",
  }; 