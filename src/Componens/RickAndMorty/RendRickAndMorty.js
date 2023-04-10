import App from "../../App";

/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
    https://rickandmortyapi.com/api/character
        Створити 6 персонажів*/
function RendRickAndMorty(props){
    let RickAndMorty = props.arg
    return (
        RickAndMorty.map((value)=>
            <div>
                <div>Person's id - {value.id}</div>
                <div>Name is - {value.name}</div>
                <div>Gender - {value.gender}</div>
                <div>Status - {value.status}</div>
                <div>Species - {value.species}</div>
                <img src={value.img} alt={value.name}/>
                <hr/>
            </div>
        )
    )
}

export default RendRickAndMorty;