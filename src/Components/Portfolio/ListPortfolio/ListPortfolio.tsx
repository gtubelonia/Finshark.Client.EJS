import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { PortfolioSectorGet } from '../../../Models/portfolio';

type Props = {
    portfolioList: PortfolioSectorGet | null;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioList, onPortfolioDelete }: Props) => {
    return (
        <section id="portfolio">
            <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
                My Portfolio
            </h2>
            <div className="grid grid-cols-2 px-10 mb-5 md:px-6 md:flex-row">
                <>
                    {portfolioList ? (
                        Object.keys(portfolioList).map((keyName) => {
                            return (
                                <div>
                                    <h4>{keyName}</h4>
                                    <div className="grid justify-center items-top">
                                        {portfolioList[keyName].map((stock) => {
                                            return <CardPortfolio
                                                key={stock.id}
                                                portfolioValue={stock}
                                                onPortfolioDelete={onPortfolioDelete}
                                            />
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                            Your portfolio is empty.
                        </h3>
                    )}
                </>
            </div>
        </section>
    );
};

export default ListPortfolio