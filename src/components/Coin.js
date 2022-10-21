import React from 'react'
import {useState} from 'react'
import spoop from '../img/spoop.jpeg'
import nospoop from '../img/nospoop.jpeg'

export const Coin = (props) => {
    const {setSuccess, coin, setCoin, data, setData} = props

    function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
        }

    function handleCoin() {
        setCoin(tossCoin())
    }

    function fiveHeads() {
        return new Promise ((resolve, reject) => {
            let headsCount = 0
            let attempts = 0 
            let maxAttempts = 100

            while(headsCount < 5 && attempts <= maxAttempts){
                attempts++
                let result = tossCoin()
                setCoin(result)
                console.log(`${result} was flipped`)
                if (result === "heads") {
                    headsCount++
                } else {
                    headsCount = 0
                }
            }
            if (attempts <= maxAttempts) {
                setSuccess(true)
                setData(`It took ${attempts} tries to flip five "heads"`)
                resolve(data)
            } else {
                setSuccess(false)
                setData(`Attempts have exceeded ${maxAttempts} flips.`)
                reject(data)
            }
        })
    }

    function  handleFiveHeads() {
    fiveHeads()
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
    }
    console.log("this is after the asynchronous code-block lol")

        return (
            <div className="bg-amber-300">
                <div>
                    <h2 className="p-8 text-2xl font-bold">Spoopy Coin Simulator</h2>
                    <div className="flex justify-center items-center">
                        {
                            coin == "heads" ? 
                            <img className="h-96 rounded drop-shadow-lg" src={spoop} alt="testing testing testing" /> :
                            <img className="h-96 rounded drop-shadow-lg" src={nospoop} alt="testing testing testing" />
                        }
                    </div>
                    <div>
                        <button className="rounded border-solid border-2 border-black hover:border-dotted hover:bg-amber-700 my-8 p-1.5" type="button" onClick={handleCoin}>Get Spooped!</button>
                        <button 
                        className="ml-3 rounded border-solid border-2 border-black hover:border-dotted 
                        hover:bg-amber-700 my-8 p-1.5" 
                        type="button" onClick={
                            handleFiveHeads
                        }>Get 5 Spoops!</button>
                    </div>
                </div>
            </div>
        )
}
