import { pokes } from "./pokes";
import Pokecard from './Pokecard/Pokecard'
import './App.css'


function App() {
  const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  let newArr = []
  let newArr2 = []

  for (let i = Math.floor(Math.random() * pokes.length); i < pokes.length; i++) {
    if (newArr.length <= pokes.length / 2) {
      newArr.push(pokes[i])
    }
    else {
      newArr2.push(pokes[i])
    }
  }

  return (
  newArr.length === 4 && newArr2.length === 4 ?
      <div className="App">
        {
          newArr.map((poke) => {
            return (
              <Pokecard
                name={poke.name}
                img={url + poke.id + '.png'}
                experience={poke.base_experience}
                type={poke.type}
                key={poke.id}
              />
            )
          })
        }
        <br />
        {
          newArr2.map((poke) => {
            return (
              <Pokecard
                name={poke.name}
                img={url + poke.id + '.png'}
                experience={poke.base_experience}
                type={poke.type}
                key={poke.id}
              />
            )
          })
        }
      </div>
  : "fu*k"
    )
  }


export default App;
