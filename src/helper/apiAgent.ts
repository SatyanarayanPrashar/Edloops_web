import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiConstants = {
    apiEndPoint: apiBaseUrl,
    notes: apiBaseUrl + "/notes"
    
}

export const requests = {
    get: (url: string, config?: any) => axios.get(url, config),
    post: (url: string, body: {}, config?: any) =>
        axios.post(url, body, config),
    put: (url: string, body: {}, config?: any) => axios.put(url, body, config),
    patch: (url: string, body: {}, config?: any) =>
        axios.patch(url, body, config),
    delete: (url: string, config?: any) => axios.delete(url, config)
};

export const blogRequestUrls = {
    //notes
    notes: {
        getNotes: apiConstants.notes + "/all"
    }
}
