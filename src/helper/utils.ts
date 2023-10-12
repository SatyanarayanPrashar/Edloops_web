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