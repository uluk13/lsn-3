import React from 'react'

function Card({ title, description, url, price, onAdd }) {
  return (
    <div style={{ background: 'white', padding: '10px', margin: '10px', color: 'black' }}>
      <img src={url} alt="Card Image" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={onAdd}>Добавить в корзину</button>
    </div>
  )
}

export default Card
