import React, { useState } from 'react'
import Card from '../Card/Card'
import img from '../../assets/react.svg'

function Cards() {
  const card_list = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      url: img,
      price: "$10"
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      url: img,
      price: "$10"
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      url: img,
      price: "$10"
    }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <div className='main_block'>
        {card_list.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
            price={item.price}
            onAdd={() => addToCart(item)}
          />
        ))}
      </div>

      <div style={{ marginTop: '40px', background: '#222', padding: '20px' }}>
        <h2>Корзина</h2>

        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.title} — {item.price}
            </p>
          ))
        )}
      </div>
    </>
  )
}

export default Cards
