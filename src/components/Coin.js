import React from 'react'
import {useState} from 'react'
import spoop from '../img/spoop.jpeg'

export const Coin = (props) => {
    const {coin, setCoin} = props

    const handleSpoop = () => {

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
