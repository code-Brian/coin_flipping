import React from 'react'

export const Display = (props) => {
    const {success,coin, data} = props
  return (
    <div className="bg-amber-700 flex items-center justify-center h-96 align-center">
      <ul>
        <li>Coin has been set to: {coin}</li>
        {
          success ?
          <li>{data}</li> :
          <li>{data}</li>
        }
      </ul>
    </div>
  )
}
