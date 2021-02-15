import pokes from "./pokes";
import Pokecard from './Pokecard/Pokecard'
import './App.css'


function App() {
  // const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  // const url2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

  let newArr1 = []
  let newArr2 = [...pokes]

  while (newArr1.length < newArr2.length) {
    let randomIndex = Math.floor(Math.random() * newArr2.length)
    let randomPokemon = newArr2.splice(randomIndex, 1)[0]
    newArr1.push(randomPokemon)
  }

  return (
    <div className="App">
      <Pokecard pokemons={newArr1}/>
      <Pokecard pokemons={newArr2}/>
    </div>
    )
  }


export default App;
