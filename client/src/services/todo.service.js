import {axiosService} from "./axios.service";
import {url} from "../configs";


const todoService = {
    getAll: async () => await axiosService.get(url.todos),
    update: async (id) => await axiosService.get(`${url.todos}/${id}`),
    delete: async (id) => await axiosService.delete(`${url.todos}/${id}`),
    create: async (text) => await axiosService.post(url.todos, {text}),
};

export {todoService}