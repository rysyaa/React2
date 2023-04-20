import React from 'react'

const Counter = (props) => {
  return (
    <div>
        <h2>{props.counter}</h2>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
    </div>
  )
}

export default Counter