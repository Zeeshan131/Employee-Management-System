import axios, { AxiosResponse } from "axios";
import { Project } from "../models/project";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/API';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Projects = {
    list: () => requests.get<Project[]>('/Projects'),
    details: (id: string) => requests.get<Project>(`/Projects/${id}`),
    create: (project: Project) => requests.post<void>('/Projects', project),
    update: (project: Project) => requests.put<void>(`/Projects/${project.id}`, project),
    delete: (id: string) => requests.delete<void>(`/Projects/${id}`),
}

const agent = {
    Projects
}

export default agent;