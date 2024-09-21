import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company.d";
import { handleError } from "./Helpers/ErrorHandler";

const fmpUrl = 'https://financialmodelingprep.com/api';
interface SearchResponse {
    data: CompanySearch[];
}


function GetFmpApi(version: string, service: string, param: string, query: string = '') {

    if (query) {
        query = `?${query}&apikey=${import.meta.env.VITE_APP_API_KEY}`
    } else {
        query = `?apikey=${import.meta.env.VITE_APP_API_KEY}`
    }

    let url = `${fmpUrl}/${version}/${service}/${param}${query}`
    return url
}

export const searchCompanies = async (symbol: string) => {
    const url = GetFmpApi('v3', 'search-ticker', '', `query=${symbol}&limit=10&exchange=NASDAQ`)
    try {
        const data = await axios.get<SearchResponse>(url);

        return data;
    } catch (error: any) {
        if (error.response) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured."
        }
    }
};

export const getCompanyProfile = async (symbol: string) => {
    const url = GetFmpApi('v3', 'profile', symbol)

    try {
        const data = await axios.get<CompanyProfile[]>(url)

        return data;
    } catch (error: any) {
        handleError(error);
    }
}

export const getKeyMetrics = async (symbol: string) => {
    const url = GetFmpApi('v3', 'key-metrics-ttm', symbol)

    try {
        const data = await axios.get<CompanyKeyMetrics>(url)

        return data;
    } catch (error: any) {
        handleError(error);
    }
}

export const getIncomeStatement = async (symbol: string) => {
    const url = GetFmpApi('v3', 'income-statement', symbol)
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(url)

        return data;
    } catch (error: any) {
        handleError(error);
    }
}

export const getBalanceSheet = async (symbol: string) => {
    const url = GetFmpApi('v3', 'balance-sheet-statement', symbol, 'limit=40')
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(url)

        return data;
    } catch (error: any) {
        handleError(error);
    }
}

export const getCashFlowStatement = async (symbol: string) => {
    const url = GetFmpApi('v3', 'cash-flow-statement', symbol, 'limit=40')

    try {
        const data = await axios.get<CompanyCashFlow[]>(url)

        return data;
    } catch (error: any) {
        handleError(error);
    }
}