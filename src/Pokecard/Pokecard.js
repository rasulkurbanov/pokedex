import React, { Fragment } from 'react'
import './Pokecard.css'

function Pokecard(props) {
  const url2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
  return (
    props.pokemons.map((poke) => {
      return (
        <div className="Pokecard">
            <p className="poke_name">{poke.name}</p>
          <img src={
              poke.id < 10 
              ? 
                url2 + '00' + poke.id + '.png'
              : 
              poke.id >= 10 && poke.id < 100
              ?
                url2 + '0' + poke.id + '.png'
              :
              poke.id >= 100 
              ?
                url2 + poke.id + '.png'
              : 
              null
          }
            alt="description" style={{ width: "200px" }} />
          <div className="container">
            <p>Type: {poke.type}</p>
            <p>EXP: {poke.base_experience}</p>
          </div>
        </div>
      )
    })
  )
}
export default Pokecard




