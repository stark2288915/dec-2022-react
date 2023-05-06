import React from 'react';

function Map (props) {
    let RickAndMorty = props.arg;

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

export default Map;