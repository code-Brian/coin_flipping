import React from 'react'

export const Display = (props) => {
    const {coin} = props
  return (
    <div className="bg-amber-700 flex items-center justify-center h-96">
        <p>Coin has been set to: {coin}</p>
    </div>
  )
}
