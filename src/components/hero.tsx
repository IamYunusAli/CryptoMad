import React from 'react';
import heroimg from "../assets/Robot.png";
import sponsor from "../assets/1.png";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 items-center p-[5%] justify-between">
            <div className="flex flex-col">
            <h1 className="md:text-8xl sm:3xl text-5xl flex flex-shrink flex-initial font-bold"> Best Crypto and NFT site</h1>
            <div className="flex justify-center">
                <button type="button" className="border-solid border-2 border-neutral-50 m-3 flex-initial p-1">Get started</button>
                <button type="button" className="border-solid bg-white text-black border-neutral-50 m-3 p-2 px-2">Sign up</button>
            </div>
            </div>
            <div className="rightside flex justify-center">
            <img src={heroimg} alt="heroimg" className='h-[70vh]' />
            </div>
            <div className="flex my-5 gap-10 items-center flex-row">
                <img className="flex-wrap" src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
            </div>
        </div>
    )
}

export default Hero;
