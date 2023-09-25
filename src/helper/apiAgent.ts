import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const secondaryApiBaseUrl = process.env.NEXT_PUBLIC_SECONDARY_API_BASE_URL;

const apiConstants = {
    apiEndPoint: apiBaseUrl,
    secondaryApiEndpoint: secondaryApiBaseUrl,
    notes: apiBaseUrl + "/notes",
    blogs: secondaryApiBaseUrl + "/blogs",
    courses: secondaryApiBaseUrl + "/course"
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
    },
    blogs: {
        getAllBlogs: apiConstants.blogs + "/all/",
        // https://edloops-server.onrender.com/api/blogs/django-vs-php-vs-nod-1oOjk
        getSingleBlog: (id:any) =>  apiConstants.blogs + `/${id}`,
    },
    course: {
        getAllCourses: apiConstants.courses,
        getSingleCourse: (courseId:any) => apiConstants.courses + `/${courseId}`
    }
}
