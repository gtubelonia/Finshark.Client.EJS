import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/portfolio';

type Props = {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
    return (
        <div className="justify-self-center pt-8 p-2 m-2 text-small rounded-lg shadow-lg h-44 w-52">
            <Link to={`/company/${portfolioValue.symbol}/company-profile`} 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                {portfolioValue.symbol}
            </Link>
            <div className="text-xs my-3">
                <p >Price: ${portfolioValue.purchase}</p>
                <p >Industry: {portfolioValue.industry}</p>
            </div>
            <DeletePortfolio
                portfolioValue={portfolioValue.symbol}
                onPortfolioDelete={onPortfolioDelete}
            />
        </div>
    )
}

export default CardPortfolio