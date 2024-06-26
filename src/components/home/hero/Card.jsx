import React from 'react'
import Hero from './Hero'
import { hero } from '../../assets/data/data'

const Card = () => {
  return (
    <>
    <section className='cards'>
        {hero.map((item)=>(
            <div className="card" key={item.id}>
                <div className="left">
                    <img src={item.cover} alt="" />
                </div>
                <div className="right">
                    <h4>{item.name}</h4>
                    <p>{item.items} items</p>
                </div>
            </div>
        ))}
    </section>
    </>
  )
}

export default Card