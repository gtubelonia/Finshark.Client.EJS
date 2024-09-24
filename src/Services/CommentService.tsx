import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";
import axiosInstance from "../Helpers/axiosHelper";

const api = `${import.meta.env.VITE_APP_API_URL}/comments/`;

export const commentPostAPI = async (title: string, content: string, symbol: string) => {
    try {
        const data = await axiosInstance.post<CommentPost>(api + `add/${symbol}`, {
            title: title,
            content: content,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const commentGetAPI = async (symbol: string) => {
    try {
        const data = await axiosInstance.get<CommentGet[]>(api + `${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
} 