/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/
import TheSimpsons from "./Componens/Simpsons/TheSimpsons";
import RendRickAndMorty from "./Componens/RickAndMorty/RendRickAndMorty";

/*
2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
    https://rickandmortyapi.com/api/character
        Створити 6 персонажів
*/

let RickAndMorty = [
  {id:578, name:'Snake Soldier', status:'Alive', species:'Animal',gender:'Male', img:'https://rickandmortyapi.com/api/character/avatar/578.jpeg'},
  {id:80, name:'Creepy Little Girl',status:'Alive',species:'Human', gender:'Female', img:'https://rickandmortyapi.com/api/character/avatar/80.jpeg'},
  {id:23, name:'Arcade Alien', status:'unknown', species:'Alien', gender:'Male', img:'https://rickandmortyapi.com/api/character/avatar/23.jpeg'},
  {id:32, name:'Bearded Lady', status:'Dead', species:'Alien', gender:'Female', img:'https://rickandmortyapi.com/api/character/avatar/32.jpeg'},
  {id:441, name:'Bearded Jerry', status:'Alive', species:'Human', gender:'Male', img:'https://rickandmortyapi.com/api/character/avatar/441.jpeg'},
  {id:749, name:'Coat Rack Head', status:'unknown', species:'Mythological Creature', gender:'Male', img:'https://rickandmortyapi.com/api/character/avatar/749.jpeg'}
];



function App() {
  return (
    <div className="App">
          <RendRickAndMorty arg={RickAndMorty}/>
    </div>
  );
}

export default App;
