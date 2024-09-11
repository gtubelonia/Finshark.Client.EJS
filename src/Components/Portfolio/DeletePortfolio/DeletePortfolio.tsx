import React, { SyntheticEvent } from 'react'

type Props = {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
    return (
        <form className="md:justify-center grid"onSubmit={onPortfolioDelete}>
          <input hidden={true} defaultValue={portfolioValue} />
          <button className="justify-self-center block w-full py-1 text-white duration-200 border-2 rounded-md bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
            X
          </button>
        </form>
    );
}

export default DeletePortfolio