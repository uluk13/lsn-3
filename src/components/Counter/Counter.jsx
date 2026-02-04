import React, { useState } from 'react'
import './style.css'

const Counter = () => {
const [count, setCount] = useState(0);


    const minus_fn = () => {
        setCount(count - 1);
    }

    const plus_fn = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <p>Nurdin</p>

      <div className="main_cunter">
        <button onClick={minus_fn}>-</button>
        <p>{count}</p>
        <button onClick={plus_fn}>+</button>
      </div>
    </div>
  )
}

export default Counter