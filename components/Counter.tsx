import React from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: React.ReactNode
}

const Counter = ({setCount,children}: CounterProps) => {
  return (
    <>
        <div>{children}</div>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}> Reset </button>

    </>
  )
}

export default Counter