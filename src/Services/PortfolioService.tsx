import { handleError } from "../Helpers/ErrorHandler";
import { PortfolioSectorGet, PortfolioPost } from "../Models/portfolio";
import axiosInstance from "../Helpers/axiosHelper";
const api = `${import.meta.env.VITE_APP_API_URL}/portfolios/`;

export const portfolioAddAPI = async (symbol: string) => {
    try {
        const data = await axiosInstance.patch<PortfolioPost>(api + `add?symbol=${symbol}`, {
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const portfolioDeleteAPI = async (symbol: string) => {
    try {
        const data = await axiosInstance.patch<PortfolioPost>(api + `delete?symbol=${symbol}`, {
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const portfolioGetAPI = async () => {
    try {
        const data = await axiosInstance.get<PortfolioSectorGet>(api);
        return data;
    } catch (error) {
        handleError(error);
    }
};