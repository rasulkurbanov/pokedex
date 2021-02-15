const pokes = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img: '' },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63, img: '' },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72, img: '' },
  { id: 12, name: 'Bufferfree', type: 'flying', base_experience: 178, img: '' },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img: '' },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img: '' },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225, img: '' },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img: '' },
]


let newArr = []
let newArr2 = []

for (let i = Math.floor(Math.random() * pokes.length); i <= pokes.length; i++) {
  if(newArr.length <= pokes.length/2) {
    newArr.push(pokes[i])
  }
  else{
    newArr2.push(pokes[i])
  }
}




export {newArr, newArr2, pokes}