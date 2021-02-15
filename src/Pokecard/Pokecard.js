import React from 'react'
import './Pokecard.css'

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <p className="poke_name">{props.name}</p>
      <img src={props.img} alt="description" style={{width:"200px"}}></img>
      <div className="container">
        <p>Type: {props.type}</p>
        <p>EXP: {props.experience}</p>
      </div>
    </div>
  )
}


export default Pokecard