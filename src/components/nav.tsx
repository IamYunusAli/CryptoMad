import React from 'react';

const Nav = () => {
    return (
        <div className=" flex flex-row font-bold justify-between items-center px-[4%]">
        <div>
            <h1>CryptoMad</h1>
        </div>
        <div>
           <ul className="flex gap-[20px] list-none">
            <li>
                Home
            </li>
            <li>
                MarketPlace
            </li>
            <li>
                Coin list
            </li>
            <li>
                News
            </li>
            </ul>
        </div>
        <div className="flex gap-[5px]">
            <button type="button">Login</button>
            <button type="button"> Sign up</button>
        </div>
        </div>
    )
}

export default Nav;