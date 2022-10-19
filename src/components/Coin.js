import React from 'react'
import {useState} from 'react'
import spoop from '../img/spoop.jpeg'

export const Coin = (props) => {
    const {coin, setCoin} = props

    function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
        }

    function fiveHeadsSync() {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            }
            return `It took ${attempts} tries to flip five "heads"`;
        }
        console.log( fiveHeadsSync() );
        console.log( "This is run after the fiveHeadsSync function completes" );


    const handleSpoop = () => {
        console.log("Get spooped lol")
    }

    setCoin("Hello, coin!")

    return (
        <div className="bg-amber-300">
            <div>
                <h2 className="p-8 text-2xl font-bold">Spoopy Coin Simulator</h2>
                <div className="flex justify-center items-center">
                    <img className="h-96 rounded drop-shadow-lg" src={spoop} alt="testing testing testing" />
                </div>
                <button className="rounded border-solid border-2 border-black hover:border-dotted hover:bg-amber-700 my-8 p-1.5" type="button" onClick={handleSpoop}>Get Spooped!</button>
            </div>
        </div>
    )
}
