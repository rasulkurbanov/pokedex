import pokes from "./pokes";
import Pokecard from './Pokecard/Pokecard'
import './App.css'


function App() {
  // const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  // const url2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

  let newArr1 = []
  let newArr2 = [...pokes]

  let firstExp = 0
  let secondExp = 0

  while (newArr1.length < newArr2.length) {
    let randomIndex = Math.floor(Math.random() * newArr2.length)
    let randomPokemon = newArr2.splice(randomIndex, 1)[0]
    newArr1.push(randomPokemon)
  }

  for(let i of newArr1) {
    firstExp += i.base_experience
  }

  for(let j of newArr2) {
    secondExp += j.base_experience
  }

  return (
    <div className="App">
      <h3>
      {
        firstExp > secondExp ? 'Winning TEAM with score: ' + firstExp : 'Loosers: ' + firstExp
      }
      </h3>
      <div className="cards">
        <Pokecard pokemons={newArr1}/>
      </div>
      <h3>
      {
        firstExp < secondExp ? 'Winning TEAM with score: ' + secondExp : 'Loosers: ' + secondExp
      }
      </h3>
      <div className="cards">
        <Pokecard pokemons={newArr2}/>
      </div>
    </div>
    )
  }


export default App;
