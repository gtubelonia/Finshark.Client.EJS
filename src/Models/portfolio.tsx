export type PortfolioSectorGet = {
    sector: [
        {
            id: number;
            symbol: string;
            companyName: string;
            purchase: number;
            lastDiv: number;
            industry: string;
            marketCap: number;
            comments: any;
            sector: string;
        }
    ]
}

export type PortfolioGet = {
    id: number;
    symbol: string;
    companyName: string;
    purchase: number;
    lastDiv: number;
    industry: string;
    marketCap: number;
    comments: any;
    sector: string;
}

export type PortfolioPost = {
    symbol: string;
}