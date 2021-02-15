import React from 'react'
import './Pokecard.css'

function Pokecard(props) {
  const url2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

  let firstGroup = 0
  let secondGroup = 0


  for(let i=0; i<props.pokemons.length; i++) {
    if(i <= (props.pokemons.length / 2) - 1) {
      firstGroup += props.pokemons[i].base_experience
    } 
    else {
      secondGroup += props.pokemons[i].base_experience
    }
  }


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
            alt="description" />
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




